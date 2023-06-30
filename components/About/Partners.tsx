import React from 'react'
import ContainerLayout from '../../Layouts/ContainerLayout'
import Image from 'next/image'
import partner from "../../assets/svgs/partners.svg"
import mob from "../../assets/newsvg/mobile-client.svg"
const Partners = () => {
  return (
    <div>

    <div className="w-full bg-primary hidden md:flex">
      <ContainerLayout>
        <Image
          src={partner}
          alt="paerner"
          className='w-full'
          />
      </ContainerLayout>
      </div>
    <div className="w-full bg-primary md:hidden flex">
      
        <Image
          src={mob}
          alt="paerner"
          className='w-full'
          />
      
      </div>
      
          </div>
  );
}

export default Partners
