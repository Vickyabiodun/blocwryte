import React from "react";
import ContainerLayout from "../../Layouts/ContainerLayout";
import Image from "next/image";
import one from "../../assets/svgs/one1.svg";
import two from "../../assets/svgs/two2.svg";
import three from "../../assets/svgs/three3.svg";
import four from "../../assets/svgs/four4.svg";

const data = [
  {
    title: "High-quality work",
    story:
      "We deliver solutions that meet the client's requirements and expectations while adhering to industry standards and best practices.",
    image: one,
  },
  {
    title: "Exceptional service and support",
    story:
      "We believe that providing excellent customer service is crucial to our success, and we want to ensure that your needs are our top priority.",
    image: three,
  },
  {
    title: "Seamless Project Execution",
    story:
      "We make sure the project is delivered on time and within budget, ensuring that you are more than satisfied with the final product.",
    image: two,
  },
  {
    title: "Customized Solutions",
    story:
      "We employ a customer-centric approach that strives to understand your business goals, challenges, and pain points, and provide solutions that address them effectively.",
    image: four,
  },
];
const Benefits = () => {
  return (
    <div
      className="w-full flex flex-col bg-[#F4F5F7] py-16 md:py-[150px]"
    
    >
      <ContainerLayout>
        <div className="w-full flex flex-col">
          <h1 className="w-full xl:w-6/12 text-primary md:leading-[51px] font-bold tracking-tighter space-bold md:text-[40px] text-[22px] text-center md:text-start leading-[28px]">
            What you stand to gain from working with us
          </h1>
        </div>
        <div className="w-full  grid grid-cols-1 gap-y-8 md:grid-cols-2 mt-12 md:mt-16 xl:gap-y-[64px] px-2  ">
          {data.map((item: any, index: number) => {
            return (
              <div
                className="w-full items-center  xl:w-10/12 flex md:flex-row flex-col md:items-start   md:space-x-[40px]"
                key={index}
              >
                <Image src={item.image} alt={item.title} className="w-16 md:w-[80px] h-auto mx-auto"  width={item.image.width} height={item.image.height}/>
                <div className="flex flex-col items-center md:items-start mt-6 md:mt-0 ">
                  <h1 className="text-xl md:text-2xl text-primary font-bold tracking-tighter space-bold text-center md:text-start ">
                    {item.title}
                  </h1>
                  <p className="text-primary text-[15px] leading-[21px] md:text-base space-regular font-[500] opacity-80 tracking-tighter md:leading-[24px] mt-2 space-regular text-center md:text-start">
                    {item.story}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </ContainerLayout>
    </div>
  );
};

export default Benefits;
