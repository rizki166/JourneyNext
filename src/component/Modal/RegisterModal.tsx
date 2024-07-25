import { Button, TextField, Box, Typography } from "@mui/material";

interface RegisterModalProps {
    open: boolean;
    onClose: () => void;
}

const RegisterModal: React.FC<RegisterModalProps> = ({ open, onClose }) => {
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
                }}
            >
                <Box sx={{ display: "flex", justifyContent: "space-between", width: "100%", mb: 1 }}>
                    <img src="/atlas.png" alt="logo" style={{ borderRadius: "5px", width: "40px" }} />
                    <img src="/leaf.png" alt="logo" style={{ borderRadius: "5px", width: "60px" }} />
                </Box>
                <Typography
                    variant="h5"
                    fontWeight={600}
                    fontFamily="Inter"
                    sx={{
                        color: "black",
                        textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
                        letterSpacing: "0.5px",
                        mb: 1,
                    }}
                >
                    Register
                </Typography>
                <Box sx={{ width: "90%", px: 2 }}>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="fullName"
                        label="Full Name"
                        type="text"
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
                        id="email"
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
                    <TextField
                        margin="dense"
                        id="phone"
                        label="Phone Number"
                        type="text"
                        fullWidth
                        variant="outlined"
                        size="small"
                        sx={{
                            mb: 2,
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
                    sx={{ width: "90%", mb: 2 }}
                    onClick={onClose}
                    variant="contained"
                    color="primary"
                    size="small"
                >
                    Register
                </Button>
            </Box>
        </Box>
    );
};

export default RegisterModal;
