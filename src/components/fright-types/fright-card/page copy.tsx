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
    <div className="card w-96 h-[18rem] z-0">
      <figure className="w-full h-full relative">
      <Image src={image} alt={title} fill style={{
          objectFit: 'cover',
          borderRadius: '1rem',
        }} />
            <div className="card-body">
              <div className="absolute bottom-0 left-0 p-2">
                <h2 className="card-title">{title}</h2>
                <p>{desc}</p>
              </div>
            </div>
        </figure>
    </div>
  )
}
