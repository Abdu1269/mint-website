"use client";
import Image from "next/image";
import React from "react";
import Phone from "../../../public/svgs/phone.svg";
import Website from "../../../public/svgs/website.svg";
import Location from "../../../public/svgs/location.svg";
import Email from "../../../public/svgs/email.svg";
import fetcher from "@/lib/_func/fetcher";
import { Organization } from "@/models/organizations";
import useSWR from "swr";
export default function Directory() {
  interface OrganizationResponse {
    data: Organization[];
  }

  // const { data, error, isLoading } = useSWR<OrganizationResponse>(
  //   "/organizations/get-organizations",
  //   fetcher
  // );
  const categories = [
    { id: 1, title: "Software Development", icon: <svg></svg> },
    { id: 2, title: "Information Technology (IT) Services", icon: <svg></svg> },
    { id: 3, title: "Cybersecurity", icon: <svg></svg> },
    {
      id: 4,
      title: "Artificial Intelligence (AI) and Machine Learning",
      icon: <svg></svg>,
    },
    { id: 5, title: "Cloud Computing", icon: <svg></svg> },
    { id: 6, title: "Internet of Things (IoT)", icon: <svg></svg> },
    { id: 7, title: "Fintech", icon: <svg></svg> },
    { id: 8, title: "E-commerce", icon: <svg></svg> },

    { id: 9, title: "EdTech", icon: <svg></svg> },
    { id: 10, title: "Blockchain and Cryptocurrency", icon: <svg></svg> },
    { id: 11, title: "Big Data and Analytics", icon: <svg></svg> },
    { id: 12, title: "Telecommunications", icon: <svg></svg> },
    { id: 13, title: "Gaming and Entertainment", icon: <svg></svg> },
    {
      id: 14,
      title: "Augmented Reality (AR) and Virtual Reality (VR)",
      icon: <svg></svg>,
    },
    { id: 15, title: "Robotics", icon: <svg></svg> },
    { id: 16, title: "Green Tech and Clean Energy", icon: <svg></svg> },
    { id: 17, title: "Digital Marketing", icon: <svg></svg> },
    { id: 18, title: "Hardware and Electronics", icon: <svg></svg> },
  ];

  const cities = [
    { id: 1, title: "Addis Ababa", value: "Addis Ababa" },
    { id: 2, title: "Amhara", value: "Addis Ababa" },
    { id: 3, title: "Oromia", value: "Addis Ababa" },
    { id: 4, title: "Addis Ababa", value: "Addis Ababa" },
    { id: 5, title: "Addis Ababa", value: "Addis Ababa" },
    { id: 6, title: "Addis Ababa", value: "Addis Ababa" },
    { id: 7, title: "Addis Ababa", value: "Addis Ababa" },
    { id: 8, title: "Addis Ababa", value: "Addis Ababa" },
    { id: 9, title: "Addis Ababa", value: "Addis Ababa" },
    { id: 10, title: "Addis Ababa", value: "Addis Ababa" },
  ];

  // if (error) return <div>Failed to load</div>;
  // if (!data || isLoading) return <div>Loading...</div>;

  // if (data) {
  //   console.log(data);
  // }

  return (
    <div className="h-screen">
      <div className="bg-slate-700 h-20 w-full mx-auto shadow-2xl text-white"></div>

      <div className="bg-slate-50  p-4 flex justify-center">
        <div className=" p-4 w-[90%] mt-1">
          <div>
            <div className="card bg-base-100 shadow-xl flex flex-row gap-4 justify-center  py-3 my-4 text-gray-800">
              <select className="select select-bordered w-full max-w-xs">
                {cities.map((city) => {
                  return (
                    <option key={city.id} value={city.value}>
                      {city.title}
                    </option>
                  );
                })}
              </select>
              <label className="input input-bordered flex items-center gap-2 w-[25%]">
                <input type="text" className="grow" placeholder="Search" />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="gray"
                  className="h-6 w-6 opacity-70"
                >
                  <path
                    fillRule="evenodd"
                    d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                    clipRule="evenodd"
                  />
                </svg>
              </label>
              <button className="btn px-8 py-2 rounded-full bg-gradient-to-b from-slate-500 to-slate-600 text-white focus:ring-2 focus:ring-slate-400 hover:shadow-xl transition duration-200">
                Search
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-3  h-screen">
            <nav className="card bg-base-100 shadow-2xl text-white p-4 rounded-2xl">
              <div className="flex flex-col items-center justify-center">
                <h2 className="text-3xl text-slate-600 font-semibold mb-4 uppercase text-center">
                  Categories
                </h2>
              </div>
              <ul className="menu rounded-box w-full gap-2">
                {categories.map((category) => {
                  return (
                    <li className="bg-slate-300 rounded-lg" key={category.id}>
                      <a className="py-3 bg-slate-400 rounded-lg flex justify-between items-center">
                        <p>{category.title}</p>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                          />
                        </svg>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </nav>

            <main className="bg-gray-100 p-4 col-span-3">
              <div className="grid grid-flow-row gird-cols-1 md:grid-cols-2 gap-4">
                {["link", "fasdfas", "fasdfasdf"].map((value) => {
                  return (
                    <div
                      className="card bg-base-100 shadow-xl text-slate-700"
                      key={value}
                    >
                      <div className="card-body">
                        <div className="flex justify-start gap-4 px-2 py-1">
                          <div className="avatar">
                            <div className="ring-slate-500 ring-offset-base-100 w-14 rounded-full ring ring-offset-1">
                              <Image
                                src="/banner-3.png"
                                alt="Avatar"
                                fill
                                style={{ objectFit: "cover" }}
                                className="rounded-full"
                              />
                            </div>
                          </div>
                          <div className="">
                            <h2 className="text-2xl font-bold">Title</h2>
                            <p className="text-md">Description</p>
                          </div>
                        </div>
                        <div className="flex justify-start  gap-4 px-2 py-1 items-center">
                          <div className="flex justify-start gap-2 px-1 py-1">
                            <Phone className="h-6 w-6 opacity-70" />
                            <p className="text-sm">+91 9876543210</p>
                          </div>

                          <div className="flex justify-start items-center gap-2 px-1 py-1">
                            <Email className="h-6 w-6 opacity-70" />
                            <p className="text-sm">+91 9876543210</p>
                          </div>
                        </div>
                        <div className="flex justify-start items-center gap-2 px-2 py-1">
                          <Website className="h-6 w-6 opacity-70" />
                          <p className="text-sm">+91 9876543210</p>
                        </div>
                        <div className="flex justify-start items-center gap-2 px-2 py-1">
                          <Location className="h-6 w-6 opacity-70" />
                          <p className="text-sm">+91 9876543210</p>
                        </div>
                        <div className="card-actions flex justify-between items-center px-2">
                          <div className="badge badge-success gap-2 text-base-100">
                            1234567890
                          </div>
                          <button className="btn btn-outline text-slate-600 hover:bg-slate-600 hover:text-white h-6 px-5 m-0 min-h-2">
                            View Profile
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}
