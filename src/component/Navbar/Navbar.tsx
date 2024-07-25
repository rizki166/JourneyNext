"use client";

import { Box, useMediaQuery, Typography } from "@mui/material";
import { useState } from "react";
import { AiOutlineUser, AiOutlineFileText, AiOutlineBook, AiOutlineLogout } from "react-icons/ai";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const Navbar = () => {
    const isMobile = useMediaQuery("(max-width: 600px)");
    const [open, setOpen] = useState(false);

    // Variabel untuk animasi modal
    const modalVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -20 },
    };

    return (
        <Box
            sx={{
                width: "100%",
                bgcolor: "white",
                py: 2,
                position: "fixed",
                top: 0,
                left: 0,
                zIndex: 1000,
            }}
        >
            <Box
                display={"flex"}
                justifyContent={"space-between"}
                alignItems={"center"}
                sx={{ width: "100%" }}
            >
                <Box display="flex" alignItems="center" pl={2}>
                    <img src="/icon2.png" alt="icon" style={{ height: "35px" }} />
                </Box>
                <Box position="relative">
                    <Box
                        width={35}
                        height={35}
                        borderRadius={"100%"}
                        border={"1px solid #4486de"}
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                        mr={2}
                        onClick={() => setOpen(!open)}
                        sx={{ cursor: "pointer" }}
                    >
                        <img
                            src="/alam.jpeg"
                            alt="right icon"
                            style={{ width: "100%", height: "100%", borderRadius: "100%" }}
                        />
                    </Box>
                    <AnimatePresence>
                        {open && (
                            <motion.div
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                variants={modalVariants}
                                style={{
                                    position: "absolute",
                                    top: "50px",
                                    right: 0,
                                    backgroundColor: "white",
                                    boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
                                    borderRadius: "8px",
                                    overflow: "hidden",
                                    zIndex: 2000,
                                }}
                            >
                                <Box p={2} width={150}>
                                    <Link href="/Profile" style={{ textDecoration: "none", color: "black" }}>
                                        <MenuItem icon={<AiOutlineUser color="yellow" />} text="Profile" />
                                    </Link>
                                    <Link href="/NewJurnal" style={{ textDecoration: "none", color: "black" }}>
                                        <MenuItem icon={<AiOutlineFileText color="green" />} text="New Jurnal" />
                                    </Link>
                                    <Link href="/Bookmark" style={{ textDecoration: "none", color: "black" }}>
                                        <MenuItem icon={<AiOutlineBook color="blue" />} text="Bookmark" />
                                    </Link>
                                    <Link href="/" style={{ textDecoration: "none", color: "black", fontSize: "20px", fontWeight: "bold" }}>
                                        <MenuItem icon={<AiOutlineLogout color="red" />} text="Logout" />
                                    </Link>
                                </Box>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </Box>
            </Box>
        </Box>
    );
};

interface MenuItemProps {
    icon: React.ReactNode;
    text: string;
}
const MenuItem: React.FC<MenuItemProps> = ({ icon, text }) => (
    <Box
        display="flex"
        alignItems="center"
        sx={{
            cursor: "pointer",
            "&:hover": { backgroundColor: "#f5f5f5" },
            p: 1,
            borderRadius: "4px",
        }}
    >
        {icon}
        <Typography ml={1} fontWeight={600}>{text}</Typography>
    </Box>
);

export default Navbar;
