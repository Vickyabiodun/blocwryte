import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import Aim from "../components/LandingPage/Aim";
import Footer from "../components/Footer"
import Project from "../components/About/Project";
import Benefits from "../components/About/Benefits";
import Partners from "../components/About/Partners";
import Offering from "../components/LandingPage/Offering";
import Faq from "../components/LandingPage/Faq";
import Testimonial from "../components/LandingPage/Testimonial";
import Hero from "../components/LandingPage/Hero";
import DesktopNav from "../components/Navbar/DesktopNav";
import MobileNav from "../components/Navbar/MobileNav";


export default function Home() {
  return (
    <>
      <Head>
        <title>BlockWryte</title>
        <meta
          name="description"
          content="A pacesetter for evolving and exploring the world"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/use-logo.png" />
      </Head>

      <div className="w-full flex flex-col bg-white h-full min-h-screen">
        <DesktopNav present={0} />
        <MobileNav present={0} />
        <Hero />
        <Aim />
        <Offering />
        <Benefits />
        <Partners />
        <Faq />
        <Testimonial />
        <Project />
        <Footer />
      </div>
    </>
  );
}
