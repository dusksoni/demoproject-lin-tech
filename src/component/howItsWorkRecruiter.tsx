import Image from "next/image";
import React from "react";

const HowItsWorkRecruiter: React.FC = () => {
  return (
    <div className="bg-white lg:pt-36 pt-8">
      <div className="flex">
        <div className="border border-[#EBEEF2] py-2.5 px-5  w-fit mx-auto rounded-lg text-sm text-[#667084]">
          How it works
        </div>
      </div>
      <div className="text-black lg:text-7xl text-2xl lg:w-1/3 w-2/3 text-center mx-auto font-bold">
        How it works, step by step
      </div>
      <div className="grid grid-cols-2 lg:py-20 lg:px-28 py-4 px-5 gap-x-24">
        <div className="relative lg:col-span-1 col-span-2  justify-center flex overflow-hidden">
          <div
            className="opacity-45"
            style={{
              transform:
                "translateX(0px) translateY(0) scale(1) rotate(0deg) rotateX(0deg) rotateY(0deg) translateZ(0px) rotate(35deg)",
            }}
          >
            <Image
              src="https://framerusercontent.com/images/18RlbpnW2D9aJMRNQnfzb7RAuk.png?scale-down-to=512"
              className="block rounded-inherit object-center object-cover"
              width={500}
              height={600}
              alt="Picture of the author"
            />
          </div>

          {/* Left Image */}
          <div className="">
            <div className="absolute left-[10%] top-0 card">
              <Image
                src="https://framerusercontent.com/images/YxKXM7BOLM621lsC0TOnbMItqhg.png"
                alt="Center Image"
                width={600}
                height={400}
                className="block object-center object-contain"
              />
            </div>
          </div>
        </div>
        <div className="gap-5 flex lg:col-span-1 col-span-2 flex-col my-auto">
          <span className="text-[#4c3cffd9] text-2xl font-semibold">
            Step 1
          </span>
          <div className="lg:text-6xl text-2xl text-black font-semibold">
          Post your jobs and upcoming events
          </div>
          <p className="text-[#3B4147] lg:text-xl text-sm mb-5 lg:mb-0">
          Seamlessly add postings for events and roles you’re looking to fill.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HowItsWorkRecruiter;
