import { create } from "zustand";

type User = {
  id: string;
  name: string;
  email: string;
  role: string;
};

type AuthStore = {
  accessToken: string | null;
  user: User | null;
  loading: boolean;
  setAccessToken: (accessToken: string) => void;
  setUser: (user: User | null) => void;
  setLoading: (loading: boolean) => void;
};

const useAuthStore = create<AuthStore>((set) => ({
  accessToken: null,
  user: null,
  loading: false,
  setUser: (user) => set({ user }),
  setAccessToken: (accessToken) => set({ accessToken }),
  setLoading: (loading) => set({ loading }),
}));

export default useAuthStore;
