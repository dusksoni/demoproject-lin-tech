import Image from "next/image";
import React from "react";

const FeaturesSection: React.FC = () => {
  return (
    <div className="lg:pt-36 pt-6">
      <div className="flex">
        <div className="border border-[#EBEEF2] py-2.5 px-5  w-fit mx-auto rounded-lg text-sm text-[#667084]">
          Features
        </div>
      </div>
      <div className="text-black lg:text-7xl text-2xl lg:w-1/3 w-2/3 text-center mx-auto font-bold mt-5">
        Benefits & Perks
      </div>
      <p className="text-[#3B4147] lg:text-xl text:sm text-center mx-auto w-2/3 mt-5">
        Whatever role you're looking for, have you covered - from first step to
        final offer.
      </p>
      <div className="grid grid-cols-2 gap-10 text-black w-2/3 m-auto mt-28">
        <div className="flex flex-col lg:w-1/2 w-2/3 mx-auto lg:col-span-1 col-span-2">
          <Image
            src="https://cdn-icons-png.flaticon.com/512/3429/3429139.png"
            alt="schoolbag"
            width={200}
            height={200}
            className="mx-auto "
          />
          <div className="mx-auto mt-5 lg:text-2xl text-base font-semibold">
            Easy profile setup
          </div>
          <div className="text-center mt-5 text-sm">
            Seamlessly sync your LinkedIn details to jump start your profile
          </div>
        </div>
        <div className="flex flex-col lg:w-1/2 w-2/3 mx-auto lg:col-span-1 col-span-2">
          <Image
            src="https://cdn-icons-png.flaticon.com/512/3578/3578796.png"
            alt="schoolbag"
            width={200}
            height={200}
            className="mx-auto "
          />
          <div className="mx-auto mt-5 lg:text-2xl text-base font-semibold">
            Job and event alerts
          </div>
          <div className="text-center mt-5 text-sm">
          Opt in to recieve updates on upcoming jobs and events from your favorite companies
          </div>
        </div>
        <div className="flex flex-col lg:w-1/2 w-2/3 mx-auto lg:col-span-1 col-span-2">
          <Image
            src="https://cdn-icons-png.flaticon.com/512/3317/3317590.png"
            alt="schoolbag"
            width={200}
            height={200}
            className="mx-auto "
          />
          <div className="mx-auto mt-5 lg:text-2xl text-base font-semibold">
          Track your networking
          </div>
          <div className="text-center mt-5 text-sm">
          Find new connections and keep track of who you've reached out to
          </div>
        </div>
        <div className="flex flex-col lg:w-1/2 w-2/3 mx-auto lg:col-span-1 col-span-2">
          <Image
            src="https://cdn-icons-png.flaticon.com/512/3979/3979322.png"
            alt="schoolbag"
            width={200}
            height={200}
            className="mx-auto "
          />
          <div className="mx-auto mt-5 lg:text-2xl text-base font-semibold">
          Application history
          </div>
          <div className="text-center mt-5 text-sm">
          Reference past applications and contacts to stay on top of new opporunities
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
