import React from "react";
import toplogo from "../../assets/svgs/top-logo.svg";
import logo from "../../assets/svgs/home-logo.svg";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
const styles = {
  active:
    "bg-primary py-4 px-5 rounded-[500px] text-white font-bold tracking-tighter text-sm space-regular space-bold transition-all",
  normal:
    "text-primary hover:px-5 hover:py-4 text-sm font-bold tracking-tighter cursor-pointer space-regular hover:bg-primary hover:rounded-[500px] hover:text-white space-bold transition-all delay-600",
};
const DesktopNav = ({ present }) => {
  const router = useRouter();
  const ScrolltoTop = () => {
    if (typeof window) {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }
  };
  return (
    <div className="w-full fixed top-0 left-0 right-0  justify-center h-[100px] z-100 nav-index hidden md:flex ">
      <div className="2xl:w-4/12 w-5/12 max-w-[520px] py-[6px] px-[16px] desktop-nav-container flex items-center justify-between mt-[40px]">
        <Image
          src={logo}
          alt="logo"
          className="  h-auto cursor-pointer"
          onClick={() => router.push("/")}
        />
        <div className="flex items-center space-x-3">
          <Link
            href="/about"
            className={present === 1 ? styles.active : styles.normal}
          >
            About
          </Link>
          <Link
            href="/services"
            className={present === 2 ? styles.active : styles.normal}
          >     
            Services
          </Link>
          <Link
            href="https://blocwryte.hashnode.dev"
            className={present === 3 ? styles.active : styles.normal}
            target="_blank"
            rel="noopener noreferrer"
          >
            Blog
          </Link>
          <Link
            href="/contact-us"
            className={present === 4 ? styles.active : styles.normal}
          >
            Contact Us
          </Link>
        </div>
        <Image
          src={toplogo}
          alt="logo"
          className="  h-auto cursor-pointer"
          onClick={ScrolltoTop}
        />
      </div>
    </div>
  );
};

export default DesktopNav;
