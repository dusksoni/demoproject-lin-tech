import Image from "next/image";
import React from "react";
import { CiCircleCheck } from "react-icons/ci";

const CollaborationIntegrationSection = () => {
  return (
    <div className="bg-[#F3F7FA]">
      <div className="grid grid-cols-2 lg:py-20 lg:px-28 py-3 px-4 gap-x-24">
        <div className="gap-5 flex lg:col-span-1 col-span-2 flex-col my-auto">
          <div className="lg:text-6xl text-2xl text-black font-semibold">
            Easy collaboration and integration
          </div>
          <p className="text-[#3B4147] lg:text-xl text-sm">
            With collaborative workspace features and easy exports, its easy to
            integrate RecruitU into your workflow.
          </p>
          <div className="text-black">
            <div className="flex gap-5 lg:text-2xl text-base font-semibold">
              <CiCircleCheck className="text-[#4c3cffd9] lg:text-2xl text-base my-auto  " />
              Work as a team
            </div>
            <div className="text-[#3B4147] mt-2 lg:ml-12 ml-8 lg:text-base text-sm">
              See all your companies jobs and events, and easily share
              candidates
            </div>
            <div className="flex gap-5 lg:text-2xl text-base font-semibold mt-10">
              <CiCircleCheck className="text-[#4c3cffd9] lg:text-2xl text-base my-auto  " />
              Export to CSV
            </div>
            <div className="text-[#3B4147] mt-2 lg:ml-12 ml-8 lg:text-base text-sm">
              Custom candidate exports to seamlessly integrate with your systems
            </div>
          </div>
        </div>

        <div className="lg:col-span-1 col-span-2">
          <div className=" left-14 top-0 card">
            <Image
              src="https://framerusercontent.com/images/pYF61gqApOIcVRHvDNxxSiDevw.png"
              alt="Center Image"
              width={600}
              height={600}
              className="block object-center object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollaborationIntegrationSection;
