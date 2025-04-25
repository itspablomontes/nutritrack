import Image from "next/image";
import { Icon } from "@iconify/react";

export default function Header() {
  return (
    <div className="flex justify-between items-center px-6 py-4 md:px-50 md:py-4 bg-white">
      <Image
        src="./nutritracklogo.svg"
        alt="leaf logo"
        width={150}
        height={100}
      />
      <button className="cursor-pointer">
        <Icon
          icon="ic:baseline-menu"
          width="40"
          height="40"
          style={{ color: "var(--accent)" }}
          className="md:hidden"
        />
      </button>
    </div>
  );
}
