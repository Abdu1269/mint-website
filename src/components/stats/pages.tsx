import React from "react";

import StatsComponent from "../UI/stats";

export default function Stats() {
  const stats = [
    {
      id: 1,
      value: 500,
      suffix: "+",
      title: "Registered Companies",
      description: "Over 500 tech companies have registered on our platform.",
    },
    {
      id: 2,
      value: 200000,
      suffix: "+",
      title: "Monthly Visitors",
      description:
        "Our directory receives over 1.2 million visitors each month.",
    },
    {
      id: 3,
      value: 98,
      suffix: "+",
      title: "Satisfaction",
      description:
        "We maintain a 98% customer satisfaction rate among our users.",
    },
  ];
  return (
    <div>
      <section className="py-10 bg-gray-100 sm:py-16 lg:py-24">
        <div className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
              Our Impressive Stats{" "}
            </h2>
            <p className="mt-3 text-xl leading-relaxed text-gray-600 md:mt-8">
              Discover why tech companies in Ethiopia choose us: extensive
              reach, high user satisfaction, and growing business trust.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 mt-5 text-center lg:mt-24 sm:gap-x-8 md:grid-cols-3">
            {stats.map((stat) => {
              return (
                <div key={stat.id}>
                  <h3 className="font-bold text-7xl">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-blue-600">
                      {" "}
                      <StatsComponent number={stat.value} />
                    </span>
                  </h3>
                  <p className="mt-4 text-xl font-medium text-gray-900">
                    {stat.title}
                  </p>
                  <p className="text-base mt-0.5 text-gray-500">
                    {stat.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
