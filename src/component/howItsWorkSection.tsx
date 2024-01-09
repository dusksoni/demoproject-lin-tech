import Image from "next/image";
import React from "react";

const HowItsWorkSection: React.FC = () => {
  return (
    <div className="bg-[#F3F7FA] lg:pt-36 pt-6">
      <div className="flex">
        <div className="border border-[#EBEEF2] py-2.5 px-5  w-fit mx-auto rounded-lg text-sm text-[#667084]">
          How it works
        </div>
      </div>
      <div className="text-black lg:text-7xl text-3xl lg:w-1/3 w-2/3 text-center mx-auto font-bold">
        How it works, step by step
      </div>
      <div className="grid grid-cols-2   py-20 px-28 gap-x-24">
        <div className="gap-5 lg:col-span-1 col-span-2 lg:mt-0 mt-10 flex flex-col my-auto lg:order-1 order-2">
          <span className="text-[#4c3cffd9] text-2xl font-semibold">
            Step 1
          </span>
          <div className="lg:text-6xl text-2xl  text-black font-semibold">
            Discover job openings and events
          </div>
          <p className="text-[#3B4147] lg:text-xl text-sm">
            Search by company, sector, job type, and more. Easily find the best
            events and job openings for you, save them, and track your progress.
          </p>
        </div>
        <div className="relative  justify-center flex overflow-hidden lg:order-2 order-1 lg:col-span-1 col-span-2">
          <div
            className="opacity-45"
            style={{
              transform:
                "translateX(0px) translateY(0) scale(1) rotate(0deg) rotateX(0deg) rotateY(0deg) translateZ(0px) rotate(35deg)",
            }}
          >
            <Image
              src="https://framerusercontent.com/images/RGhup8aGwWUzPMbnzKt8KPmqLfY.png"
              className="block rounded-inherit object-center object-cover"
              width={800}
              height={800}
              alt="Picture of the author"
            />
          </div>

          {/* Left Image */}
          <div className="">
            <div className="absolute left-2 top-[25%] card">
              <Image
                src="https://framerusercontent.com/images/LDEesZjyoc53LztorbpVZfa5oeg.png"
                alt="Center Image"
                width={600}
                height={400}
                className="block object-center object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItsWorkSection;
