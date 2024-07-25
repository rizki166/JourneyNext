"use client"

import CardJourney from "@/component/Card/CardJourney"
import Navbar from "@/component/Navbar/Navbar"
import { Box, Typography } from "@mui/material"


const Bookmark = () => {
    return (
        <Box>
            <Navbar />
            <Box sx={{ mt: 10, ml: 4 }}>
                <Typography
                    variant="h3"
                    fontWeight={600}
                    fontFamily="Inter"
                    sx={{
                        color: 'black',
                        textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
                        letterSpacing: '0.5px',
                    }}
                >
                    Bookmark
                </Typography>
                <CardJourney />
            </Box>
        </Box>
    )
}
export default Bookmark