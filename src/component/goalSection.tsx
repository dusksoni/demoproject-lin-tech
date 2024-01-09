import React from 'react';

const GoalSection: React.FC = () => {
  return (
    <div className="bg-white lg:px-20 lg:py-36 p-5 ">
      <div className="flex flex-col items-center">
        <div className="border border-[#EBEEF2] py-2.5 px-5 w-fit rounded-lg text-sm text-[#667084]">
          Our Goals
        </div>
        <div className="text-black md:text-7xl text-4xl text-center mx-auto font-bold mt-5">
        Helping students find roles, faster and easier
        </div>
      </div>
    </div>
  );
};

export default GoalSection;
