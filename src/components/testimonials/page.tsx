"use client";
import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { cn } from "@/lib/_func/cn";
export default function Testimonials() {
  const testimonials = [
    {
      quote:
        "Our visibility has skyrocketed since registering on the platform. We've connected with numerous clients and partners, and our online presence has never been stronger. ",
      image:
        "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg",
      name: "Muluken Asmare",
      companyName: "Tech Innovators Inc.",
    },
    {
      quote:
        "The directory has been a game-changer for us. The registration process was simple, and the exposure we've gained has been phenomenal.",
      image:
        "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg",
      name: "Asres Melese",
      companyName: "FutureTech Solutions.",
    },
    {
      quote:
        "Being listed on the directory has significantly enhanced our credibility. We've received numerous inquiries from potential clients who found us through the platform.",
      image:
        "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg",
      name: "Ahmed Abdullah",
      companyName: "NextGen Software",
    },
    {
      quote:
        "The networking opportunities provided by the directory are unmatched. We've built valuable relationships with other tech companies and expanded our reach.",
      image:
        "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg",
      name: "NextGen Software",
      companyName: "Innovatech",
    },
    {
      quote:
        "I highly recommend this directory to any tech company looking to grow. The support and exposure we receive are incredible, and the user satisfaction rate speaks for itself.",
      image:
        "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg",
      name: "Girma Belay",
      companyName: "Digital Pioneers Ltd",
    },
  ];
  return (
    <div id="testimonials">
      <section className="py-10 bg-gray-100 sm:py-16 lg:py-24">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold leading-tight text-gray-800 sm:text-4xl lg:text-5xl">
              What Our
              <span className="text-blue-600">Clients</span> Say
            </h2>

            <p className="mt-4 text-gray-600 text-lg">
              Hear from some of the top tech companies who have experienced
              significant growth and success through our platform.
            </p>
          </div>

          <div className="mx-auto mt-8 text-center lg:max-w-full ">
            <Swiper
              spaceBetween={30}
              slidesPerView={3}
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
              className={cn(
                "mySwiper",
                "cursor-pointer h-full max-h-full max-h-fit"
              )}
            >
              {testimonials.map((testimonial, index) => {
                return (
                  <SwiperSlide key={index}>
                    <div className="card overflow-hidden rounded-2xl shadow my-5 py-5 h-[100%] bg-white curser-pointer hover:shadow-xl duration-300">
                      <div className="px-8 pt-12 pb-4">
                        <div className="avatar relative w-24 h-24 mx-auto">
                          <div className="relative ring-primary ring-offset-base-100 w-24 rounded-full ring ring-offset-2">
                            <Image
                              src="/banner-1.jpeg"
                              alt="testimonial-image"
                              fill
                              className="object-cover w-24 h-24 rounded-full"
                            />
                          </div>
                          <div className="absolute top-0 right-0 flex items-center justify-center bg-blue-600 rounded-full w-7 h-7">
                            <svg
                              className="w-4 h-4 text-white flex m-auto mt-1.5"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                            >
                              <path d="M20.309 17.708C22.196 15.66 22.006 13.03 22 13V5a1 1 0 0 0-1-1h-6c-1.103 0-2 .897-2 2v7a1 1 0 0 0 1 1h3.078a2.89 2.89 0 0 1-.429 1.396c-.508.801-1.465 1.348-2.846 1.624l-.803.16V20h1c2.783 0 4.906-.771 6.309-2.292zm-11.007 0C11.19 15.66 10.999 13.03 10.993 13V5a1 1 0 0 0-1-1h-6c-1.103 0-2 .897-2 2v7a1 1 0 0 0 1 1h3.078a2.89 2.89 0 0 1-.429 1.396c-.508.801-1.465 1.348-2.846 1.624l-.803.16V20h1c2.783 0 4.906-.771 6.309-2.292z"></path>
                            </svg>
                          </div>
                        </div>
                        <blockquote className="mt-7">
                          <div className="text-lg text-black">
                            {`"${testimonial.quote}"`}
                          </div>
                        </blockquote>
                        <div className="mt-10 text-base font-semibold italic text-gray-600">
                          {testimonial.name}
                        </div>
                        <div className="mt-1 text-base text-gray-600">
                          {testimonial.companyName}
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </section>
    </div>
  );
}
