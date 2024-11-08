import Pricing from "@/components/Pricing";
import { ThemeProvider } from "@/context/ThemeProvider";

export default function Home() {
  return (
    <>
      <ThemeProvider>
        <div className="w-screen h-screen flex justify-center items-center">
          <Pricing />
        </div>
      </ThemeProvider>
    </>
  );
}