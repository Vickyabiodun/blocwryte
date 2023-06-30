import React, { useState } from "react";
import ContainerLayout from "../../Layouts/ContainerLayout";
import Image from "next/image";
import quote from "../../assets/svgs/quote.svg";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
const Testimonial = () => {
  const [open, setOpen] = useState(false);
  const [second, setSecond] = useState(true);

  return (
    <div
      className="w-full flex flex-col my-[50px] md:my-20 bg-white"
      data-aos="fade-up"
      data-aos-duration="2000"
    >
      <ContainerLayout>
        <div className="w-full flex-col">
          <h1 className="text-primary w-10/12 md:w-6/12 text-[22px] leading-[28px] md:text-[40px] font-bold tracking-tighter space-bold md:leading-[51px] ">
            Don’t just take our word for it, take theirs
          </h1>
          <div className="relative flex flex-col mt-12 md:mt-20">
            {second ? (
              <div className="flex items-start">
                <div className="w-full md:w-7/12 test-bg border-l-[6px] border-l-[#6AEDAB] flex flex-col lg:p-12  ">
                  <p className="text-primary space-medium font-semibold text-xl  md:text-2xl tracking-tighter ">
                    We’ve been working with Blocwryte for almost a year now.
                    Blocwryte has shown themselves to be a reliable, punctual,
                    and professional writer. Sometimes it’s challenging to meet
                    both clients’ and media requirements, however, Blocwryte
                    always finds a solution and comes up with top-notch quality
                    content meeting all the expectations and requirements. They
                    never leave a task unfinished and always meet deadlines,
                    which is crucial while working with clients.
                  </p>
                  <div className="flex md:space-x-2 md:items-center md:flex-row flex-col mt-8 space-regular text-primary space-medium font-semibold text-sm md:text-lg ">
                    <p className="opacity-60   space-regular w-4/12 md:w-auto">
                      Sofia Ev{" "}
                    </p>
                    <span className="bg-primary w-2 h-2 rounded-full hidden md:flex"></span>
                    <p className="opacity-60  space-regular w-8/12 md:w-auto">
                      Manager - Blockman.pro
                    </p>
                  </div>
                </div>
                <div className="hidden md:flex w-5/12  justify-end">
                  <Image src={quote} alt="quote" />
                </div>
              </div>
            ) : (
              <div className="flex items-start">
                <div className="w-full md:w-7/12 test-bg border-l-[6px] border-l-[#6AEDAB] flex flex-col lg:p-12  ">
                  <p className="text-primary space-medium font-semibold text-xl  md:text-2xl tracking-tighter ">
                    Blocwryte was one of the first specialists on our project at
                    Meta Arrow. They have been responsible for the primary
                    visibility of the brand and have set high standards for
                    content quality in our company. Blocwryte has deep industry
                    knowledge on Web 3.0 and a tight grip on industry trends,
                    which helped us navigate our content seamlessly in the
                    process. I recommend Blocwryte for professional-level
                    content development and optimization for any Web3 project
                    out there.
                  </p>
                  <div className="flex flex-col md:flex-row md:space-x-2 md:items-center mt-8 space-regular text-primary space-medium font-semibold text-sm md:text-lg ">
                    <p className="opacity-60  space-regular space-regular">
                      Parth Joshi
                    </p>
                    <span className="bg-primary w-2 h-2 rounded-full hidden md:flex"></span>
                    <p className="opacity-60  space-regular space-regular">
                      Project Manager, MetaArrow
                    </p>
                  </div>
                </div>
                <div className="hidden md:flex w-5/12  justify-end">
                  <Image src={quote} alt="quote" />
                </div>
              </div>
            )}

            {/* end pf a session */}
            {second ? (
              <div className="w-full flex mt-8 md:mt-12 justify-end items-center">
                <div className="w-full md:w-7/12 test-bg border-r-[6px] border-r-[#6AEDAB] flex flex-col  ">
                  <p className="text-primary text-xl md:text-2xl space-medium font-semibold tracking-tighter">
                    I highly recommend Blocwryte for blockchain services.
                    Blocwryte has a deep understanding of the technology and its
                    applications, which is evident in their writing. Their
                    ability to explain complex concepts in a clear and concise
                    manner makes them an excellent resource for anyone looking
                    to learn more about blockchain. Their writing is engaging,
                    informative, and highly recommended.
                  </p>
                  <div className="flex flex-col md:flex-row md:space-x-2 md:items-center mt-8 space-regular text-primary space-medium font-semibold text-sm md:text-lg ">
                    <p className="opacity-60  space-regular">Afzal Subhani </p>
                    <span className="bg-primary w-2 h-2 rounded-full md:flex hidden"></span>
                    <p className="opacity-60  space-regular">
                      Founder, BlocksGenie Technologies
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="w-full flex mt-8 md:mt-12 justify-end items-center">
                <div className="w-full md:w-7/12 test-bg border-r-[6px] border-r-[#6AEDAB] flex flex-col  ">
                  <p className="text-primary text-xl md:text-2xl space-medium font-semibold tracking-tighter">
                    Give Blocwryte clear instructions and goals to reach your
                    audience, and they will impress you with a beautifully
                    structured article to publish worldwide! 🙌🏻 Thank you for
                    writing for the EcoCashew project!
                  </p>
                  <div className="flex flex-col md:flex-row md:space-x-2 md:items-center mt-8 space-regular text-primary space-medium font-semibold text-sm md:text-lg ">
                    <p className="opacity-60  space-regular">
                      Emile Schoemaker{" "}
                    </p>
                    <span className="bg-primary w-2 h-2 rounded-full md:flex hidden"></span>
                    <p className="opacity-60  space-regular">
                      CIO, E C O CASHEW & Founder of DVOLD
                    </p>
                  </div>
                </div>
              </div>
            )}

            {second ? (
              <div className="mt-20 flex justify-center items-center space-x-1 ">
                <span className="bg-primary w-2 h-2 rounded-full"></span>
                <span className="bg-primary w-2 h-2 rounded-full opacity-10"></span>
              </div>
            ) : (
              <div className="mt-20 flex justify-center items-center space-x-1 ">
                <span className="bg-primary w-2 h-2 rounded-full opacity-10"></span>
                <span className="bg-primary w-2 h-2 rounded-full"></span>
              </div>
            )}

            <div className="flex justify-center space-x-4 mt-12">
              <span
                className="w-[100px] h-12 rounded-[500px] border-primary border cursor-pointer hover:text-white hover:bg-primary flex items-center justify-center text-primary text-xl"
                onClick={() => setSecond(!second)}
              >
                <AiOutlineArrowLeft />
              </span>
              <span
                className="w-[100px] h-12 rounded-[500px] border-primary border cursor-pointer hover:text-white hover:bg-primary flex items-center justify-center text-primary text-xl"
                onClick={() => setSecond(!second)}
              >
                <AiOutlineArrowRight />
              </span>
            </div>
          </div>
        </div>
      </ContainerLayout>
    </div>
  );
};

export default Testimonial;
