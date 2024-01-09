import Image from "next/image";
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import "../assets/css/contentsection.css";
import { FaHandPointRight } from "react-icons/fa";

const ContentSectionRecruiter: React.FC = () => {
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
    <div className="lg:py-20 py-4">
      <div className="relative bg-white justify-center flex overflow-hidden">
        <div
          className="opacity-45"
          style={{
            transform:
              "translateX(0px) translateY(0) scale(1) rotate(0deg) rotateX(0deg) rotateY(0deg) translateZ(0px) rotate(35deg)",
          }}
        >
          <Image
            src="https://framerusercontent.com/images/tyIreKIwHtJNiFl9xjQbSwa9Il0.png"
            className="block rounded-inherit object-center object-cover"
            width={800}
            height={1000}
            alt="Picture of the author"
          />
        </div>

        {/* Left Image */}
        <div className="">
          <motion.div
            className="absolute lg:left-[18%] left-0 lg:-top-14 top-[46%] card"
            // initial={{ x: -100, opacity: 0 }}
            // animate={controls}
          >
            <Image
              src="https://framerusercontent.com/images/0ZI9VpA7Ln9IjXlL1ut99z3FX4.png"
              alt="Center Image"
              width={1400}
              height={700}
              className="block object-center object-contain"
            />
          </motion.div>
          <motion.div className="absolute lg:left-[31%] lg:top-0 left-[15%] -top-[10%]">
            <Image
              src="https://framerusercontent.com/images/H1vRHrlyKNh4r7F9kjQIQJBHpt0.png"
              alt="Right Image"
              width={500}
              height={500}
              className="block object-center object-contain"
            />
          </motion.div>
          <motion.div
            className="absolute left-[46%] top-[28%] card lg:block hidden"
            initial={{ x: -100, opacity: 0 }}
            animate={controls}
          >
            <Image
              src="https://framerusercontent.com/images/jRRVfZdbdNTYzD8PlPYTYEpEwR8.png"
              alt="Center Image"
              width={500}
              height={500}
              className="block object-center object-contain"
            />
          </motion.div>
          {/* Right Image */}
          <motion.div
            className="absolute right-[10%] lg:top-[60%] top-[73%] card "
            initial={{ x: 100, opacity: 0 }}
            animate={controls}
          >
            <Image
              src="https://framerusercontent.com/images/hOG90320GKRuun3CDuiFAamGo.png"
              alt="Right Image"
              width={1400}
              height={700}
              className="block object-center object-contain"
            />
          </motion.div>
        </div>
      </div>

      <div className="text-black mx-auto text-center lg:w-1/2 w-2/3 font-bold lg:text-[56px] text-2xl">
        Target and find your top candidates with ease
      </div>
      <div className="text-black mx-auto text-center lg:w-2/5 w-4/5 mt-10 text-sm lg:text-xl">
        We provide the tools you need to narrow your search and find the best
        candidates faster. Get exclusive access to top clubs and strengthen your
        recruiting pipeline with RecruitU.
      </div>
    </div>
  );
};

export default ContentSectionRecruiter;
