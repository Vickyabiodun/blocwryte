import React,{useState} from 'react'
import logo from "../../assets/newsvg/blocky.svg"
import Image from 'next/image';
import Link from 'next/link';
import bars from "../../assets/newsvg/bars.svg"
import { useRouter } from 'next/router';
const styles = {
    active: "",
    nonactive : ""
}
const MobileNav = ({present} : any ) => {
    const [show, setShow] = useState(false);
    const router = useRouter();
    return (
      <div>
            
    <div className="w-full bg-primary fixed top-0 nav-index  left-0 right-0 flex flex-col md:hidden overflow-x-hidden">
      <div className="w-full flex items-center justify-between px-4 h-[65px]">
        <Link href="/">
          <Image src={logo} alt="logo" />
        </Link>

        <div className="w-fit" onClick={() => setShow(!show)}>
          <Image
            src={bars}
            alt="bars"
            className="w-8"
            
          />
        </div>
      </div>
     
      {show && (
          <div className="bg-primary w-full flex flex-col items-center z-100 transition-all duration-1000 delay-1000 ">
          <div
            className={`w-full cursor-pointer flex justify-center items-center h-[59px] text-center space-bold font-bold text-base bg-primary z-100 ${
              present === 0 ? "text-secondary" : "text-white"
            }`}
            onClick={() => router.push("/")}
            >
            Home
          </div>
          <div
            className={`w-full cursor-pointer flex justify-center items-center h-[59px] text-center space-bold font-bold text-base bg-primary z-100 ${
              present === 1 ? "text-secondary" : "text-white"
            }`}
            onClick={() => router.push("/about")}
            >
            About
          </div>
          <div
            className={`w-full cursor-pointer flex justify-center items-center h-[59px] text-center space-bold font-bold text-base bg-primary z-100 ${
                present === 2 ? "text-secondary" : "text-white"
            }`}
            onClick={() => router.push("/services")}
            >
            Services
          </div>
          <div
            className={`w-full cursor-pointer flex justify-center items-center h-[59px] text-center space-bold font-bold text-base bg-primary z-100 ${
                present === 3 ? "text-secondary" : "text-white"
            }`}
            onClick={() => router.push("/")}
          >
            Blog
          </div>
          <div
            className={`w-full cursor-pointer flex justify-center items-center h-[59px] text-center space-bold font-bold text-base bg-primary z-100 ${
              present === 4 ? "text-secondary" : "text-white"
            }`}
            onClick={() => router.push("/contact-us")}
            >
            Contact Us
          </div>
        </div>
      )}
    </div>
    </div>
      
  );
}

export default MobileNav
