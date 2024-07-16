import React from "react";
import FrightCard from "./fright-card/page";

import box from "/public/freight_type/BOX.jpg";
import car_carrying from "/public/freight_type/CAR.jpg";
import curtain from "/public/freight_type/CURTAIN.jpg";
import flatbed from "/public/freight_type/FLATBED.jpg";
import tanker from "/public/freight_type/TANKER.jpg";
import temperature from "/public/freight_type/TEMPERATURE.jpg";

export default function FrightsPage() {
  const mockdata = [
    {
      id: 1,
      image: curtain,
      title: "Curtain-sided",
      description:
        "nternational shipping, including customs clearance and regulatory compliance.",
    },

    {
      id: 2,
      image: flatbed,
      title: "Flatbed",
      description:
        "Provision of dedicated vehicles and drivers for exclusive use by a single client.",
    },
    {
      id: 3,
      image: temperature,
      title: "Temperature-controlled",
      description:
        "nternational shipping, including customs clearance and regulatory compliance.",
    },
    {
      id: 4,
      image: box,
      title: "Box truck",
      description: "Acting as intermediaries to match shippers with carriers",
    },
    {
      id: 5,
      image: car_carrying,
      title: "Car-carrying",
      description:
        "Real-time tracking of shipments, providing transparency and security",
    },
    {
      id: 6,
      image: tanker,
      title: "Tanker",
      description:
        "Fans obsess over the particular length and angle of its arms",
    },
  ];

  return (
    <div className="p-20 w-full flex justify-center">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 justify-center py-2">
        {mockdata.map((item) => {
          return (
            <FrightCard
              key={item.id}
              title={item.title}
              desc={item.description}
              image={item.image}
            />
          );
        })}
      </div>
    </div>
  );
}
