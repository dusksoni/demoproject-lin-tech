import Image from "next/image";
import React from "react";

const Step2section: React.FC = () => {
  return (
    <div className="bg-white lg:pt-36 pt-6 lg:w-3/5 w-4/5 mx-auto justify-center flex flex-col">
      <div className="text-[#4c3cffd9] text-2xl font-semibold text-center">
        Step 2
      </div>
      <div className="text-black lg:text-7xl text-3xl text-center mx-auto font-bold mt-5">
        Find and track your favorite jobs all in one place
      </div>
      <p className="text-[#3B4147] lg:text-xl text-sm text-center mx-auto lg:w-2/3 w-full">Track the status of all your applications. Never miss a deadline, maybe even take time to plan ahead.</p>
      <div className="mt-10">
        <Image src="https://framerusercontent.com/images/Jrs5wRrOb9bDlaOO1gbkeAou0.png" alt="list" width={1000} height={1000} className="mx-auto" />

      </div>
    </div>
  );
};

export default Step2section;
