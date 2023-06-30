import React, { useEffect, useState } from "react";
import ContainerLayout from "../../Layouts/ContainerLayout";
import DesktopNav from "../../components/Navbar/DesktopNav";
import contactStyle from "../../assets/svgs/contact-style.svg";
import Image from "next/image";
import MobileNav from "../../components/Navbar/MobileNav";
import Link from "next/link";
import axios from "axios";
import { toast } from "react-toastify";


const urlA = "https://blocwryte.pythonanywhere.com/api/get-contacts";
const apiKey = ",#-X/Zz&X6+k5zemctHrSWIl'%)?TM(;";

const Contacts = () => {

  const [getContact, setGetContact] = useState<any>([]);

  const headers = {
    "Content-Type": "application/json",
    "X-API-Key": apiKey,
  };
  

  

 

  return (
    <div className="w-full bg-primary flex flex-col pb-20 relative">
      <ContainerLayout>
        <DesktopNav present={0} />
        <MobileNav present={0} />
              <div className="bg-white w-full mt-32 min-h-screen py-5">
                  <div className="flex flex-col md:w-8/12 mx-auto space-y-8">
                      {getContact?.map((item: any, index: number) => {
                          const { name, description, email, services, subject } = item;
                          return (
                            <div className="border border-slate-200 shadow-xl p-4 md:p-8 flex flex-col mt-5" key={index}>
                              <div className="flex flex-col space-y-6">
                                <div className="flex md:space-x-4 flex-col md:flex-row space-y-1 md:space-y-0 ">
                                  <p className="text-primary space-bold text-lg md:text-xl font-bold">
                                    Name of Client:
                                  </p>
                                  <p className="text-primary space-regular text-lg md:text-xl ">
                                    {name}
                                  </p>
                                </div>
                                <div className="flex md:space-x-4 flex-col md:flex-row space-y-1 md:space-y-0 ">
                                  <p className="text-primary space-bold text-lg md:text-xl font-bold">
                                    Email:
                                  </p>
                                  <p className="text-primary space-regular text-lg md:text-xl ">
                                    {email}
                                  </p>
                                </div>
                                <div className="flex md:space-x-4 flex-col md:flex-row space-y-1 md:space-y-0 ">
                                  <p className="text-primary space-bold text-lg md:text-xl font-bold">
                                    Description:
                                  </p>
                                  <p className="text-primary space-regular text-lg md:text-xl ">
                                    {description}
                                  </p>
                                </div>
                                <div className="flex md:space-x-4 flex-col md:flex-row space-y-1 md:space-y-0 ">
                                  <p className="text-primary space-bold text-lg md:text-xl font-bold">
                                    Services:
                                  </p>
                                  <p className="text-primary space-regular text-lg md:text-xl ">
                                           {services}
                                  </p>
                                </div>
                                <div className="flex md:space-x-4 flex-col md:flex-row space-y-1 md:space-y-0 ">
                                  <p className="text-primary space-bold text-lg md:text-xl font-bold">
                                    Subject:
                                  </p>
                                  <p className="text-primary space-regular text-lg md:text-xl ">
                                    {subject}
                                  </p>
                                </div>
                              </div>
                            </div>
                          );
                      })}
                      
                  </div>
                </div>
          </ContainerLayout>
          </div>
  );
};

export default Contacts;
