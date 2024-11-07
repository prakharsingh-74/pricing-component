import { useTheme } from "@/context/ThemeProvider";
import React from "react";
import Image from "next/image";

const Header = () => {
  const { mode } = useTheme();

  return (
    <div className="relative flex flex-col items-center mt-10">
      <div className="absolute inset-0 flex justify-center items-center">
        <div className="relative w-full h-32">
          <Image
            src="/images/pattern-circles.svg"
            alt="Background Pattern"
            layout="fill"
            className={`${mode === 'light' ? "opacity-100" : "opacity-20"} object-contain`}
          />
        </div>
      </div>
      <div className={`font-bold text-3xl ${mode === 'light' ? 'text-[#322463]' : 'text-[#a5a5a5]'}`}>
        Simple, traffic-based pricing
      </div>
      <div className={`font-medium text-sm ${mode === 'light' ? 'text-gray-500' : 'text-gray-300'}`}>
        Sign-up for our 30-day trial. No credit card required.
      </div>
    </div>
  );
};

export default Header;