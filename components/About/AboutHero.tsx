import ContainerLayout from "../../Layouts/ContainerLayout";
import DesktopNav from "../Navbar/DesktopNav";
import Image from "next/image";
import aboutImg from "../../assets/svgs/about-hero.svg";
import MobileNav from "../Navbar/MobileNav";
const AboutHero = () => {
  return (
    <div
      className="w-full  flex flex-col h-full bg-primary"
     
    >
      <DesktopNav present={1} />
      <MobileNav present={1} />
      <ContainerLayout>
        <div
          className="w-full flex flex-col mt-[100px] md:mt-[151px] md:flex-row md:items-center  md:mb-[150px] relative"
          
        >
          <h1 className="text-2xl lg:text-[50px] md:w-9/12 font-bold tracking-tighter space-bold text-white lg:leading-[64px] w-11/12 lg:w-9/12 2xl:w-9/12 mb-20 md:mb-0">
            At BlocWryte, we are constantly pushing the boundaries of what is
            possible in the blockchain space and finding new ways to solve
            problems.
          </h1>
          <div className="w-4/12 hidden md:flex justify-center">
            <Image src={aboutImg} alt="iluss" />
          </div>
          <div className="w-4/12 md:hidden  absolute right-0 top-[50px] flex justify-center">
            <Image src={aboutImg} alt="iluss" />
          </div>
        </div>
      </ContainerLayout>
    </div>
  );
};

export default AboutHero;
