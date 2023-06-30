import React from "react";
import ContainerLayout from "../../Layouts/ContainerLayout";

const services = [
  "NFT Marketing",
  "Crypto Marketing",
  "NFT Development",
  "Post ICO Marketing",
  "Bounty Marketing",
  "Crypto Marketing",
  "Coin Marketing",
  "PR Marketing",
  "Smart Contract Development",
  "Influencer Marketing",
  "Crypto Ads Marketing",
  "Shopify NFT Gateway",
  "Community Building",
  "NFT Consulting",
  "DAO Development",
  "Initial Coin Offering",
  "Initial Dex Offering",
  "IDO Marketing",
  "Asset Tokenization",
  "STO Marketing",
];

const MoreService = () => {
  return (
    <div className="bg-white dark:bg-white mt-[50px] lg:mt-28 mb-[50px] md:mb-28">
      <ContainerLayout>
        <div
          className="w-full flex flex-col"
          
        >
          <h1 className="md:text-[40px] text-[22px] font-bold tracking-tighter  text-primary md:leading-[51px] w-full text-center md:text-center md:w-11/12 mx-auto lg:w-10/12 xl:w-7/12 2xl:w-6/12 space-bold leading-[29px] ">
            Some more services we offer to cater to your{" "}
            <span className="gradient-text space-bold">blockchain</span> needs
          </h1>
          <div className="w-full flex  mt-8 md:mt-16 gap-4 flex-wrap justify-center">
            {services.map((item: string, index: number) => {
              return (
                <p
                  className="text-primary font-[600] p-4 rounded-[280px] border-[2px] border-primary flex items-center justify-center space-medium text-sm md:text-base "
                  key={index}
                >
                  {item}
                </p>
              );
            })}
          </div>
        </div>
      </ContainerLayout>
    </div>
  );
};

export default MoreService;
