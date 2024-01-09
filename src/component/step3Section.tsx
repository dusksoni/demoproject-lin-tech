import Image from "next/image";
import React from "react";

const Step3Section: React.FC = () => {
  return (
    <div className="bg-[#F3F7FA]">
      <div className="grid grid-cols-2 pb-10 lg:px-28 px-4 gap-x-24">
        <div className="relative lg:col-span-1 col-span-2  justify-center flex overflow-hidden">
          <div
            className="opacity-45"
            style={{
              transform:
                "translateX(0px) translateY(0) scale(1) rotate(0deg) rotateX(0deg) rotateY(0deg) translateZ(0px) rotate(35deg)",
            }}
          >
            <Image
              src="https://framerusercontent.com/images/xSIQC1jxyTMBil9gqGkjQDJ5ngw.png"
              className="block rounded-inherit object-center object-cover"
              width={800}
              height={800}
              alt="Picture of the author"
            />
          </div>

          {/* Left Image */}
          <div className="">
            <div className="absolute left-[10%] top-[25%] card">
              <Image
                src="https://framerusercontent.com/images/TofRI6yA1TAOv60sVUYPxPsnIY.png"
                alt="Center Image"
                width={600}
                height={500}
                className="block object-center object-contain"
              />
            </div>
          </div>
        </div>
        <div className="gap-5 flex lg:col-span-1 col-span-2 flex-col my-auto">
          <span className="text-[#4c3cffd9] text-center lg:text-left text-2xl font-semibold">
            Step 3
          </span>
          <div className="lg:text-6xl text-2xl text-center lg:text-left text-black font-semibold">
            Network with companies to secure the job
          </div>
          <p className="text-[#3B4147] lg:text-xl text-sm">
            Get the most out of your experience by adding existing contacts and
            discovering new connections. Save notes and important updates with
            ease.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Step3Section;
