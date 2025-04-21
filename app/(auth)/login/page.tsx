import LoginForm from "@/components/auth/LoginForm";
import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";
import React from "react";

export default function Login() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      <div className="bg-white shadow-md  p-8 rounded-md w-full flex flex-col gap-5 md:max-w-lg items-center">
        <Icon
          icon="tabler:leaf"
          width="35"
          height="35"
          style={{ color: "var(--accent)" }}
        />
        <h1 className="text-2xl font-bold">Welcome Back!</h1>
        <p className="text-accent-primary">Let's fuel your journey!</p>
        <LoginForm />
        <Link
          href={"/login"}
          className="text-accent-primary font-bold cursor-pointer hover:opacity-80"
        >
          Forgot Password?
        </Link>
        <p>
          New here?{" "}
          <Link
            href={"/register"}
            className="text-accent-primary font-bold cursor-pointer hover:opacity-80"
          >
            Sign Up
          </Link>
        </p>
      </div>
    </main>
  );
}
