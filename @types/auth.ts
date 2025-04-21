import type { User } from "./user";

export interface LoginResponse {
  user: User;
}

export interface RegisterResponse {
  user: User;
}

export interface RefreshResponse {
  user: User;
}

export interface AuthStore {
  user: User | null;
  loading: boolean;

  loginUser: (data: { email: string; password: string }) => Promise<void>;
  registerUser: (data: {
    name: string;
    email: string;
    password: string;
  }) => Promise<void>;
  refreshSession: () => Promise<void>;
  logoutUser: () => Promise<void>;
}
