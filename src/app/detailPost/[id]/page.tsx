"use client";
import { Box, Typography, Button } from "@mui/material";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Navbar from "@/component/Navbar/Navbar";
import DOMPurify from 'dompurify';
import moment from "moment";

interface IUser {
    id: number;
    fullname: string;
}

interface IJourney {
    id: number;
    title: string;
    image: string | null;
    description: string;
    createdAt: string;
    user: IUser;
}

const DetailPost = () => {
    const router = useRouter();
    const { id } = useParams();
    const [journey, setJourney] = useState<IJourney | null>(null);

    useEffect(() => {
        if (id) {
            fetchJourneyById(id as string);
        }
    }, [id]);

    const fetchJourneyById = async (id: string) => {
        try {
            const response = await fetch(`http://localhost:5000/journey/${id}`);
            if (!response.ok) {
                throw new Error(`Error fetching journey: ${response.statusText}`);
            }
            const result = await response.json();
            if (result.status && result.data) {
                setJourney(result.data);
            } else {
                console.error("Unexpected response structure:", result);
            }
        } catch (error) {
            console.error("Error fetching journey:", error);
        }
    };

    if (!journey) return <p>Loading...</p>;

    // Menghapus tag HTML dari deskripsi
    const formattedDescription = DOMPurify.sanitize(journey.description, {
        USE_PROFILES: { html: true }
    });


    return (
        <Box>
            <Navbar />
            <Box sx={{ mt: 10, ml: 4, width: "95%" }}>
                <Box display="flex" justifyContent={'space-between'}>
                    <Typography
                        variant="h3"
                        fontWeight={600}
                        fontFamily="sans-serif"
                        sx={{
                            color: 'black',
                            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
                            letterSpacing: '0.5px',
                        }}
                    >
                        {journey.title}
                    </Typography>
                    <Box>
                        <Typography
                            variant="h6"
                            fontWeight={400}
                            sx={{ marginTop: "20px" }}
                        >
                            {journey.user.fullname} - {moment(journey.createdAt).fromNow()}
                        </Typography>
                    </Box>
                </Box>

                <img
                    src={journey.image ? `http://localhost:5000/uploads/${journey.image}` : '/placeholder-image.png'}
                    alt={journey.title}
                    style={{ width: "100%", height: "auto", borderRadius: "5px", marginTop: "20px" }}
                />

                <Typography
                    component="div"
                    sx={{
                        fontSize: "16px",
                        lineHeight: 1.5,
                        overflowWrap: "break-word",
                        whiteSpace: "pre-wrap",
                    }}
                    dangerouslySetInnerHTML={{ __html: formattedDescription }}
                />
                <Button
                    sx={{ marginTop: "20px", backgroundColor: "#4486de", color: "white", fontWeight: 600 }}
                    onClick={() => router.push('/')}
                >
                    Back to Home
                </Button>
            </Box>
        </Box>
    );
};

export default DetailPost;
