import Header from "@/components/Header";
import type { ReactNode } from "react";

export default function UserLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <div className="bg-pastel min-h-screen">{children}</div>
    </>
  );
}
