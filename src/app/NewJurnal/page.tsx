"use client";

import Navbar from "@/component/Navbar/Navbar";
import { Box, Typography, TextField, Button } from "@mui/material";
import { useState } from "react";
import axios from "axios";
import dynamic from "next/dynamic";


const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

import "react-quill/dist/quill.snow.css";

const NewJurnal = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState<File | null>(null);
    const [errorMessage, setErrorMessage] = useState("");
    const [successMessage, setSuccessMessage] = useState("");


    const token = localStorage.getItem("authToken") || "";

    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files[0]) {
            setImage(event.target.files[0]);
        }
    };

    const handlePost = async () => {
        if (!title || !description || !image) {
            setErrorMessage("All fields are required!");
            return;
        }

        const formData = new FormData();
        formData.append("title", title);
        formData.append("description", description);
        formData.append("image", image);

        try {
            const response = await axios.post(
                "http://localhost:5000/journey",
                formData,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                        Authorization: `Bearer ${token}`, // Menambahkan header Authorization
                    },
                }
            );

            console.log(response.data);
            setSuccessMessage("Journey posted successfully!");
            setErrorMessage("");
            setTitle("");
            setDescription("");
            setImage(null);
        } catch (error) {
            console.error(error);
            setErrorMessage("Failed to post journey. Please try again.");
            setSuccessMessage("");
        }
    };

    return (
        <Box>
            <Navbar />
            <Box sx={{ mt: 10, ml: 4 }}>
                <Typography
                    variant="h3"
                    fontWeight={600}
                    fontFamily="Inter"
                    sx={{
                        color: "black",
                        textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
                        letterSpacing: "0.5px",
                    }}
                >
                    New Jurnal
                </Typography>
                <form onSubmit={(e) => e.preventDefault()}>
                    <TextField
                        label="Title"
                        variant="outlined"
                        fullWidth
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        sx={{ mt: 3, mb: 2 }}
                    />
                    <ReactQuill
                        theme="snow"
                        value={description}
                        onChange={setDescription}
                        style={{ height: "200px", marginBottom: "24px" }}
                    />
                    <input
                        accept="image/*"
                        type="file"
                        onChange={handleImageChange}
                        style={{ marginBottom: "16px" }}
                    />
                    <Button variant="contained" color="primary" onClick={handlePost}>
                        Post Journey
                    </Button>
                </form>
                {errorMessage && (
                    <Typography color="error" sx={{ mt: 2 }}>
                        {errorMessage}
                    </Typography>
                )}
                {successMessage && (
                    <Typography color="primary" sx={{ mt: 2 }}>
                        {successMessage}
                    </Typography>
                )}
            </Box>
        </Box>
    );
};

export default NewJurnal;
