import React from "react";

export default function CardComingSoon() {
  return (
    <div className="bg-white rounded-md p-5 flex flex-col items-center max-w-[30%]">
      <h2 className="text-xl font-bold">Coming Soon</h2>
      <p className="text-zinc-600 p-5 text-center font-semibold">
        NutriTrack is currently in development. Create an account now to be
        notified when we launch!
      </p>
    </div>
  );
}
