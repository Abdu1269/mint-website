import Image from "next/image";
import React from "react";
const benefits = [
  "Increased Visibility",
  "Networking Opportunities",
  "Credibility",
  "Customizable Profile",
  "Searchable Listings",
  "Industry Updates",
  "SEO Benefits",
  "Marketing Support",
  "Exclusive Access",
  "User Reviews",
];

const half = Math.ceil(benefits.length / 2);

export default function card1() {
  return (
    <div id="benefits">
      <section className="py-10 bg-gray-50 sm:py-16 lg:py-24">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid items-stretch gap-y-10 md:grid-cols-2 md:gap-x-20">
            <div className="relative flex items-center justify-center md:justify-start">
              <Image
                src="/banner-3.png"
                alt=""
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover w-full rounded-lg"
              />
            </div>

            <div className="flex flex-col items-start xl:px-4">
              <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
                Benefits of Registering Your Tech Company.
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 py-10 w-full">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start mb-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="w-6 h-6 text-green-500 mr-2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-base text-gray-600">{benefit}</span>
                  </div>
                ))}
              </div>

              <a
                href="#"
                title=""
                className="inline-flex items-center justify-center px-5 py-4 mt-8 text-base font-semibold text-white transition-all duration-200 rounded-md hover:opacity-90 focus:opacity-90 lg:mt-auto bg-gradient-to-r from-fuchsia-600 to-blue-600"
                role="button"
              >
                Get started now
                <svg
                  className="w-5 h-5 ml-8 -mr-1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
