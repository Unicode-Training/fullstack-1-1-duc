import { create } from "zustand";
import { instance } from "../libs/axios";

//Custom hook
export const useAuth = create((set) => {
  return {
    user: {},
    isAuthenticated: false,
    isLoading: true,
    getProfile: async () => {
      try {
        const response = await instance.get(`/auth/profile`);
        set({
          user: response.data,
          isAuthenticated: true,
        });
      } catch {
        set({
          user: {},
          isAuthenticated: false,
        });
      } finally {
        set({
          isLoading: false,
        });
      }
    },
    logout: () => {
      localStorage.removeItem("access_token");
      localStorage.removeItem("refresh_token");
      set({
        user: {},
        isAuthenticated: false,
        isLoading: false,
      });
    },
  };
});
