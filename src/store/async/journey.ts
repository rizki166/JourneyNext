"use client";

import { getJourney } from "@/lib/call/journey";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getJourneyAsync = createAsyncThunk(
  "journey/getJourneyAsync",
  async () => {
    try {
      const res = await getJourney();
      return res.data.data;
    } catch (error) {
      console.error("Error in getJourneyAsync:", error);
      throw error;
    }
  }
);

export const getJourneyByIdAsync = createAsyncThunk(
  "journey/getById",
  async (id: number) => {
    const response = await axios.get(`http://localhost:5000/journey/${id}`);
    return response.data;
  }
);
