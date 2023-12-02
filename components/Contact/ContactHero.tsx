import React, { useEffect, useState } from "react";
import ContainerLayout from "../../Layouts/ContainerLayout";
import DesktopNav from "../Navbar/DesktopNav";
import contactStyle from "../../assets/svgs/contact-style.svg";
import Image from "next/image";
import MobileNav from "../Navbar/MobileNav";
import Link from "next/link";
import axios from "axios";
import {toast} from "react-toastify"
const servicesLists = [
  "Web / Mobile Design",
  "Web / Mobile Development",
  "Blockchain Marketing",
  "Product Branding",
  "Blockchain Development",
  "Graphic Design",
  "2D / 3D Animation",
  "Technical Writing",
];
const url = "https://blocwryte.pythonanywhere.com/api/store-contacts";
const urlA = "https://blocwryte.pythonanywhere.com/api/get-contacts";
 const apiKey = ",#-X/Zz&X6+k5zemctHrSWIl'%)?TM(;"; 

const ContactHero = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [desc, setDesc] = useState('');
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const [services, setServices] = useState([]);
  const [getContact, setGetContact] = useState<any>({});

  const headers = {
    'Content-Type': 'application/json',
    'X-API-Key': apiKey
  
  }
  console.log(services);

  
  const handleSubmit = async () => {
    setLoading(true);
   
    let data = {
      name: name,
      email: email,
      subject: "Consultation",
      description: desc,
      phone: phone,
      services:services
    }
    
   
      try {
        const response = await axios.post(url, data, {headers:headers});
        
        toast.success("Thank you we would reach out to you soon!");

        setLoading(false);
        setEmail("");
        setPhone("");
        setDesc("");
        setName("");
        setSubject("");
        setTimeout(() => {
          
          window.location.reload();
        }, 3000);
        
      } catch (error) {
        
        toast.error("Sorry something happened")
        setLoading(false);
      }
    
  };

  return (
    <div className="w-full bg-primary flex flex-col pb-20 relative">
      <ContainerLayout>
        <DesktopNav present={4} />
        <MobileNav present={4} />
        <div className="w-full flex flex-col mt-[100px] md:mt-[151px]">
          <h1 className="text-secondary font-bold tracking-tighter space-medium md:text-[50px] text-[24px] leading-[33px] md:leading-[64px]  ">
            Let’s Discuss Your Next Project!
          </h1>
          <div className="flex flex-col mt-6 md:mt-10 ">
            {/* start of a single session */}
            <div className="flex md:flex-row flex-col items-baseline md:items-baseline  w-full sm:space-x-1 md:space-x-[15px] h-auto md:height-[38px]  ">
              <h1 className="text-white font-semibold text-xl w-4/12 md:w-fit mt-1  space-medium lg:text-[32px] placeholder:border-b-[#efefef] placeholder:border-b-[2px]">
                My name is
              </h1>
              <input
                type="text"
                className="placeholder:text-white placeholder:opacity-40 md:placeholder:text-[32px] placeholder:text-[20px] md:w-8/12 placeholder:font-semibold bg-transparent focus:bg-transparent  outline-none w-full border-b border-b-slate-400  mt-2 md:mt-0 md:border-none space-medium text-white md:text-[32px] "
                onChange={(e: any) => setName(e.target.value)}
                value={name}
                placeholder="Your name"
              />
            </div>
            {/* enf of a single form session */}
            {/* $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ */}
            {/* start of a single session */}
            <div className=" items-start hidden md:flex space-x-4">
              <h1 className="text-white font-semibold space-medium lg:text-[32px]   flex">
                I’d like to chat about a project. You can reach me here
              </h1>
              <input
                type="text"
                className="placeholder:text-white placeholder:opacity-40 placeholder:text-[32px] placeholder:font-semibold bg-transparent focus:bg-transparent border-b border-opacity-40 border-b-white outline-none border-none text-white text-[32px] w-3/12  md:w-4/12 space-medium"
                placeholder="your@email.com"
                onChange={(e: any) => setEmail(e.target.value)}
                value={email}
              />
            </div>
            {/* enf of a single form session */}
            {/* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% */}
            {/* $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ */}
            {/* start of a single session */}
            <div className="flex flex-col md:hidden  ">
              <h1 className="text-white font-semibold text-xl space-medium lg:text-[32px] leading-10 w-full  flex mt-[10px]">
                I’d like to chat about a project. You can
              </h1>
              <div className="flex flex-col md:flex-row md:items-baseline md:space-x-[10px]  ">
                <h1 className="text-white font-semibold space-medium text-xl lg:text-[32px] w-full md:w-4/12  flex">
                  reach me here
                </h1>
                <input
                  type="text"
                  className="placeholder:text-white placeholder:opacity-40 md:placeholder:text-[32px] placeholder:font-semibold bg-transparent focus:bg-transparent  outline-none  text-white  w-full border-b border-b-slate-400  mt-2 md:mt-0 md:border-none  md:w-8/12 space-medium text-base md:text-xl placeholder:text-xl"
                  placeholder="Your@email.com"
                  onChange={(e: any) => setEmail(e.target.value)}
                  value={email}
                />
              </div>
            </div>
            {/* enf of a single form session */}
            {/* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% */}
            {/* start of a single session */}
            <div className="flex flex-col md:flex-row  md:items-baseline md:space-x-[15px] mt-[10px]">
              <h1 className="text-white text-xl font-semibold lg:text-[32px]  space-medium w-full md:w-fit">
                or through my phone
              </h1>
              <input
                type="text"
                className="placeholder:text-white placeholder:opacity-40 md:placeholder:text-[32px] placeholder:font-semibold bg-transparent focus:bg-transparent  outline-none  text-white md:text-[32px] text-base placeholder:text-xl md:w-6/12 space-medium w-full border-b border-b-slate-400  mt-2 md:mt-0 md:border-none"
                placeholder="your phone #"
                onChange={(e: any) => setPhone(e.target.value)}
                value={phone}
              />
            </div>
            {/* enf of a single form session */}
            <div className="flex flex-col mt-6">
              <h1 className=" md:text-[32px] text-xl text-white  text-opacity-40 space-medium font-semibold">
                Give a brief description of the project
              </h1>
              <input
                type="text"
                className="bg-transparent focus:bg-transparent border-b border-opacity-40 border-b-white outline-none  text-white text-base md:text-[32px] "
                onChange={(e: any) => setDesc(e.target.value)}
                value={desc}
              />
            </div>
            <div className="mt-4 md:mt-[56px]">
              <h1 className="text-white text-xl md:text-[32px] font-semibold space-medium">
                My project requires (select one or more services)
              </h1>
              <div className="w-full flex mt-6 md:mt-8 gap-4 flex-wrap justify-start">
                {servicesLists.map((item: string, index: number) => {
                  return (
                    <SingleItem
                      key={index}
                      item={item}
                      setSubject={setSubject}
                      services={services}
                      setServices={setServices}
                    />
                  );
                })}
              </div>
              <button
                className="bg-secondary hover:bg-transparent hover:border-secondary hover:border-[2px] hover:text-secondary text-primary  flex justify-center items-center h-[59px] rounded-[500px] px-6 mt-10 md:mt-12 md:p-6   font-bold tracking-tighter  space-medium lg:w-[180px] w-[108px]  text-sm md:text-base"
                onClick={handleSubmit}
                disabled={loading}
                // the above coce is where the the button onclick function is attached to.
              >
                {loading ? "Loading..." : " Send "}
              </button>
            </div>
          </div>
        </div>
      </ContainerLayout>
      <div className="bottom-8 right-8 absolute ">
        <Image
          src={contactStyle}
          alt="decorations"
          className=" w-[88px] md:hidden h-auto"
        />
        <Image
          src={contactStyle}
          alt="decorations"
          className="  h-auto hidden md:flex "
        />
      </div>
    </div>
  );
};

export default ContactHero;

const SingleItem = ({ index, item,setSubject,services,setServices }: any) => {
  const [active, setActive] = useState(false);
  const addItem = (item:any) => {
    if (services.includes(item)) {
      let servicesList = services.filter((e: any) => e !== item);
      setServices(servicesList);
      setActive(false);
      
    } else {
      let serviceList =  [ 
       ...services, 
        item 
      ];
      setServices(serviceList);
      setActive(true);
    }
  }
  return (
    <p
      onClick={() => addItem(item)}
      className={
        active
          ? "text-white text-sm md:text-2xl font-[600px] p-4 rounded-[280px]   flex items-center cursor-pointer justify-center space-medium border-white border-[2px] "
          : "text-white opacity-40 text-sm md:text-2xl font-[600] space-medium p-4 rounded-[280px] border-[2px] border-white border-opacity-40 flex items-center justify-center cursor-pointer"
      }
      key={index}
    >
      {item}
    </p>
  );
};
