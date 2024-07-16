"use client";
import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper/core"; // Import Swiper core and required modules
import { Autoplay, Navigation, Pagination } from "swiper/modules"; // Import Swiper modules
import "swiper/swiper-bundle.css"; // Import Swiper styles

SwiperCore.use([Autoplay, Navigation]); // Initialize Swiper modules

export default function CloudLogo() {
  const icons = [
    "/tech-logo/amole_logo.png",
    "/tech-logo/cnet.png",
    "/tech-logo/ethswitch.png",
    "/tech-logo/ferese.png",
    "/tech-logo/apollo.png",
    "/tech-logo/hyperlinkinfosystem.png",
    "/tech-logo/ie.png",
    "/tech-logo/mint.png",
    "/tech-logo/ride.png",
    "/tech-logo/zala.png",
    "/tech-logo/tele_logo.png",
    "/tech-logo/kachamale_technologies_logo.png",
    "/tech-logo/safari.png",
  ];

  return (
    <div>
      <section className="py-10 bg-gray-100 sm:py-16 lg:py-24 z-0">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-gray-800 sm:text-4xl sm:leading-tight">
              {` Ethiopia's Biggest Tech Companies Are already on board with us!`}
            </h2>
          </div>

          <div className="flex overflow-hidden space-x-16 group pt-10 w-full z-0">
            <Swiper
              spaceBetween={30}
              slidesPerView={10} // Adjust slidesPerView for responsive design
              loop={true}
              autoplay={{ delay: 2000 }} // Configure autoplay
              navigation={true} // Enable navigation arrows
              className="mySwiper w-full"
            >
              {icons.map((icon, index) => (
                <SwiperSlide
                  key={index}
                  className="flex mx-20 space-x-16 group-hover:cursor-pointer py-5 px-10 w-full z-0"
                >
                  <div className="flex group-hover:cursor-pointer bg-gray-50 shadow-lg relative w-[180px] h-[180px] rounded-lg">
                    <Image
                      loading="lazy"
                      src={icon}
                      alt={`Image ${index + 1}`}
                      className="max-w-none rounded-lg z-0"
                      width={180}
                      height={180}
                      objectFit="cover"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <p className="mt-1 text-base text-center text-gray-500 md:mt-14">
            and 1000+ more companies
          </p>
        </div>
      </section>
    </div>
  );
}
