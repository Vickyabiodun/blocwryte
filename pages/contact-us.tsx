import Head from 'next/head';
import React from 'react'
import Footer from '../components/Footer';
import ContactHero from '../components/Contact/ContactHero';

const Contact = () => {
  return (
    <div className="w-full flex flex-col">
      <Head>
        <title>Contact Us</title>
        <meta
          name="description"
          content="A pacesetter for evolving and exploring the world"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/use-logo.png" />
          </Head>
          <ContactHero />
          <Footer />
    </div>
  );
}

export default Contact