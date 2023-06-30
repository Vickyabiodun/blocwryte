import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import ContainerLayout from "../Layouts/ContainerLayout";
import DesktopNav from "../components/Navbar/DesktopNav";
import ServiceHero from "../components/Services/ServiceHero";
import ServiceList from "../components/Services/ServiceList";
import MoreService from "../components/Services/MoreService";
import Footer from "../components/Footer";
import Processes from "../components/Services/Processes";

export default function Home() {
  return (
    <>
      <Head>
        <title>Service</title>
        <meta
          name="description"
          content="A pacesetter for evolving and exploring the world"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/use-logo.png" />
      </Head>

      <div className="w-full flex flex-col bg-white h-full min-h-screen">
        <ServiceHero />
        <ServiceList />
        <MoreService />
        <Processes />
        <Footer />
      </div>
    </>
  );
}
