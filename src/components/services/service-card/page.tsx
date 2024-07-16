import Image, { StaticImageData } from 'next/image';
import React from 'react'

type ServiceProps = {
  name: string,
  desc: string,
  image: StaticImageData,
}

export default function ServiceCard(props: ServiceProps) {

  const {name, desc, image} = props;

  return (
    <div className="card w-96 bg-base-100 shadow-xl h-50">
  <div className="card-body">
  <div className="avatar">
  <div className="w-[80px] rounded-full ring ring-red-300 ring-offset-base-100 ring-offset-2 relative">
    <Image src={image} alt={name} fill style={{
      objectFit: 'contain',
      width: '100%',
      height: '100%',
    }} />
  </div>
</div>
    <div className="pt-3">
      <h2 className="card-title text-black text-xl text-transform-lowercase font-bold py-1">{name}</h2>      
      <div className='border-2 border-red-300 w-16 my-2'></div>
      <p className='text-sm text-gray-500 py-'>{desc}</p>
    </div>
  </div>
</div>
  )
}
