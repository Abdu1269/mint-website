import Image, { StaticImageData } from 'next/image';
import React from 'react'

type FrightTypeProps = {
  title: string,
  desc: string,
  image: StaticImageData,
}

export default function FrightCard(props: FrightTypeProps) {

  const {title, desc, image} = props;

  return (
    <div className="w-96 h-[18rem] z-0 relative">
      <figure className="w-full h-full">
      <Image src={image} alt={title} fill style={{
          objectFit: 'cover',
          borderRadius: '1rem',
        }} />
        </figure>
        
        <div className=" z-40 absolute top-0 left-0 w-full h-full bg-fright-gradient hover:bg-freight-gradient-bold hover:cursor-pointer rounded-2xl">
              <div className="absolute bottom-0 left-0 p-2">
                <h1 className="card-title font-bold text-xl uppercase font-serif">{title}</h1>
                <p>{desc}</p>
              </div>
        </div>

      {/* <div className="absolute top-0 left-0 w-full h-full bg-fright-gradient"></div> */}
    </div>
  )
}
