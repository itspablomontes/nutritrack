import type {
  LoginResponse,
  RefreshResponse,
  RegisterResponse,
} from "@/@types/auth";

const baseURL = process.env.API_BASE_URL || "http://localhost:3333";

export async function login(data: {
  email: string;
  password: string;
}): Promise<LoginResponse> {
  const res = await fetch(`${baseURL}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    const errorData = await res.json().catch(() => ({}));
    throw new Error(errorData.message);
  }
  return res.json();
}

export async function register(data: {
  name: string;
  email: string;
  password: string;
}): Promise<RegisterResponse> {
  const res = await fetch(`${baseURL}/auth/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    const errorData = await res.json().catch(() => ({}));
    throw new Error(errorData.message);
  }
  return res.json();
}

export async function refresh(): Promise<RefreshResponse> {
  const res = await fetch(`${baseURL}/auth/refresh`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
  });

  if (!res.ok) {
    const errorData = await res.json().catch(() => ({}));
    throw new Error(errorData.message);
  }

  return res.json();
}

export async function logout() {
  const res = await fetch(`${baseURL}/auth/logout`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
  });
  if (!res.ok) {
    const errorData = await res.json().catch(() => ({}));
    throw new Error(errorData.message);
  }

  return res.json();
}
