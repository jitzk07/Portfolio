"use client";
import React from "react";

import { motion } from "framer-motion";
import { slideInFromTop } from "@/utils/motion";
import Image from "next/image";

const Encryption = () => {
  return (
    <div className="flex flex-row relative items-center justify-center min-h-screen w-full h-full">
      {/* Title Section */}
      <div className="absolute w-auto h-auto top-0 z-[5]">
        <motion.div
          variants={slideInFromTop}
          className="text-[40px] font-medium text-center text-gray-200 sm:text-[30px] xs:text-[24px]"
        >
          Performance
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            {" "}
            &{" "}
          </span>
          Security
        </motion.div>
      </div>

      {/* Lock Images Section */}
      <div className="flex flex-col items-center justify-center translate-y-[-50px] absolute z-[20] w-auto h-auto">
        <div className="flex flex-col items-center group cursor-pointer w-auto h-auto">
          <Image
            src="/LockTop.png"
            alt="Lock top"
            width={50}
            height={50}
            className="w-[50px] translate-y-5 transition-all duration-200 group-hover:translate-y-11 sm:w-[40px] xs:w-[30px]"
          />
          <Image
            src="/LockMain.png"
            alt="Lock Main"
            width={70}
            height={70}
            className="z-10 sm:w-[60px] xs:w-[50px]"
          />
        </div>

        {/* Welcome Box */}
        <div className="Welcome-box px-[15px] py-[4px] z-[20] border my-[20px] border-[#7042f88b] opacity-[0.9] sm:px-[10px] xs:px-[8px]">
          <h1 className="Welcome-text text-[12px] sm:text-[14px] xs:text-[12px]">
            Encryption
          </h1>
        </div>
      </div>

     

      {/* Video Background */}
      <div className="w-full flex items-start justify-center absolute">
        <video
          loop
          muted
          autoPlay
          playsInline
          preload="false"
          className="w-full h-auto"
          src="/encryption.webm/"
        />
      </div>

       {/* Bottom Text */}
       <div className="absolute z-[20] bottom-[10px] px-[5px] w-full">
        <div className="cursive text-[20px] font-medium text-center text-gray-300 sm:text-[18px] xs:text-[16px]">
          Secure your data with end-to-end encryption
        </div>
      </div>
    </div>
  );
};

export default Encryption;
