import Image from 'next/image';
import React from 'react'

const Step2recruiter: React.FC = () => {
    return (
      <div className="bg-[#F3F7FA] lg:pt-36 pt-6">
        
        <div className="grid grid-cols-2 lg:py-20 lg:px-28 py-3 px-4 gap-x-24">
          <div className="gap-5 lg:col-span-1 col-span-2 order-2 lg:order-1 flex flex-col my-auto">
            <span className="text-[#4c3cffd9] text-2xl font-semibold">
              Step 2
            </span>
            <div className="lg:text-6xl text-2xl text-black font-semibold">
            Sort responses with custom filters
            </div>
            <p className="text-[#3B4147] lg:text-xl text-sm">
            Leverage advanced filters to effortlessly source the most qualified candidates. Easily fine tune your search to find your perfect fit.
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
                src="https://framerusercontent.com/images/EyPDatVI4mG0SGx5odZkrk9RBbE.png?scale-down-to=512"
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
                  src="https://framerusercontent.com/images/Mq9gA8sRTIYFo9MJeU06A5lEw.png"
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
export default Step2recruiter
