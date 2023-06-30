import React from "react";
import ContainerLayout from "../../Layouts/ContainerLayout";
import DesktopNav from "../Navbar/DesktopNav";
import MobileNav from "../Navbar/MobileNav";
const ServiceHero = () => {
  return (
    <div className="w-full  flex flex-col h-full bg-white ">
      <DesktopNav present={2} />
      <MobileNav present={2} />
      <ContainerLayout>
        <div className="w-full flex flex-col mt-[100px]  md:mt-[151px] ">
          <h1 className="text-2xl lg:text-[50px]  font-bold tracking-tighter space-bold text-primary lg:leading-[64px] lg:w-9/12 2xl:w-9/12">
            Our services are backed by a commitment to delivering exceptional
            customer service and support.
          </h1>
        </div>
      </ContainerLayout>
    </div>
  );
};

export default ServiceHero;
