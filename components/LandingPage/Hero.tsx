import React from "react";
import DesktopNav from "../Navbar/DesktopNav";
import circle from "../../assets/svgs/grey-circle.svg";
import spiral from "../../assets/svgs/Spiral.svg";
import Image from "next/image";
import ContainerLayout from "../../Layouts/ContainerLayout";
import heroline from "../../assets/svgs/hero-line.svg";
import { useRouter } from "next/router";
import HeroLayout from "../../Layouts/HeroLayout"
import { AiOutlineArrowRight } from "react-icons/ai";
const Hero = () => {
  const router = useRouter();
  return (
    <div className="hero-bg w-full md:h-screen flex justify-center items-center flex-col flow-hide ">
      <HeroLayout>
        <div className="flex flex-col h-[434px] md:h-screen items-center justify-center flow-hide  ">
          <div className="w-full h-full flex flex-col items-center justify-center  flow-hide relative ">
            {/* sssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss */}
            <div className="hidden md:flex text-white font-bold tracking-tighter text-[40px] md:text-[90px]  space-x-1  space-bold">
              From{" "}
              <span className="text-gradient mx-2 space-bold tracking-tighter">
                Ideation
              </span>{" "}
              to
              <div className="relative space-bold ">
                Scale,{" "}
                <span className="absolute bottom-0 left-0 right-0">
                  <Image
                    src={heroline}
                    alt="heroline"
                    width={227}
                    height={48}
                  />{" "}
                </span>{" "}
              </div>
            </div>
            <h1 className="hidden md:flex text-white font-bold tracking-tighter text-[40px] md:text-[90px] -mt-8 space-bold">
              We got you
            </h1>
            {/* START OF MOBILE SESSION ######################################################33 */}
            {/* sssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss */}
            <div className="md:hidden text-white font-bold tracking-tighter text-[40px] md:text-[90px] flex space-x-1  space-bold mt-10">
              From{" "}
              <span className="text-gradient mx-2 space-bold tracking-tighter">
                Ideation
              </span>{" "}
              to
            </div>
            <div className="flex space-x-1">
              <div className="relative space-bold text-white font-bold tracking-tighter text-[40px] md:hidden">
                Scale,{" "}
                <span className="absolute bottom-0 left-0 right-0">
                  <Image
                    src={heroline}
                    alt="heroline"
                    width={227}
                    height={48}
                  />{" "}
                </span>{" "}
              </div>
              <h1 className=" md:hidden text-white font-bold tracking-tighter text-[40px] md:text-[90px]  space-bold">
                We got you
              </h1>
            </div>
            {/* START OF MOBILE SESSION ######################################################33 */}

            <button
              className="bg-secondary hover:bg-transparent hover:border-secondary hover:border-[2px] hover:text-secondary text-primary  flex justify-center items-center h-[59px] rounded-[500px] px-6 mt-12   font-bold tracking-tighter lg:w-fit space-bold space-x-[8px] w-[176px] transition-all hover:space-x-[12px] hover:bg-primary"
              onClick={() => router.push("/contact-us")}
            >
              <span className="space-bold">Start Project </span>
              <span className=" font-bold tracking-tighter">
                <AiOutlineArrowRight />
              </span>
            </button>
            <div className="absolute -left-20 md:left-0 -bottom-10 md:hidden flex    ">
              <Image
                src={spiral}
                alt="images"
                className=" z-10  scale-50 md:scale-100   "
              />
            </div>
            <div className="absolute  md:hidden -right-10  top-10  md:top-10  ">
              <Image
                src={circle}
                alt="images"
                className="  z-10 scale-50 md:scale-100 "
              />
            </div>
          </div>

          <div className="absolute hidden md:flex  top-10 md:right-0 md:top-10  ">
            <Image
              src={circle}
              alt="images"
              className="  z-10 scale-50 md:scale-100 xl:scale-120 "
            />
          </div>

          <div className="absolute -left-10 md:left-0  md:bottom-0 hidden md:flex">
            <Image
              src={spiral}
              alt="images"
              className=" z-10  scale-50 md:scale-100   "
            />
          </div>

          <div className="absolute blury bottom-0 right-0"></div>
          <div className="absolute blury-1 top-0 left-0  " />
        </div>
      </HeroLayout>
    </div>
  );
};

export default Hero;
