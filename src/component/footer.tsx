import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
interface Props {
  toggle: boolean;
}
const Footer: React.FC<Props> = ({toggle}) => {
  return (
    <div className="bg-black lg:p-28 p-8 ">
      <div className="sky relative rounded-2xl">
        <div className="stars"></div>
        <div className="flex justify-between lg:flex-row flex-col lg:p-20 p-5  ">
          <div className="text-3xl lg:text-6xl lg:w-1/3 w-full lg:mb-0 mb-5">
            {toggle? "Start recruiting smarter now" :"Find your role, faster and easier"}
          </div>
          <button
            type="button"
            className="footerButton my-auto w-fit mx-auto"
          >
            <div className="flex gap-2 mx-auto">
              Join for free
              <span className="my-auto text-sm">
                <FaArrowRightLong />
              </span>
            </div>
          </button>
        </div>
      </div>
      <div className="grid grid-cols-3 mt-20  gap-10">
        <div className="flex flex-col lg:col-span-1 col-span-3 gap-10">
          <div className="footertext">For Recruiters</div>
          <div className="footertext">Contact Us</div>
        </div>
        <div className="flex flex-col lg:col-span-1 col-span-3 gap-10">
          <div className="text-white font-bold">Legal</div>
          <div className="footertext">Terms of Use</div>
          <div className="footertext">Privacy Policy</div>
        </div>
        <div className="flex flex-col lg:col-span-1 col-span-3 gap-10">
          <div className="text-white font-bold">Follow us</div>
          <div className="footertext">Instagram</div>
          <div className="footertext">LinkedIn</div>
        </div>
      </div>
      <div className="flex py-20 border-b border-b-[#3C4147]">
        <div className="mx-auto opacity-5 ">
          <img
            src="https://framerusercontent.com/images/wR4Dwho4mqBwHmvnO7GCXOj6Mk.png?scale-down-to=512"
            alt="Logo"
            className="h-12 mr-2"
          />
        </div>
      </div>
      <div className="pt-20 text-center text-[#B8C1CC]">
        © Copyright 2023, All Rights Reserved by RecruitU
      </div>
    </div>
  );
};

export default Footer;
