import React from "react";
import ContainerLayout from "../../Layouts/ContainerLayout";
import Image from "next/image";
import one from "../../assets/newsvg/one1.svg";
import two from "../../assets/newsvg/two2.svg";
import three from "../../assets/newsvg/three3.svg";
import four from "../../assets/newsvg/four4.svg";
import five from "../../assets/newsvg/five5.svg";
import six from "../../assets/newsvg/six6.svg";

const data = [
  {
    title: "Graphic Design",
    story:
      "Our team of designers can create stunning visual assets that communicate your brand's message and values.",
    image: one,
  },
  {
    title: "UI/UX Design ",
    story:
      "Our designers can help you create intuitive and user-friendly interfaces that enhance the user experience and drive engagement.",
    image: two,
  },
  {
    title: "Web Development",
    story:
      "Our developers can build robust and scalable web applications that meet your specific needs and deliver measurable results.",
    image: three,
  },
  {
    title: "Mobile Development",
    story:
      "We can help you develop mobile applications that are optimized for the latest technologies and platforms.",
    image: four,
  },
  {
    title: "Blockchain Marketing",
    story:
      "We can help you reach your target audience and drive engagement with a comprehensive blockchain marketing strategy.",
    image: five,
  },
  {
    title: "Technical Writing",
    story:
      "We can help you develop mobile applications that are optimized for the latest technologies and platforms.",
    image: six,
  },
];
const Offering = () => {
  return (
    <div className="w-full flex flex-col bg-white py-[50px] md:py-[150px]">
      <ContainerLayout>
        <div className="w-full flex flex-col">
          <h1 className="w-full xl:w-7/12 text-center text-primary text-[22px] leading-[29px] md:leading-[51px] font-bold tracking-tighter space-bold lg:text-[40px] mx-auto space-bold ">
            Offering over-the-top services that bring your web3 ideas to life
          </h1>
        </div>
        <div className="w-full xl:w-10/12 mx-auto  grid grid-cols-1 md:grid-cols-2 mt-14 md:mt-[100px] gap-y-[37px] xl:gap-y-[64px]  ">
          {data.map((item: any, index: number) => {
            return (
              <div
                className="w-full xl:w-10/12 flex md:items-start flex-col md:flex-row items-center  md:space-x-6"
               
                key={index}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  className="w-[40px] md:w-[60px] h-auto"
                />
                <div className="flex flex-col mt-2 md:mt-0">
                  <h1 className=" text-xl text-center md:text-start md:text-2xl text-primary font-bold tracking-tighter space-bold ">
                    {item.title}
                  </h1>
                  <p className="text-primary text-[15px] md:text-base space-regular font-[500] opacity-80 tracking-tighter leading-[24px] mt-2 space-regular px-2 md:px-0 text-center md:text-start">
                    {item.story}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        <button className="text-base text-primary border-[2px] mt-[50px] font-bold tracking-tighter space-bold border-primary rounded-[500px] px-6 h-[59px]  flex items-center space-regular justify-center lg:mt-[100px] mx-auto hover:bg-primary hover:text-white transition-all duration-200">
          Learn about our process
        </button>
      </ContainerLayout>
    </div>
  );
};

export default Offering;
