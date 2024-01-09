import React from 'react';
import ToggleSwitch from './toggleSwitch';
import { motion } from 'framer-motion';
import Header from './header';

interface TopSectionProps {
  handleToggle: () => void;
  toggle: boolean;
}

const TopSection: React.FC<TopSectionProps> = ({ handleToggle, toggle }) => {
  return (
    <div className="sky relative">
      <Header toggle={toggle} />
      <div className="stars"></div>
      <div className="inside-text">
        <div className="text-sm sm:text-base lg:text-lg h-16 flex w-full justify-center gap-5">
          <label className="my-auto">I'm a student</label>
          <span className="my-auto">
            <ToggleSwitch handleToggle={handleToggle} toggle={toggle} />
          </span>
          <label className="my-auto">I'm a recruiter</label>
        </div>
        {toggle ? (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="text-3xl  lg:text-6xl font-black"
          >
            Discover and hire elite finance talent
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="ttext-3xl  lg:text-6xl font-black"
          >
            First step to final offer, all in one place
          </motion.div>
        )}
        <div className="text-sm  lg:text-lg w-11/12 sm:w-3/4 lg:w-2/3 mx-auto mt-8">
          {toggle ? (
            <span>
              A better way to recruit for finance. Get access to our network of
              students from top universities and clubs.
            </span>
          ) : (
            <span>
              Transforming the finance job search process with application
              tracking, personalized job suggestions, and intelligent networking
              recommendations.
            </span>
          )}
        </div>
        <div className="relative">
          <button
            type="button"
            className="primaryButton"
          >
            {toggle ? 'Request a demo' : 'Join for free'}
          </button>
          {!toggle && (
            <button type="button" className="secondaryButton">
              Login
            </button>
          )}
        </div>
      </div>
      <div>
        <video
          autoPlay
          muted
          loop
          src={
            toggle
              ? 'https://framerusercontent.com/assets/Dx7tTAHpvfkW9IpHgbLCAQAHEg.mp4'
              : 'https://framerusercontent.com/assets/V442NGOvSyZ5sXuEE2qfAc7E48.mp4'
          }
          className="lg:w-2/3 h-[90%] mx-auto"
        ></video>
      </div>
    </div>
  );
};

export default TopSection;
