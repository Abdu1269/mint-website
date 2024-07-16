import Image from "next/image";
import React from "react";

export default function SectorCard(props: any) {
  const { name, desc, image } = props;
  return (
    <div>
      <div className="card card-compact w-96 h-96 bg-base-100 shadow-xl">
        <figure>
          <Image src={image} alt="Shoes" fill className="object-cover" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{desc}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}
