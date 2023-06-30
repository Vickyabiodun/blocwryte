import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import ContainerLayout from "../../Layouts/ContainerLayout";
import downArrow from "../../assets/svgs/down-arrow.svg";
import upArrow from "../../assets/svgs/uparrow.svg";
import featureA from "../../assets/svgs/feature-1.svg";
import featureB from "../../assets/svgs/feature-2.svg";
import featureC from "../../assets/svgs/feature-3.svg";
import moblefty from "../../assets/newsvg/lefty.svg"
import mobrighty from "../../assets/newsvg/righty.svg"
import { FiArrowRight } from "react-icons/fi";
import { AiOutlineArrowRight } from "react-icons/ai";
const Processes = () => {
  const router = useRouter();
  return (
    <div className="w-full flex flex-col bg-[#F4F5F7] py-[50px] md:py-24">
      <ContainerLayout>
        <div className="xl:w-10/12 mx-auto flex flex-col">
          <h1 className="text-primary font-bold tracking-tighter text-[22px] md:text-[40px] text-center w-full md:w-8/12 mx-auto space-bold leading-[29px] md:leading-[51px]">
            A process designed to help your business reach its full potential.
          </h1>
          <div className="flex w-full mx-auto mt-[108px] md:mt-16 flex-col space-y-[56px] md:space-y-0 md:flex-row ">
            {/* start of a feature */}
            <div className="w-full md:w-3/12 items-center flex flex-col px-4 md:px-0 ">
              <Image src={featureA} alt="feature" className="w-16 h-16" />
              <h1 className="text-primary text-lg mt-4 mb-2 font-bold tracking-tighter space-bold">
                Discovery
              </h1>
              <p className="text-primary text-center space-regular opacity-80">
                We gather project requirements, research the industry, and
                develop a proposal that outlines the scope, timeline, and costs.
              </p>
            </div>
            {/* enf of a featureA */}
            {/* start of feature */}
            <div className=" items-start w-1/12 hidden md:flex">
              <Image src={upArrow} alt="ilustration" className="-mt-4" />
            </div>

            {/* end of a feature */}
            {/* start of a feature */}
            <div className="w-full md:w-3/12 items-center flex flex-col px-4 md:px-0 relative ">
              <div className=" items-start w-1/12 absolute left-0 md:hidden">
                <Image src={moblefty} alt="ilustration" className="-mt-4  " />
              </div>
              <div className=" items-start w-1/12 absolute bottom-[-70px] right-0 md:hidden">
                <Image src={mobrighty} alt="ilustration" className="-mt-4" />
              </div>

              <Image src={featureB} alt="feature" className="w-16 h-16" />
              <h1 className="text-primary text-lg mt-4 mb-2 font-bold tracking-tighter space-bold">
                Ideation
              </h1>
              <p className="text-primary text-center space-regular opacity-80">
                We put on our thinking caps and come up with possible solutions
                to the problem.
              </p>
            </div>
            {/* enf of a featureA */}
            {/* start of feature */}
            <div className=" items-end w-1/12 hidden md:flex ">
              <Image src={downArrow} alt="ilustration" />
            </div>

            {/* end of a feature */}
            {/* start of a feature */}
            <div className="w-full md:w-3/12 items-center flex flex-col px-4 md:px-0">
              <Image src={featureC} alt="feature" className="w-16 h-16" />
              <h1 className="text-primary text-lg mt-4 mb-2 font-bold tracking-tighter space-bold">
                Execution
              </h1>
              <p className="text-primary text-center space-regular opacity-80">
                At this stage, we’re working fast and hard to get deliverables
                to you ASAP.
              </p>
            </div>
            {/* enf of a featureA */}
          </div>
          <div className="mt-[56px] md:mt-16 flex justify-center">
            <button
              className="bg-secondary hover:bg-transparent hover:border-secondary hover:border-[2px] hover:text-secondary text-primary  flex justify-center items-center h-[59px] rounded-[500px] px-6    font-bold tracking-tighter lg:w-fit space-bold space-x-[8px] w-[176px] transition-all hover:space-x-[12px] hover:bg-primary "
              onClick={() => router.push("/contact-us")}
            >
              <span className="space-bold">Start Project </span>
              <span className=" font-bold tracking-tighter">
                <AiOutlineArrowRight />
              </span>
            </button>
          </div>
        </div>
      </ContainerLayout>
    </div>
  );
};

export default Processes;
