import { Button, TextField, Box, Typography, Link } from "@mui/material";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

interface LoginModalProps {
    open: boolean;
    onClose: () => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ open, onClose }) => {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const handleLogin = async () => {
        try {
            const response = await fetch("http://localhost:5000/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email: email,
                    password: password,
                }),
            });

            const data = await response.json();
            console.log(data); // Untuk debugging

            if (response.ok) {
                const { data: token, message, status } = data;
                if (status && token) {
                    localStorage.setItem("authToken", token); 
                    router.push("/Profile");
                } else {
                    console.error("Token tidak ditemukan dalam respons");
                }
            } else {
                console.error("Login gagal: ", data.message);
            }
        } catch (error) {
            console.error("Terjadi kesalahan saat login: ", error);
        }
    };
    return (
        <Box
            sx={{
                display: open ? "flex" : "none",
                position: "fixed",
                top: 0,
                left: 0,
                width: "100vw",
                height: "100vh",
                bgcolor: "rgba(0, 0, 0, 0.5)",
                justifyContent: "center",
                alignItems: "center",
                zIndex: 1300,
            }}
        >
            <Box
                sx={{
                    width: "90%",
                    maxWidth: "400px",
                    maxHeight: "80vh",
                    bgcolor: "white",
                    borderRadius: 2,
                    boxShadow: 24,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 1.5,
                    p: 3,
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        width: "100%",
                        mb: 1,
                    }}
                >
                    <img
                        src="/atlas.png"
                        alt="logo"
                        style={{ borderRadius: "5px", width: "40px" }}
                    />
                    <img
                        src="/leaf.png"
                        alt="logo"
                        style={{ borderRadius: "5px", width: "60px" }}
                    />
                </Box>
                <Typography
                    variant="h5"
                    fontWeight={600}
                    fontFamily="inherit"
                    sx={{
                        color: "black",
                        textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
                        letterSpacing: "0.5px",
                        mb: 1,
                    }}
                >
                    LOGIN
                </Typography>
                <Box sx={{ width: "90%", px: 2 }}>
                    <TextField
                        margin="dense"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        label="Email Address"
                        type="email"
                        fullWidth
                        variant="outlined"
                        size="small"
                        sx={{
                            mb: 1.5,
                            "& .MuiOutlinedInput-root": {
                                "& fieldset": {
                                    borderColor: "#ccc",
                                },
                                "&:hover fieldset": {
                                    borderColor: "#4486de",
                                },
                                "&.Mui-focused fieldset": {
                                    borderColor: "#4486de",
                                },
                            },
                        }}
                    />
                    <TextField
                        margin="dense"
                        id="password"
                        label="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        type="password"
                        fullWidth
                        variant="outlined"
                        size="small"
                        sx={{
                            mb: 1.5,
                            "& .MuiOutlinedInput-root": {
                                "& fieldset": {
                                    borderColor: "#ccc",
                                },
                                "&:hover fieldset": {
                                    borderColor: "#4486de",
                                },
                                "&.Mui-focused fieldset": {
                                    borderColor: "#4486de",
                                },
                            },
                        }}
                    />
                </Box>
                <Button
                    sx={{ width: "90%", mb: 1 }}
                    onClick={handleLogin}
                    variant="contained"
                    color="primary"
                    size="small"
                >
                    Login
                </Button>
                {errorMessage && (
                    <Typography color="error" variant="body2" sx={{ mb: 1 }}>
                        {errorMessage}
                    </Typography>
                )}
                <Typography sx={{ mb: 5 }}>
                    Don't have an account? <Link href="#" onClick={onClose}>Click here</Link>
                </Typography>
            </Box>
        </Box>
    );
};

export default LoginModal;
