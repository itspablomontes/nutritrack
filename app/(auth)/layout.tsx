import type { ReactNode } from "react";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return <div className="bg-pastel min-h-screen px-6 py-4">{children}</div>;
}
