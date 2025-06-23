import React from "react";
import Button from "../shared/Button";
import { FiAlignCenter } from "react-icons/fi";

const Navbar = () => {
  return (
    <div
      className=" max-w-screen-xl  mx-auto py-5  flex items-center
      justify-between border-b-[2px] border-zinc-700 "
    >
      <div className="nleft flex items-center lg:ml-20 ">
        <img
        className="pl-5"
           
          src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg"
          alt="refokus-logo"
        />

        <div className=" lg:hidden float-end flex items-center 
        justify-end cursor-pointer text-xl ml-20 pl-[50%]"> 
 
          <FiAlignCenter />
        </div>

        <div className="links lg:flex gap-14 ml-20 hidden">
          {["Home", "Work", "Culture", "", "News"].map((elem, index) => (
            <a
              key={index}
              href="#"
              className="font-medium text-medium  flex items-center gap-1 cursor-pointer "
            >
              {index === 1 && (
                <span
                  style={{
                    boxShadow: "0 0 0.25em #00FF19",
                  }}
                  className="inline-block w-1.5 h-1.5 rounded-full bg-green-400"
                ></span>
              )}
              {elem.length === 0 ? (
                <span className="w-[2px] h-8 bg-zinc-600"></span>
              ) : (
                elem
              )}
            </a>
          ))}
        </div>
      </div>

      <div className="nright lg:flex items-center mr-20 hidden">
        <Button />
      </div>
    </div>
  );
};

export default Navbar;
