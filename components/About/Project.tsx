import React from "react";
import ContainerLayout from "../../Layouts/ContainerLayout";
import { AiOutlineArrowRight } from "react-icons/ai";
import { useRouter } from "next/router";
const Project = () => {
  const router = useRouter();

  return (
    <ContainerLayout>
      <div className="project-bg w-full mt-[50px] md:my-20 flex flex-col justify-center items-center px-4 ">
        <p className="text-[28px] w-full   md:text-[64px] text-white font-bold tracking-tighter space-bold leading-[40px] md:leading-[81px]  md:w-8/12 text-center mx-auto">
          Got a project in mind? we’re here to help.
        </p>
        <button className="bg-secondary hover:bg-transparent hover:border-secondary hover:border-[2px] hover:text-secondary text-primary  flex justify-center items-center h-[59px] rounded-[500px] px-6 mt-12   font-bold tracking-tighter lg:w-fit space-bold space-x-[8px] w-[176px] transition-all hover:space-x-[12px] hover:bg-primary " onClick={() => router.push("/contact-us")}>
          <span className="space-bold">Start Project </span>
          <span className=" font-bold tracking-tighter">
            <AiOutlineArrowRight />
          </span>
        </button>
      </div>
    </ContainerLayout>
  );
};

export default Project;
