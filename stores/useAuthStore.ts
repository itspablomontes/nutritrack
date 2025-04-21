import { create } from "zustand";
import type { AuthStore } from "@/@types/auth";
import { login, register, refresh, logout } from "@/api/auth";

const useAuthStore = create<AuthStore>((set) => ({
  user: null,
  loading: false,

  loginUser: async (data) => {
    set({ loading: true });
    try {
      const res = await login(data);
      set({ user: res.user });
    } finally {
      set({ loading: false });
    }
  },
  registerUser: async (data) => {
    set({ loading: true });
    try {
      const res = await register(data);
      await login({ email: res.user.email, password: data.password });
      set({ user: res.user });
    } finally {
      set({ loading: false });
    }
  },
  refreshSession: async () => {
    set({ loading: true });
    try {
      await refresh();
    } finally {
      set({ loading: false });
    }
  },
  logoutUser: async () => {
    set({ loading: true });
    try {
      await logout();
    } finally {
      set({ loading: false });
    }
  },
}));

export default useAuthStore;
