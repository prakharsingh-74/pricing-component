"use client";
import { useState } from "react";
import Header from "@/components/Header";
import PricingCard from "@/components/PricingCard";
import { useTheme } from "@/context/ThemeProvider";
import ThemeToggleButton from "@/components/ThemeToggleButton"; 

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);
  const { mode } = useTheme();

  const handleToggleChange = () => {
    setIsYearly(!isYearly);
  };

  return (
    <>
      <ThemeToggleButton />
      <div className={`relative md:w-[90%] md:h-[80%] w-full h-full  mx-auto rounded-xl shadow-2xl p-8 ${mode === 'light' ? "bg-white" : "bg-[#1e1e2f] shadow-gray-700"}`}>
        <div className={`w-full h-[50%] ${mode === 'light' ? 'bg-[#f5f8f9]' : "bg-[#222234]"} rounded-t-xl rounded-bl-[120px] absolute top-0 left-0`}></div>
        <div className={`h-1/2 ${mode === 'light' ? "text-black" : "text-[#e0e0e0]"} relative text-center flex flex-col gap-10 `}>
          <Header />
          <PricingCard
            handleToggleChange={handleToggleChange}
            isYearly={isYearly}
          />
        </div>
      </div>
    </>
  );
};

export default Pricing;