"use client";
import { Box, Typography, useMediaQuery } from "@mui/material";
import { IJourney } from "../../type/app";
import BottonBookmark from "../Button/BottonBookmark";
import moment from "moment";
import DOMPurify from 'dompurify';
import Link from "next/link";

interface CardProps {
    journey: IJourney;
}

const CardJourney: React.FC<CardProps> = ({ journey }) => {
    const isMobile = useMediaQuery("(max-width: 600px)");


    const truncateText = (text: string, maxLength: number) => {
        // Sanitasi teks
        const sanitizedText = DOMPurify.sanitize(text);


        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = sanitizedText;
        const plainText = tempDiv.textContent || '';


        if (plainText.length > maxLength) {
            return plainText.slice(0, maxLength) + "...";
        }
        return plainText;
    };


    function formatTime(createdAt: number): string {
        const durationMilliseconds = moment().diff(moment(createdAt));
        const days = moment.duration(durationMilliseconds).asDays();
        const roundedDays = Math.round(days);
        return `${roundedDays}d`;
    }

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                width: isMobile ? "90%" : "20%",
                bgcolor: "white",
                borderRadius: "5px",
                margin: isMobile ? "5% 0" : "20px",
                position: "relative",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                "&:hover": {
                    transform: "translateY(-5px)",
                    boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
                },
            }}
        >
            <BottonBookmark journeyId={journey.id as number} />

            <img
                src={`http://localhost:5000/uploads/${journey.image}`}
                alt="Journey"
                style={{ width: "100%", borderRadius: "5px", height: "12rem", objectFit: "cover" }}
            />

            <Typography
                sx={{ marginTop: "10px", marginLeft: "10px", fontWeight: 600, fontSize: "20px" }}
            >
                {journey.title}
            </Typography>

            <Box display="flex" alignItems="center" sx={{ marginLeft: "10px", marginTop: "10px" }}>
                <Typography sx={{ color: "gray", fontSize: "14px" }}>
                    {formatTime(journey.createdAt)}
                </Typography>
                <Typography sx={{ marginLeft: "10px" }}>
                    {journey.user.fullname}
                </Typography>
            </Box>
            <Link href={`/detailPost/${journey.id}`} passHref style={{ textDecoration: "none", color: "black" }}>
                <Typography
                    sx={{ marginLeft: "10px", marginTop: "10px" }}
                >
                    {truncateText(journey.description, 100)}
                </Typography>
            </Link>
        </Box>
    );
};

export default CardJourney;
