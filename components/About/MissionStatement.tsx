import React from "react";
import ContainerLayout from "../../Layouts/ContainerLayout";
import Image from "next/image";
import line from "../../assets/svgs/line.svg";
import mission from "../../assets/png/misson.png";
import vision from "../../assets/png/vision.png";
import spiral from "../../assets/png/spiral.png";
const MissionStatement = () => {
  return (
    <div className="w-full flex flex-col relative bg-white py-[50px] md:py-[180px]">
      <ContainerLayout>
        <div className="w-full flex md:flex-row flex-col ">
          <div className="w-full  md:w-5/12 flex  items-start">
            <div className="w-full  md:w-10/12">
              <Image src={mission} alt="mission" />

              <h1
                className="md:text-[40px] text-primary font-bold tracking-tighter md:leading-[51px] mt-6 space-bold text-[22px] leading-[28px]
               "
              >
                Our Mission
              </h1>
              <p className="text-[15px] md:text-base text-primary space-regular font-[500] opacity-80 tracking-tighter leading-[21px] md:leading-[24px] mt-4 space-regular ">
                Our mission at BlocWryte is to deliver innovative and reliable
                blockchain solutions that solve real-world problems and enable
                our clients to succeed
              </p>
            </div>
          </div>
          <div className="w-2/12  justify-center hidden md:flex">
            <Image src={line} alt="line" />
          </div>
          <div className="w-full mt-16 md:mt-0 md:w-5/12 flex flex-col justify-end">
            <div className="w-full  md:w-10/12">
              <Image src={vision} alt="mission" />

              <h1
                className="md:text-[40px] text-primary font-bold tracking-tighter md:leading-[51px] mt-6 space-bold text-[22px] leading-[28px]
               "
              >
                Our Vision
              </h1>
              <p className="text-[15px] md:text-base text-primary space-regular font-[500] opacity-80 tracking-tighter leading-[21px] md:leading-[24px] mt-4 space-regular ">
                At BlocWryte, our vision is to be the leading blockchain
                services provider. We aim to empower businesses of all sizes to
                harness the full potential of blockchain technology and
                transform the way they operate.
              </p>
            </div>
          </div>
        </div>
      </ContainerLayout>
      <div className="absolute bottom-0 left-0 hidden md:flex ">
        <Image src={spiral} alt="spiral" className=" h-auto" />
      </div>
    </div>
  );
};

export default MissionStatement;
