import Image from "next/image";
import React from "react";

const JoinClubSection: React.FC = () => {
  return (
    <div className="grid grid-cols-2 lg:py-20 lg:px-28 py-5 px-5 gap-x-24">
      <div className="gap-5 lg:col-span-1 col-span-2 flex flex-col my-auto order-2 lg:order-1">
        <div className="lg:text-6xl text-2xl text-black font-semibold mt-10 lg:mt-0">
          Join with your club for exclusive opportunities
        </div>
        <p className="text-[#3B4147] lg:text-xl text-sm">
          Join your club and gain access to exclusive features like job
          spotlights and alumni network access.
        </p>
      </div>
      <div className="relative lg:col-span-1 col-span-2 order-1 lg:order-2  justify-center flex overflow-hidden">
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
          <div className="absolute left-[15%] top-[30%] card">
            <Image
              src="https://framerusercontent.com/images/6V7mPxWbOrgQSxjswC4chWLGrq4.png"
              alt="Center Image"
              width={500}
              height={400}
              className="block object-center object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinClubSection;
