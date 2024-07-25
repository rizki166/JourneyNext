"use client";

import CardJourney from "@/component/Card/CardJourney";
import InputJourney from "@/component/Input/InputJourney";
import LoginModal from "@/component/Modal/LoginModal";
import RegisterModal from "@/component/Modal/RegisterModal";
import { useAppDispatch, useAppSelector } from "@/store";
import { getJourneyAsync } from "@/store/async/journey";
import { Box, Button, Typography, useMediaQuery } from "@mui/material";
import { useEffect, useState } from "react";

const Home = () => {
  const isMobile = useMediaQuery("(max-width: 600px)");
  const [isLoginOpen, setLoginOpen] = useState(false);
  const [isRegisterOpen, setRegisterOpen] = useState(false);
  const dispatch = useAppDispatch()
  const journey = useAppSelector((state) => state.journey)

  const handleLoginOpen = () => setLoginOpen(true);
  const handleLoginClose = () => setLoginOpen(false);

  const handleRegisterOpen = () => setRegisterOpen(true);
  const handleRegisterClose = () => setRegisterOpen(false);
  useEffect(() => {
    dispatch(getJourneyAsync())
  }, [dispatch])
  return (
    <Box sx={{ position: "relative" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "end",
          alignItems: "center",
          position: "absolute",
          top: 10,
          right: 20,
          gap: 2,
        }}
      >
        <Button
          sx={{
            color: "white",
            border: "1px solid white",
            fontWeight: 600,
            width: isMobile ? "50px" : "100px",
          }}
          onClick={handleLoginOpen}
        >
          Login
        </Button>

        <Button
          sx={{
            backgroundColor: "#4486de",
            color: "white",
            fontWeight: 600,
            width: isMobile ? "100%" : "100px",
          }}
          onClick={handleRegisterOpen}
        >
          Register
        </Button>
      </Box>

      <img
        src="/icon.png"
        alt="logo"
        style={{
          position: "absolute",
          top: 10,
          left: 20,
          width: isMobile ? "20%" : "10%",
        }}
      />
      <img
        src="/phuket.png"
        alt="logo"
        width="100%"
        height={isMobile ? "250px" : "100%"}
      />

      {!isMobile && (
        <Box sx={{ position: "absolute", top: 200, left: 100 }}>
          <Typography color="white" variant="h3">
            The Journey
          </Typography>
          <Typography color="white" variant="h3">
            you ever dreamed of.
          </Typography>
          <Typography color="white">
            We made a tool so you can easily keep & share your travel memories.
            But there is a lot more
          </Typography>
        </Box>
      )}
      <h1 style={{ marginLeft: "20px" }}>Journey</h1>
      <InputJourney />
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
      <LoginModal open={isLoginOpen} onClose={handleLoginClose} />
      <RegisterModal open={isRegisterOpen} onClose={handleRegisterClose} />
    </Box>
  );
};

export default Home;
