"use client";
import CardJourney from "@/component/Card/CardJourney";
import Navbar from "@/component/Navbar/Navbar";
import { useAppDispatch, useAppSelector } from "@/store";
import { getJourneyAsync } from "@/store/async/journey";
import { Box, Typography } from "@mui/material";
import { useEffect } from "react";

const Profile = () => {
    const dispatch = useAppDispatch()
    const journey = useAppSelector((state) => state.journey)

    useEffect(() => {
        dispatch(getJourneyAsync())
    }, [dispatch])
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
                    Profile
                </Typography>
            </Box>
            <Box display="flex" justifyContent="center" mt={4}>
                <Box
                    sx={{
                        padding: 3,
                        borderRadius: 2,
                        textAlign: 'center'
                    }}
                >
                    <Box
                        width={100}
                        height={100}
                        borderRadius="50%"
                        border="2px solid #4486de"
                        overflow="hidden"
                        mx="auto"
                        mb={2}
                    >
                        <img
                            src="/alam.jpeg"
                            alt="Profile"
                            style={{ width: "100%", height: "100%" }}
                        />
                    </Box>
                    <Typography variant="h6" fontWeight={600} fontFamily={"inherit"}>
                        Ucok
                    </Typography>
                    <Typography variant="body2" color="textSecondary" sx={{ mt: 1 }}>
                        ucok@gmail.com
                    </Typography>
                    <Box sx={{

                        display: "flex",
                        flexDirection: "row",
                        flexWrap: "wrap",
                        gap: 2,
                        justifyContent: "center",
                        marginTop: "20px",
                    }}>
                        {journey.journey.map((journey) => (
                            <CardJourney key={journey.id} journey={journey} />
                        ))

                        }
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

export default Profile;