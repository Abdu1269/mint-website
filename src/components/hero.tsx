"use client";
import React from "react";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { PulseBeamsSecond } from "./CTA/cta";

// Import images from the public directory
import banner1 from "/public/banner-1.jpeg";
import banner2 from "/public/banner-2.jpeg";
import banner3 from "/public/banner-3.png";

export default function Hero() {
  const bannerData = [
    {
      title: "Empowering Tech Companies to Thrive",
      description:
        "Join the leading business directory for tech companies. Boost your visibility, connect with clients, and grow your business with us.",
      image: banner2,
    },
    {
      title: "Unite with Tech Innovators Worldwide",
      description:
        "Discover a platform where tech companies enhance their reach, credibility, and connections. Get listed and grow your business today.",
      image: banner1,
    },
    {
      title: "Your Gateway to Tech Excellence",
      description:
        "Register your tech company and unlock opportunities for growth, networking, and industry insights. Elevate your business with our trusted directory.",
      image: banner3,
    },
  ];

  return (
    <section className="relative w-full h-full min-h-screen bg-slate-900 pb-0 z-0">
      <main className="w-full h-full min-h-screen relative px-4">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {bannerData.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col-reverse justify-center lg:flex-row min-h-screen z-0">
                <section className="w-full lg:w-[50%] flex flex-col lg:translate-x-10 @md:px-2 lg:px-5 lg:p-10 lg:pt-36 justify-start items-center">
                  <div className="w-full h-auto lg:pt-7">
                    <h1 className="__classNameName_e826f1 text-3xl lg:text-5xl lg:text-7xl text-white font-extrabold">
                      {item.title}
                    </h1>
                    <p className="max-w-sm py-5 text-gray-400 lg:text-lg">
                      {item.description}
                    </p>
                    <div className="w-full flex items-center text-white justify-start gap-2">
                      <PulseBeamsSecond title="Get Started" sx="h-14 w-52" />
                    </div>
                  </div>
                </section>
                <section className="relative w-full lg:w-[50%] flex items-center justify-center z-0 my-20">
                  <Image
                    src={"/static/banner-2.jpeg"}
                    alt="Hero Image"
                    layout="fill"
                    className="object-cover z-10 rounded-3xl"
                    priority={true}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </section>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </main>
    </section>
  );
}
