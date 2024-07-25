"use client";

import API from ".";

export const getJourney = async () => {
  return await API.get("journey");
};

export const getJourneyById = async (id: number) => {
  return await API.get(`journey/${id}`);
};
