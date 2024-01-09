import Image from "next/image";
import React from "react";

const RecruitUdiffSection = () => {
  return (
    <>
      {/* one */}
      <div className="bg-white lg:pt-36 pt-6">
        <div className="flex">
          <div className="border border-[#EBEEF2] py-2.5 px-5  w-fit mx-auto rounded-lg text-sm text-[#667084]">
            The RecruitU Difference
          </div>
        </div>
        <div className="text-black lg:text-7xl text-2xl lg:w-1/3 w-2/3 text-center mx-auto font-bold">
          What makes RecruitU different?
        </div>
        <div className="grid grid-cols-2 lg:py-20 py-3 lg:px-28 px-4 gap-x-24">
          <div className="relative lg:col-span-1 col-span-2 justify-center flex overflow-hidden">
            <div
              className="opacity-45"
              style={{
                transform:
                  "translateX(0px) translateY(0) scale(1) rotate(0deg) rotateX(0deg) rotateY(0deg) translateZ(0px) rotate(35deg)",
              }}
            >
              <Image
                src="https://framerusercontent.com/images/IlO19TrdK6VQIRyiLswQucpmOug.png?scale-down-to=512"
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
                  src="https://framerusercontent.com/images/UV2eceYfNokFvJfHIvRGk2l6eo.png"
                  alt="Center Image"
                  width={600}
                  height={400}
                  className="block object-center object-contain"
                />
              </div>
            </div>
          </div>
          <div className="gap-5 lg:col-span-1 col-span-2 flex flex-col my-auto">
            <div className="lg:text-6xl text-2xl text-black font-semibold">
              Detailed candidate profiles and bios
            </div>
            <p className="text-[#3B4147] lg:text-xl text-sm">
              We give students the space to express what’s most important and
              aggregate key insights you need when searching for the right fit.
            </p>
          </div>
        </div>
      </div>
      {/* two */}
      <div className="bg-[#F3F7FA] lg:pt-36 pt-6">
        <div className="grid grid-cols-2 lg:py-20 lg:px-28 py-3 px-4 gap-x-24">
          <div className="gap-5 lg:col-span-1 order-2 lg:order-1 col-span-2 flex flex-col my-auto">
            <div className="lg:text-6xl text-2xl text-black font-semibold">
              Student status tracking and rating system
            </div>
            <p className="text-[#3B4147] lg:text-xl text-sm">
              Keep track of student activity and decisions, jot down any notes,
              and rank students on your scale.
            </p>
          </div>
          <div className="relative lg:col-span-1 col-span-2 order-1 lg:order-2 justify-center flex overflow-hidden">
            <div
              className="opacity-45"
              style={{
                transform:
                  "translateX(0px) translateY(0) scale(1) rotate(0deg) rotateX(0deg) rotateY(0deg) translateZ(0px) rotate(75deg)",
              }}
            >
              <Image
                src="https://framerusercontent.com/images/AyKi3bN42iV0UgPishLVX1RBA.png?scale-down-to=512"
                className="block rounded-inherit object-center object-cover"
                width={450}
                height={450}
                alt="Picture of the author"
              />
            </div>

            {/* Left Image */}
            <div className="">
              <div className="absolute left-14 top-0 card">
                <Image
                  src="https://framerusercontent.com/images/OySrC2bmV7UCClsNST4NbHIUSyE.png"
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
      {/* three */}
      <div className="bg-white lg:pt-36 pt-6">
        <div className="grid grid-cols-2 lg:py-20 lg:px-28 py-3 px-4 gap-x-24">
          <div className="relative lg:col-span-1 col-span-2 justify-center flex overflow-hidden">
            <div
              className="opacity-45"
              style={{
                transform:
                  "translateX(0px) translateY(0) scale(1) rotate(0deg) rotateX(0deg) rotateY(0deg) translateZ(0px) rotate(35deg)",
              }}
            >
              <Image
                src="https://framerusercontent.com/images/IvQi3tJIKSQLclolKZnOzXtGcY.png"
                className="block rounded-inherit object-center object-cover"
                width={500}
                height={600}
                alt="Picture of the author"
              />
            </div>

            {/* Left Image */}
            <div className="">
              <div className="absolute lg:col-span-1 col-span-2 left-[10%] top-0 card">
                <Image
                  src="https://framerusercontent.com/images/f3JMzuz678CstdTSLGjXJnaUc.png"
                  alt="Center Image"
                  width={600}
                  height={400}
                  className="block object-center object-contain"
                />
              </div>
            </div>
          </div>
          <div className="gap-5 flex lg:col-span-1 col-span-2 flex-col my-auto">
            <div className="lg:text-6xl text-2xl text-black font-semibold">
              Club spotlights for your events and jobs
            </div>
            <p className="text-[#3B4147] lg:text-xl text-sm">
              Easily leverage the network of clubs and student organizations on
              RecruitU to feature your jobs to the candidates you care about
              most
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default RecruitUdiffSection;
