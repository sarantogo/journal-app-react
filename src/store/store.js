import { configureStore } from "@reduxjs/toolkit";
import auth from "./auth/authSlice";
import journal from "./journal/journalSlice";

export const store = configureStore({
  reducer: {
    auth,
    journal,
  },
});
