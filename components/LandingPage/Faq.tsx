import React, { useState } from "react";
import ContainerLayout from "../../Layouts/ContainerLayout";
import { FaTimes, FaPlus } from "react-icons/fa";
import star  from "../../assets/svgs/star.svg"
import plus from "../../assets/svgs/plus.svg"
import Image from "next/image";
const data = [
  {
    title: "What is a Blockchain service Agency?",
    story:
      " A Blockchain service Agency is a firm that specialises in the Blockchain ecosystem. Our agency possesses in-depth knowledge and expertise to assist businesses in getting started or excelling in this emerging field.",
    longStory: [
      "Consulting: Advising businesses on how to use blockchain technology to improve their operations.",
      "Development: Building blockchain-based applications and solutions.",
      "Marketing: Promoting blockchain technology to businesses and consumers.",
    ],
  },
  {
    title: "How long does it take to execute a project?",
    story:
      " The time it takes to execute a blockchain project depends on the specific needs of the project. However, we are flexible and committed to working within your required timeframe without compromising the quality of our work.",
    longStory: [],
  },
  {
    title: "What are the benefits of working with Blocwryte?",
    story: " There are many benefits to working with Blocwryte, including:",
    longStory: [
      "Our team of experts has extensive experience in the blockchain ecosystem.",
      "We are committed to providing our clients with the best possible service.",
      "We are always up-to-date on the latest blockchain developments.",
      "We are passionate about helping businesses succeed in the Web3 era.",
      "You can get in touch with us; we would be more than happy to discuss your blockchain needs and how we can assist you in achieving your goals.",
    ],
  },
  {
    title: "What is the minumum amount you charge for a project?",
    story:
      " Our pricing is determined by the specific services required for your project. To get an accurate budget estimate, please contact us by clicking here.",
    longStory: [],
  },
 
  {
    title: "How many projects can you handle at any given time?",
    story:
      " We currently have a team of over 20 professionals with years of experience in the blockchain ecosystem, and we are continuously expanding our team. This enables us to handle multiple projects simultaneously without compromising the quality of our deliverables.",
    longStory: [],
  },
];
const Faq = () => {
  return (
    <div
      className="w-full bg-[#F4F5F7] py-[50px] md:py-32"
     
    >
      <ContainerLayout>
        <div className="w-full flex md:flex-row flex-col justify-between md:space-x-12 ">
          <div className="w-full md:w-6/12">
            <p className="font-bold tracking-tighter text-primary space-bold w-11/12 leading-[29px] text-[22px] xl:w-full md:text-[40px] md:leading-[51px] ">
              Some answers to questions you might have
            </p>
          </div>
          <div className="w-full md:w-5/12 md:mt-0 mt-12">
            <div className="flex flex-col space-y-4">
              {data.map((item: any, index: number) => {
                return (
                  <SingleFaq
                    title={item.title}
                    story={item.story}
                    longStory={item.longStory}
                    key={index}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </ContainerLayout>
    </div>
  );
};

export default Faq;

const SingleFaq = ({ title, story,longStory }:any) => {
  const [open, setOpen] = useState<Boolean>(false);
  return (
    <div className="flex flex-col border-b border-b-[#d9d9d9] justify-center">
      <div
        className="flex justify-between py-[11px] items-start md:items-center cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        <h1 className="text-primary font-semibold space-medium text-xl leading-[28px]   md:text-[22px] w-10/12">
          {title}
        </h1>

        <button className=" w-[22px] text-xl md:w-[33px] md:h-[33px] flex items-center justify-center">
          <Image
            src={plus}
            alt="plus"
            className={
              open
                ? "rotate-45 transition-all ease-in-out"
                : "rotate-0 transition-all ease-in-out"
            }
          />

          {/* {open ? (
            <Image src={star} alt="star" className="md:w-[33px] md:h-[33px]" />
          ) : (
            <Image src={plus} alt="plus" />
          )} */}
        </button>
      </div>
      {open && (
        <div className="flex flex-col">
          <p className="text-primary  text-base space-regular opacity-80 transition-all delay-1000 ease-in-out duration-1000 py-2">
            {story}
          </p>
          <div className="flex flex-col mt-4 space-y-2">
            {longStory.map((item: any, index: number) => (
              <ul className="flex flex-col list-disc" key={index}>
                <li className="text-primary space-regular">{item}</li>
              </ul>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
