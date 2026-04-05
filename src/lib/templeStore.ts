import { TEMPLES_DATA } from "../data/temples";
import type { Temple } from "../types";

const STORAGE_KEY = "temple_heritage_data";

export const getTemples = (): Temple[] => {
  if (typeof window === "undefined") return TEMPLES_DATA;
  const stored = localStorage.getItem(STORAGE_KEY);
  if (!stored) return TEMPLES_DATA;
  try {
    return JSON.parse(stored);
  } catch (e) {
    console.error("Failed to parse stored temples", e);
    return TEMPLES_DATA;
  }
};

export const saveTemples = (temples: Temple[]) => {
  if (typeof window === "undefined") return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(temples));
};

export const resetTemples = () => {
  if (typeof window === "undefined") return;
  localStorage.removeItem(STORAGE_KEY);
};
