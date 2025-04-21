import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-pastel min-h-screen flex flex-col px-6 md:px-8 py-2 items-center justify-center gap-5 ">
      <Image
        src="./nutritracklogo.svg"
        alt="leaf logo"
        width={150}
        height={100}
      />
      <h1 className="text-title text-3xl md:text-4xl font-bold text-center">
        Track Your Nutrition Journey
      </h1>
      <p className="text-gray-700 text-center text-lg">
        Your personal meal tracking assistant for a healthier lifestyle
      </p>
      <div className="flex gap-2 items-center">
        <Link href={"/register"}>
          <Button className="py-5 px-7 font-bold text-base bg-accent-primary text-white">
            Get Started
          </Button>
        </Link>
        <Link href={"/login"}>
          <Button className="py-5 px-7 font-bold text-base border border-accent-primary bg-transparent text-accent-primary ">
            Log In
          </Button>
        </Link>
      </div>
      <div className="bg-white rounded-md p-5 flex flex-col items-center  md:max-w-[30%]">
        <h2 className="text-xl font-bold">Coming Soon</h2>
        <p className="text-zinc-600 p-5 text-center font-semibold">
          NutriTrack is currently in development. Create an account now to be
          notified when we launch!
        </p>
      </div>
    </div>
  );
}
