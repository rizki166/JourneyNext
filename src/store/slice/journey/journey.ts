"use client";
import { getJourneyAsync } from "@/store/async/journey";
import { IJourney } from "@/type/app";
import { createSlice } from "@reduxjs/toolkit";
// import { IJourney } from "../../../type/app";
// import { getJourneyAsync } from "../../async/journey";

interface IInitialState {
  journey: IJourney[];
}

const initialState: IInitialState = {
  journey: [],
};

const journeySlice = createSlice({
  name: "journey",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getJourneyAsync.fulfilled, (state, action) => {
      state.journey = action.payload;
    });
  },
});

export default journeySlice.reducer;
