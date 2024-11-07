"use client";
import { MdWbSunny, MdDarkMode } from "react-icons/md"; 
import { useTheme } from "@/context/ThemeProvider";

const ThemeToggleButton = () => {
  const { mode, setMode } = useTheme();

  const toggleTheme = () => {
    const newMode = mode === "light" ? "dark" : "light";
    setMode(newMode);
    document.body.style.backgroundColor = newMode === "light" ? "#ffffff" : "#111827";
  };

  return (
    <button
      onClick={toggleTheme}
      className="absolute md:top-4 md:right-4 right-2 top-2 p-2 rounded-full transition-all duration-300 flex items-center justify-center"
      style={{
        backgroundColor: mode === "dark" ? "white" : "#111827",
        color: mode === "dark" ? "#fbbf24" : "#ffffff", 
        width: "40px",
        height: "40px",
        zIndex: 1000
      }}
    >
      {mode === "dark" ? (
        <MdWbSunny className="h-6 w-6" />
      ) : (
        <MdDarkMode className="h-6 w-6" />
      )}
    </button>
  );
};

export default ThemeToggleButton;