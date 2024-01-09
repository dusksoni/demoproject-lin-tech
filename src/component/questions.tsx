import { Disclosure } from "@headlessui/react";
import React, { useEffect, useState } from "react";
import { CiCircleQuestion } from "react-icons/ci";
import { RxCross2 } from "react-icons/rx";
import { IoMdAdd } from "react-icons/io";

interface Props {
  toggle: boolean;
}

interface Data {
  question: string;
  answer: string;
}
const Questions: React.FC<Props> = ({toggle}) => {
  const questionStudentData = [
    {
      question:
        "What makes this platform unique for managing my recruitment process?",
      answer: `Our platform stands out as a one-of-a-kind solution where you can manage contacts, track application progress, and access a job board, all in a single, integrated space. Unlike other platforms, we provide a comprehensive toolset tailored specifically for finance recruitment. \

            This means you can network with key industry contacts, monitor the status of your job applications in real-time, and explore a wide range of opportunities on our dedicated job board.`,
    },
    {
      question: "Can I network with alumni through the platform?",
      answer: `Absolutely! Our platform offers a unique alumni networking feature that connects you with alumni of your club in the finance sector. Join with your club and work with club management to set up your alumni network. 
            
            You’ll be able to gain insights, seek advice, and build professional relationships that can be invaluable in your career journey.`,
    },
    {
      question: "How do I apply for jobs and RSVP to events on the platform?",
      answer: `Applying for jobs and RSVPing to events is straightforward. Simply browse the job listings or event calendar, and use the 'Apply' or 'RSVP' button for the opportunities that interest you.

            You'll be linked to the application or event and can track your progress the rest of the way, all on RecruitU.`,
    },
    {
      question:
        "Will recruiters be able to see my profile and other academic achievements?",
      answer: `Yes, recruiters on our platform can view student profiles. This includes your academic achievements, resume, and any other information you choose to share.

            This visibility increases your chances of being noticed by top banks in the finance industry.`,
    },
  ];
  const questionRecruiterData = [
    {
      question:
        "What makes this platform unique for managing my recruitment process?",
      answer: `Our platform stands out as a one-of-a-kind solution where you can manage contacts, track application progress, and access a job board, all in a single, integrated space. Unlike other platforms, we provide a comprehensive toolset tailored specifically for finance recruitment. \

            This means you can network with key industry contacts, monitor the status of your job applications in real-time, and explore a wide range of opportunities on our dedicated job board.`,
    },
    {
      question: "Can I network with alumni through the platform?",
      answer: `Absolutely! Our platform offers a unique alumni networking feature that connects you with alumni of your club in the finance sector. Join with your club and work with club management to set up your alumni network. 
            
            You’ll be able to gain insights, seek advice, and build professional relationships that can be invaluable in your career journey.`,
    },
    {
      question: "How do I apply for jobs and RSVP to events on the platform?",
      answer: `Applying for jobs and RSVPing to events is straightforward. Simply browse the job listings or event calendar, and use the 'Apply' or 'RSVP' button for the opportunities that interest you.

            You'll be linked to the application or event and can track your progress the rest of the way, all on RecruitU.`,
    },
    {
      question:
        "Will recruiters be able to see my profile and other academic achievements?",
      answer: `Yes, recruiters on our platform can view student profiles. This includes your academic achievements, resume, and any other information you choose to share.

            This visibility increases your chances of being noticed by top banks in the finance industry.`,
    },
  ];

  const [data, setData] = useState<Data[]>([]);

  useEffect(() => {
    if (toggle) {
      // Handle the case when toggle is true
      setData(questionStudentData);
    } else {
      // Handle the case when toggle is false
      setData(questionRecruiterData);
    }
  }, [toggle]);

  return (
    <div className="bg-white lg:p-28 p-4  ">
      <div className="grid grid-cols-2 gap-x-24">
        <div className="gap-5 lg:col-span-1 col-span-2 flex flex-col my-auto">
          <div className="text-2xl lg:text-7xl text-black font-semibold">
            Got any questions?
          </div>
          <p className="text-[#3B4147] text-sm lg:text-lg">
            Can't find the answer you're looking for? Feel free to reach out to
            us at{" "}
            <a href="help@recruitu.io." className="text-[#4c3cffd9]">
              help@recruitu.io.
            </a>
          </p>
        </div>
        <div className="flex lg:col-span-1 col-span-2 flex-col gap-10 mt-5 lg:mt-0">
        {data.map((item) => (
            <Disclosure key={item.question}>
              {({ open }) => (
                <>
                  <Disclosure.Button className="py-2 text-black flex gap-3 font-bold">
                    <span className="text-[#4c3cffd9] text-base lg:text-lg my-auto font-extrabold">
                      <CiCircleQuestion />
                    </span>{" "}
                    {item.question}
                    <span  className=" text-base lg:text-lg my-auto font-extrabold">{open? <RxCross2 /> : <IoMdAdd />}</span>
                  </Disclosure.Button>
                  <Disclosure.Panel className="text-gray-500 pl-8 text-sm lg:text-base">
                    {item.answer}
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Questions;
