import Image from "next/image";
import React from "react";
import { PiGraduationCap } from "react-icons/pi";
import { BsBag } from "react-icons/bs";

const StudentsReview: React.FC = () => {
  const data = [
    {
      image:
        "https://framerusercontent.com/images/SINMSNquI52spo94SYFgkji9nRc.png",
      paragraph:
        "RecruitU isn’t just a job board - it’s an engaging and comprehensive platform that exposes students to opportunities that otherwise are lost. Now that students are elevating the work they do within our club and gaining access to opportunities from companies that previously struggled to connect with us makes everything we do more effective and impactful - this couldn’t have been possible without RecruitU. ",
      name: "Sarah G",
      college: "Oregon '23",
      work: "Private Credit at Goldman Sachs",
    },
    {
      image:
        "https://framerusercontent.com/images/s77rGYxm5ldBHfXLW6mq5Q4tLhg.png",
      paragraph:
        "RecruitU is the first platform that understands how recruitment truly works - not only do they find personalized opportunities for users, but they also track your network and keep you on top of deadlines. I don’t know one finance student that actively uses Handshake or has found it helpful. Now as a club president and mentor to many underclassmen, I’ve seen firsthand the impact of RecruitU. I can say personally that I am so jealous of younger students who have the opportunity to take advantage of this site!",
      name: "Fiona L",
      college: "Claremont McKenna '26",
      work: "IB at Greenhill",
    },
    {
      image:
        "https://framerusercontent.com/images/kuKE7xyS1YivhRFZdKadhnRFN4.png",
      paragraph:
        "RecruitU has been beyond helpful as a club president. For me, sharing opportunities with my members has become a breeze. For our members, finding jobs and keeping track of networking is a quarter of the task it used to be. If I could go back and change one thing about my recruitment cycle, I would be on RecruitU.",
      name: "Kiara W",
      college: "UCLA '25",
      work: "IB at RBC",
    },
  ];

  return (
    <div className="sky relative">
      <div className="stars"></div>
      <div className="">
        <div className="lg:py-28 lg:p-20 p-5">
          <div className="text-2xl lg:text-7xl mb-20 text-center w-2/3 mx-auto">
            Trusted by thousands of students from top univiersities
          </div>
          <div className="grid grid-cols-3 gap-14 lg:w-[80%] w-full m-auto text-black ">
            {data.map((item) => (
              <div className="bg-white px-8 lg:col-span-1 col-span-3 py-10 h-fit rounded-lg my-auto gap-5 text-center ">
                <Image
                  src={item.image}
                  alt="profile"
                  height={90}
                  width={90}
                  className="mx-auto mb-5"
                />
                <p className="">{item.paragraph}</p>
                <div className=" mt-5">
                  <span className=" text-lg font-semibold">{item.name}</span>
                </div>
                <div className="flex justify-center gap-2 mt-2">
                <PiGraduationCap className=" my-auto" />
                  <span className="text-sm ">{item.college}</span>
                </div>
                <div className="flex justify-center gap-2 mt-2">
                <BsBag className=" my-auto" />
                  <span className="text-sm ">{item.work}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentsReview;
