import React from "react";
import ContainerLayout from "../../Layouts/ContainerLayout";
import Image from "next/image";
import logo from "../../assets/svgs/foot-logo.svg";
import { AiOutlineArrowRight } from "react-icons/ai";
import { FaEnvelope, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { AiOutlineTwitter, AiOutlineInstagram } from "react-icons/ai";
import Link from "next/link";
import {FaMediumM} from "react-icons/fa"
import { useRouter } from "next/router";

import {SiHashnode} from "react-icons/si"
const Footer = () => {
  const router = useRouter();
  return (
    <div className="w-full bg-white mt-20">
      <ContainerLayout>
        <div className="w-full flex flex-col">
          {/* box session */}
          <div className="w-full flex flex-col md:flex-row border-primary border-[2px] relative h-full min-h-full md:min-h-[244px]  md:h-[244px] rounded-[15px]">
            <div className="w-full md:w-1/2 flex flex-col p-4 lg:p-6 ">
              <Image
                alt="logo"
                src={logo}
                className="w-[118px] md:w-[180px] mb-4 "
              />
              <p className="text-primary text-sm md:text-base xl:w-10/12 space-medium ">
                Delivering innovative and reliable blockchain solutions that
                solve real-world problems and enable our clients to succeed.
              </p>
              <p className="text-primary text-base md:absolute md:bottom-6 mt-9 md:mt-0 ">
                {" "}
                <span className="font-bold tracking-tighter space-bold">
                  Blocwryte HQ:
                </span>{" "}
                Wilmington, Delaware, USA
              </p>
            </div>
            <div className="w-full md:w-1/2 grid lg:grid-rows-4 md:border-none border-t-[2px] border-primary">
              <div
                className="flex justify-between items-center px-4 text-primary hover:bg-primary md:rounded-tr-[15px] hover:text-white md:border-l-[2px] border-b-[2px] border-primary cursor-pointer h-[56px] md:h-[61px]"
                onClick={() => router.push("/about")}
              >
                <p className=" text-base lg:text-2xl font-semibold tracking-tighter space-medium">
                  About
                </p>
                <AiOutlineArrowRight className="text-xl" />
              </div>
              <div
                className="flex justify-between items-center px-4 text-primary hover:bg-primary  hover:text-white md:border-l-[2px] border-b-[2px] border-primary cursor-pointer h-[56px] md:h-[61px]"
                onClick={() => router.push("/services")}
              >
                <p className=" text-base font-semibold lg:text-2xl tracking-tighter space-medium">
                  Services
                </p>
                <AiOutlineArrowRight className="text-xl" />
              </div>
              <div
                className="flex justify-between items-center px-4 text-primary hover:bg-primary  hover:text-white md:border-l-[2px] border-b-[2px] border-primary cursor-pointer h-[56px] md:h-[61px]"
                onClick={() => router.push("/contact-us")}
              >
                <p className=" text-base font-semibold lg:text-2xl tracking-tighter space-medium">
                  Contact Us
                </p>
                <AiOutlineArrowRight className="text-xl" />
              </div>
              <div className="flex  items-center  text-primary  md:rounded-br-[15px]  md:border-l-[2px] border-b-0 border-primary cursor-pointer">
                <div className="w-full md:w-5/12 grid grid-cols-4  h-[61px]  md:h-[61px]">
                  <div className="flex items-center  border-r-[2px] border-r-primary text-primary hover:bg-primary hover:text-white justify-center">
                    <Link
                      href="http://"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaEnvelope className="text-2xl" />
                    </Link>
                  </div>
                  <div className="flex items-center  border-r-[2px] border-r-primary text-primary hover:bg-primary hover:text-white justify-center">
                    <Link
                      href="https://twitter.com/blocwryte"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <AiOutlineTwitter className="text-2xl" />
                    </Link>
                  </div>
                  <div className="flex items-center  border-r-[2px] border-r-primary text-primary hover:bg-primary hover:text-white justify-center">
                    <Link
                      href="https://blocwryte.hashnode.dev/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <SiHashnode className="text-2xl" />
                    </Link>
                  </div>
                  <div className="flex items-center  border-r-[2px] border-r-primary text-primary hover:bg-primary hover:text-white justify-center">
                    <Link
                      href="https://www.linkedin.com/company/blocwryte-blockchain-software-service-company/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaLinkedinIn className="text-2xl" />
                    </Link>
                  </div>
                </div>
                <div className="w-7/12"></div>
              </div>
            </div>
          </div>
          {/* end of box session */}
          <p className="text-primary text-center font-semibold text md:text-base mt-10 md:mt-[60px] mb-[100px] md:mb-10">
            © 2023 BlocWryte. All rights reserved
          </p>
        </div>
      </ContainerLayout>
    </div>
  );
};

export default Footer;
