import React from "react";

interface HeaderProps {
  toggle: boolean;
}

const Header: React.FC<HeaderProps> = ({ toggle }) => {
  return (
    <header className=" w-full bg-transparent flex items-center justify-between z-10 lg:px-24 lg:py-5 p-5">
      {/* Logo on the left */}
      <div className="flex items-center">
        <img
          src="https://framerusercontent.com/images/wR4Dwho4mqBwHmvnO7GCXOj6Mk.png?scale-down-to=512"
          alt="Logo"
          className="h-8 mr-2"
        />
      </div>

      {/* Buttons on the right */}
      <div className="flex  lg:gap-10 gap-2">
        {toggle ? (
          <button className="bg-white hover:bg-black hover:text-white lg:px-3 lg:py-3 p-1 mr-4 text-black rounded-lg">
            Request a demo
          </button>
        ) : (
          <>
            <button className="bg-white hover:bg-black hover:text-white lg:px-3 lg:py-3 p-1  text-black rounded-lg">
              Join for Free
            </button>
            <button className="text-white hover:bg-white hover:text-black border-white border lg:px-3 lg:py-3 p-1 rounded-lg">
              Login
            </button>
          </>
        )}
      </div>
    </header>
    
  );
};

export default Header;
