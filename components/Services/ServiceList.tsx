import React from "react";
import Image from "next/image";
import { serviceData } from "../../utils/serviceData";
import ContainerLayout from "../../Layouts/ContainerLayout";
const ServiceList = () => {
  return (
    <div className="w-full mt-[50px] md:mt-32 ">
      <ContainerLayout>
        <div className="w-full bg-primary px-4 lg:px-12 lg:py-[100px] rounded-[40px] py-[60px] md:py-10 ">
          <div className="w-full grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-y-12 lg:gap-x-16 2xl:gap-x-24 xl:gap-y-28">
            {serviceData.map((item: any, index: number) => {
              return (
                <div className="flex flex-col" key={index}>
                  <div
                    className="flex justify-center items-center lg:justify-start"
                    key={index}
                  >
                    <Image src={item.icon} alt="sdsdsdsd" />
                  </div>
                  <h1 className="text-white font-bold tracking-tighter text-[20px] lg:text-2xl mt-7 mb-3 space-bold text-center md:text-start ">
                    {item.title}
                  </h1>
                  <p className="text-white text- space-regular font-[500] text-[15px] text-base  text-center md:text-start opacity-80 tracking-tighter leading-[21px] md:leading-[24px] ">
                    {item.story}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </ContainerLayout>
    </div>
  );
};

export default ServiceList;
