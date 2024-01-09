import Image from "next/image";
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import "../assets/css/contentsection.css";
import { FaHandPointRight } from "react-icons/fa";

const ContentSection: React.FC = () => {
  const controls = useAnimation();

  const startAnimation = async () => {
    await controls.start({ x: 0, opacity: 1, transition: { duration: 0.5 } });
  };
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            startAnimation();
          }
        });
      },
      { root: null, rootMargin: "0px", threshold: 0.5 }
    );

    const elements = document.querySelectorAll(".card");
    elements.forEach((el) => {
      observer.observe(el);
    });

    // Cleanup the observer on component unmount
    return () => observer.disconnect();
  }, []);
  return (
    <div className="pb-20">
      <div className="relative bg-white justify-center flex overflow-hidden">
        <div
          className="opacity-45"
          style={{
            transform:
              "translateX(0px) translateY(0) scale(1) rotate(0deg) rotateX(0deg) rotateY(0deg) translateZ(0px) rotate(35deg)",
          }}
        >
          <Image
            src="https://framerusercontent.com/images/Nyitp1a1de4vnZP1WFpTctpMA.png?scale-down-to=1024"
            className="block rounded-inherit object-center object-cover"
            width={800}
            height={800}
            alt="Picture of the author"
          />
        </div>

        {/* Left Image */}
        <div className="">
          <div
            className="absolute  2xl:left-80 lg:left-0 left-0 right-60 lg:top-40 top-12 card"
           
          >
            <Image
              src="https://framerusercontent.com/images/oHEHl4fOlgbv0stRun0lzybu5A8.png"
              alt="Center Image"
              width={500}
              height={500}
              className="block object-center object-contain"
            />
          </div>
          <div className="absolute lg:left-2/4 top-1/2 left-[40%] lg:rotate-0  rotate-45">
            <FaHandPointRight className="text-6xl text-black " />
          </div>
          {/* Right Image */}
          <div
            className="absolute  2xl:right-80 lg:-right-4 right-0 lg:left-auto left-60 lg:top-40 top-48 card "
           
          >
            <Image
              src="https://framerusercontent.com/images/ZEQSELMVs4lyiIv4wEnY4ddRxmg.png"
              alt="Right Image"
              width={500}
              height={500}
              className="block object-center object-contain"
            />
          </div>
        </div>
      </div>
      <div className="text-[#4c3cffd9] text-center w-full flex">
        <div className=" m-auto w-[350px] font-medium">
          Say goodbye to messy spreasheets and missed deadlines
        </div>
      </div>
      <div className="text-black mx-auto text-center w-1/2 font-bold text-[56px]">
        A better way to manage your recruitment process.
      </div>
      <div className="text-black mx-auto text-center w-2/5 mt-10 text-xl">
      RecruitU gives you the tools to manage your recruitment process and stay on top of your journey of finding your dream job in finance.
      </div>
    </div>
  );
};

export default ContentSection;

// import Image from "next/image";
// import React, { useEffect } from "react";
// import { motion, useAnimation } from "framer-motion";
// import "../assets/css/contentsection.css";
// import { FaHandPointRight } from "react-icons/fa";

// const ContentSection: React.FC = () => {
 
//   return (
//     <div className="pb-20">
//       <div className="relative bg-white justify-center flex overflow-hidden">
//         <div
//           className="opacity-45"
//           style={{
//             transform:
//               "translateX(0px) translateY(0) scale(1) rotate(0deg) rotateX(0deg) rotateY(0deg) translateZ(0px) rotate(35deg)",
//           }}
//         >
//           <Image
//             src="https://framerusercontent.com/images/Nyitp1a1de4vnZP1WFpTctpMA.png?scale-down-to=1024"
//             className="block rounded-inherit object-center object-cover"
//             width={800}
//             height={800}
//             alt="Picture of the author"
//           />
//         </div>

//         {/* Left Image */}
//         <div className="">
//           <div
//             className="absolute lg:left-80 left-0 right-60 lg:top-40 top-12 card"
           
//           >
//             <Image
//               src="https://framerusercontent.com/images/oHEHl4fOlgbv0stRun0lzybu5A8.png"
//               alt="Center Image"
//               width={500}
//               height={500}
//               className="block object-center object-contain"
//             />
//           </div>
//           <div className="absolute lg:left-2/4 top-1/2 left-[40%]  rotate-45">
//             <FaHandPointRight className="lg:text-6xl text-3xl text-black " />
//           </div>
//           {/* Right Image */}
//           <div
//             className="absolute lg:right-80 right-0 left-60 lg:top-40 top-48 card"
           
//           >
//             <Image
//               src="https://framerusercontent.com/images/ZEQSELMVs4lyiIv4wEnY4ddRxmg.png"
//               alt="Right Image"
//               width={500}
//               height={500}
//               className="block object-center object-contain"
//             />
//           </div>
//         </div>
//       </div>
//       <div className="text-[#4c3cffd9] text-center w-full flex">
//         <div className="m-auto w-full md:w-[350px] lg:w-[450px] font-medium">
//           Say goodbye to messy spreadsheets and missed deadlines
//         </div>
//       </div>
//       <div className="text-black mx-auto text-center w-full md:w-1/2 font-bold text-[36px] md:text-[56px]">
//         A better way to manage your recruitment process.
//       </div>
//       <div className="text-black mx-auto text-center w-4/5 md:w-2/5 mt-10 text-base md:text-xl">
//         RecruitU gives you the tools to manage your recruitment process and stay
//         on top of your journey of finding your dream job in finance.
//       </div>
//     </div>
//   );
// };

// export default ContentSection;
