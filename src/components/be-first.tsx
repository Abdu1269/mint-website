import Image from "next/image";
import React from "react";

export default function card2() {
  return (
    <div>
      <section className="py-10 bg-white sm:py-16 lg:py-24">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid items-stretch gap-y-10 md:grid-cols-2 md:gap-x-20">
            <div className="relative flex items-center justify-center md:justify-start ">
              <Image
                src="/startup_eth.png"
                alt=""
                // width={500}
                // height={500}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover w-full rounded-lg"
              />
            </div>

            <div className="text-center lg:text-left">
              <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
                Be the First to Know: Register and Stay Ahead of the Curve
              </h2>
              <p className="mt-6 text-base text-gray-600">
                {`By registering on our site, you'll be among the first to be
                notified about exciting events like Startup Ethiopia, Stride
                Ethiopia, ICT Exhibition, and many more! Don't miss out on these`}
                {[
                  `crucial opportunities to: Connect with potential investors,
                partners, and customers.`,
                  `Learn from industry leaders and gain
                valuable insights.`,
                  `Showcase your products and services to a
                wider audience.`,
                  `Stay at the forefront of innovation and
                technological advancements.`,
                ].map((item, index) => (
                  <div key={index} className="flex gap-4 py-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        d="M8.5 12.5L10.5 14.5L15.5 9.5"
                        stroke="#23B361"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M7 3.33782C8.47087 2.48697 10.1786 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 10.1786 2.48697 8.47087 3.33782 7"
                        stroke="#23B361"
                        stroke-width="1.5"
                        stroke-linecap="round"
                      />
                    </svg>
                    {item}
                  </div>
                ))}
              </p>

              <button className="p-[3px] relative my-5">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
                <div className="px-8 py-2  bg-gray-700 rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
                  Register Now
                </div>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
