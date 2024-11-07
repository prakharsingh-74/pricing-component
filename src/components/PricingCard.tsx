import { useTheme } from "@/context/ThemeProvider";
import Image from "next/image";
import { useState } from "react";

type PricingCardProps = {
  handleToggleChange: () => void;
  isYearly: boolean;
};

const PricingCard = ({ handleToggleChange, isYearly }: PricingCardProps) => {
  const { mode } = useTheme();
  const [price, setPrice] = useState<number>(16);
  return (
    <div className={`mx-auto sm:w-[80%] md:w-[70%] lg:w-[50%] xl:w-[45%] rounded-lg md:px-14 px-6 py-6 ${mode === 'light' ? 'bg-white shadow-xl' : 'bg-[#1e1e2f] shadow-gray-700 shadow-xl'} flex flex-col gap-8`}>
   
      <div className={`text-gray-400 text-sm flex justify-between font-semibold items-center ${mode === 'light' ? 'text-gray-600' : 'text-gray-300'}`}>
        <div className="md:mx-0 mx-auto">100K PAGEVIEWS</div>
        <div className="md:flex items-center gap-1 hidden">
          <div>
            <span className={`text-3xl ${mode === 'light' ? 'text-[#322463]' : 'text-[#c9c9d8]'}`}>${price}</span>
          </div>
          <div>/month</div>
        </div>
      </div>

      

      <div className="md:hidden items-center gap-1 flex mx-auto font-semibold">
        <div>
          <span className={`text-3xl ${mode === 'light' ? 'text-[#322463]' : 'text-[#d3d3d9]'}`}>${price}</span>
        </div>
        <div>/month</div>
      </div>

    
      <div className={`flex justify-center items-center gap-2 font-medium md:text-sm text-[10px] md:mt-6 mt-3 ${mode === 'light' ? 'text-gray-600' : 'text-gray-400'}`}>
        <div>Monthly Billing</div>
        <div className="relative">
          <input
            type="checkbox"
            id="billing-toggle"
            className="hidden"
            checked={isYearly}
            onChange={handleToggleChange}
          />
          <label
            htmlFor="billing-toggle"
            className={`flex items-center cursor-pointer md:w-12 md:h-6 w-8 h-4 ${mode === 'light' ? "bg-gray-200" :  "bg-gray-700"} rounded-full shadow-inner transition duration-200`}
          >
            <span
              className={`absolute w-[50%] h-[95%] ${mode === 'light' ? "bg-gray-300" :  "bg-gray-400"} rounded-full shadow transition duration-200 transform ${isYearly ? "translate-x-6" : "translate-x-0"}`}
            ></span>
          </label>
        </div>
        <div>
          Yearly Billing&nbsp;&nbsp;&nbsp;
          <span className="left-2 px-2 py-1 bg-[#eec6c6] text-red-700 rounded-full text-[10px] font-semibold">
            25% Discount
          </span>
        </div>
      </div>

   
      <div className="flex md:flex-row flex-col md:gap-10 gap-6 justify-between mt-10">
        <div className={`text-left text-sm mx-auto md:mx-0 ${mode === 'light' ? 'text-gray-500' : 'text-gray-400'}`}>
          <ul>
            <li>
              <div className="flex gap-2 items-center">
                <Image
                  src={"/images/icon-check.svg"}
                  alt="check"
                  width={10}
                  height={10}
                />
                Unlimited Websites
              </div>
            </li>
            <li>
              <div className="flex gap-2 items-center">
                <Image
                  src={"/images/icon-check.svg"}
                  alt="check"
                  width={10}
                  height={10}
                />
                100% data ownership
              </div>
            </li>
            <li>
              <div className="flex gap-2 items-center">
                <Image
                  src={"/images/icon-check.svg"}
                  alt="check"
                  width={10}
                  height={10}
                />
                Email Reports
              </div>
            </li>
          </ul>
        </div>
        <div>
          <button className={`px-5 rounded-full py-2 font-medium text-white md:text-lg text-sm ${mode === 'light' ? 'bg-[#20224e]' : 'bg-[#3e3e52]'}`}>
            Start my trial
          </button>
        </div>
      </div>
    </div>
  );
};

export default PricingCard;