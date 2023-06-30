import React from "react";
import ContainerLayout from "../../Layouts/ContainerLayout";
import Image from "next/image";
import Globe from "../../assets/svgs/Globe.svg";
const Aim = () => {
  return (
    <div className="w-full bg-[#6AEDAB] py-[60px] md:py-0  md:h-[720px]  relative flex items-center overflow-x-hidden">
      <div className="w-full xl:pl-[100px]   ">
        <h1 className="text-primary tracking-tighter font-bold pl-4 md:pl-0 text-2xl lg:text-[50px] md:leading-[63px] w-9/12 md:w-8/12 space-bold ">
          We aim to empower businesses of all sizes to harness the full
          potential of{" "}
          <span className="underline space-bold"> blockchain </span> technology
          and transform the way they operate.
        </h1>
      </div>
      <div className="absolute right-0 hidden md:flex">
        <Image src={Globe} alt="Globe" className="opacity-20" />
      </div>
      <div className="absolute -right-16 flex md:hidden">
        <Image src={Globe} alt="Globe" className="opacity-20  w-[147px]" />
      </div>
    </div>
  );
};

export default Aim;
