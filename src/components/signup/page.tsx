"use client";
import Image from "next/image";
import React from "react";

import Certificate from "../../../public/svgs/certificate.svg";
import Email from "../../../public/svgs/email.svg";
import Organization from "../../../public/svgs/organization.svg";
import Website from "../../../public/svgs/website.svg";
import Password from "../../../public/svgs/password.svg";
import { useForm } from "react-hook-form";
import axiosInstance from "@/shared/utitlity/axiosInstance";
export default function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  const password = watch("initPassword"); // Get the current password value

  const validateConfirmPassword = (value: string) => {
    if (value !== password) {
      return "Passwords do not match";
    }
    return undefined; // No error
  };

  const onSubmit = (data: any) => {
    // console.log(data);

    if (data) {
      const formData = {
        name: data.organizationName ?? "No Data",
        email: data?.email ?? "No Data",
        password: data?.initPassword ?? "No Data",
        phone: data?.phoneNumber ?? "No Data",
        tin: data?.tinNumber ?? "No Data",
        website: data?.website ?? "No Data",
        note: "no data",
        address: {
          country: "No Data",
          city: "No Data",
          subcity: "No Data",
          woreda: "No Data",
          kebele: "No Data",
        },
      };
      try {
        setIsLoading(true);
        axiosInstance.post("/organizations/register", formData).then((res) => {
          console.log(res);
          setIsLoading(false);
        });
      } catch (error) {
        setIsLoading(false);
        console.log(error);
      }
    }
  };

  return (
    <div>
      <div className="bg-slate-700 h-20 w-full mx-auto shadow-2xl text-white"></div>

      <section className="bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="relative flex items-end px-4 pb-10 pt-60 sm:pb-16 md:justify-center lg:pb-24 bg-gray-50 sm:px-6 lg:px-8">
            <div className="absolute inset-0">
              <Image
                className="object-cover object-top"
                src="/reg_img.png"
                alt=""
                fill
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>

            <div className="relative">
              <div className="w-full max-w-xl xl:w-full xl:mx-auto xl:pr-24 xl:max-w-xl">
                <h3 className="text-4xl font-bold text-white">
                  Join 5k+ Companies & <br className="hidden xl:block" />
                  Get Visible!
                </h3>
                <ul className="grid grid-cols-1 mt-10 sm:grid-cols-2 gap-x-8 gap-y-4">
                  <li className="flex items-center space-x-3">
                    <div className="inline-flex items-center justify-center flex-shrink-0 w-5 h-5 bg-blue-500 rounded-full">
                      <svg
                        className="w-3.5 h-3.5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </div>
                    <span className="text-lg font-medium text-white">
                      {" "}
                      Searchable Listings{" "}
                    </span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="inline-flex items-center justify-center flex-shrink-0 w-5 h-5 bg-blue-500 rounded-full">
                      <svg
                        className="w-3.5 h-3.5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </div>
                    <span className="text-lg font-medium text-white">
                      {" "}
                      Unlimited Exports{" "}
                    </span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="inline-flex items-center justify-center flex-shrink-0 w-5 h-5 bg-blue-500 rounded-full">
                      <svg
                        className="w-3.5 h-3.5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </div>
                    <span className="text-lg font-medium text-white">
                      {" "}
                      Customizable Profile{" "}
                    </span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="inline-flex items-center justify-center flex-shrink-0 w-5 h-5 bg-blue-500 rounded-full">
                      <svg
                        className="w-3.5 h-3.5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </div>
                    <span className="text-lg font-medium text-white">
                      {" "}
                      Searchable Listings{" "}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center py-10 sm:px-6 lg:px-8 sm:py-16 lg:py-2">
            <div className="w-full pt-2">
              <form className="mt-2" onSubmit={handleSubmit(onSubmit)}>
                <div className="space-y-5">
                  <div className="flex flex-row gap-5">
                    <div className=" w-full">
                      <label
                        htmlFor=""
                        className="text-base font-medium text-gray-900"
                      >
                        {" "}
                        Organization Name{" "}
                      </label>
                      <div className="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                          <Organization className="w-5 h-5" />
                        </div>

                        <input
                          type="text"
                          id=""
                          {...register("organizationName")}
                          placeholder="Organization Name"
                          className="block w-full py-4 pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                        />
                      </div>
                    </div>
                    <div className="w-full">
                      <label
                        htmlFor=""
                        className="text-base font-medium text-gray-900"
                      >
                        {" "}
                        Email
                      </label>
                      <div className="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                          <Email className="w-5 h-5 " />
                        </div>

                        <input
                          type="email"
                          id=""
                          required
                          {...register("email")}
                          placeholder="Enter your email"
                          className="block w-full py-4 pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-row gap-5">
                    <div className="w-full">
                      <label
                        htmlFor=""
                        className="text-base font-medium text-gray-900"
                      >
                        {" "}
                        Phone Number{" "}
                      </label>
                      <div className="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                          +251
                        </div>

                        <input
                          type="text"
                          id=""
                          placeholder="Enter your full name"
                          {
                            ...register("phoneNumber") /******/
                          }
                          className="block w-full py-4  pl-14 pr-4  text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                        />
                      </div>
                    </div>
                    <div className="w-full">
                      <label
                        htmlFor=""
                        className="text-base font-medium text-gray-900"
                      >
                        {" "}
                        Tin Number{" "}
                      </label>
                      <div className="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                          <Certificate className="w-6 h-6" />
                        </div>

                        <input
                          type="number"
                          id=""
                          {
                            ...register("tinNumber") /******/
                          }
                          placeholder="Tin Number"
                          className="block w-full py-4 pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-row justify-start gap-5">
                    <div className="w-full">
                      <label
                        htmlFor=""
                        className="text-base font-medium text-gray-900"
                      >
                        {" "}
                        Website{" "}
                      </label>
                      <div className="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                          <Website className="w-5 h-5" />
                        </div>

                        <input
                          type="text"
                          id=""
                          placeholder="Website"
                          {...register("website")}
                          className="block w-full py-4 pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-row gap-5">
                    <div className="w-full">
                      <label
                        htmlFor=""
                        className="text-base font-medium text-gray-900"
                      >
                        {" "}
                        Password{" "}
                      </label>
                      <div className="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                          <Password className="w-5 h-5" />
                        </div>

                        <input
                          type="password"
                          id=""
                          placeholder="Enter your full name"
                          {
                            ...register("initPassword") /******/
                          }
                          className="block w-full py-4  pl-14 pr-4  text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                        />
                      </div>
                    </div>
                    <div className="w-full">
                      <label
                        htmlFor=""
                        className="text-base font-medium text-gray-900"
                      >
                        {" "}
                        Confirm Password{" "}
                      </label>
                      <div className="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                          <Password className="w-5 h-5" />
                        </div>

                        <input
                          type="password"
                          id=""
                          placeholder="Confirm Password"
                          {...register("confPassword", {
                            validate: validateConfirmPassword,
                          })}
                          className="block w-full py-4  pl-14 pr-4  text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                        />
                      </div>
                      {errors.confPassword && (
                        <p className="text-red-500 text-sm mt-1 my-2 mx-4">
                          {errors.confPassword.message?.toString()}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-white transition-all duration-200 border border-transparent rounded-md bg-gradient-to-r from-fuchsia-600 to-blue-600 focus:outline-none hover:opacity-80 focus:opacity-80"
                    >
                      {isLoading ? (
                        <span className="loading loading-spinner loading-lg"></span>
                      ) : (
                        "Sign up"
                      )}
                    </button>
                  </div>
                </div>
              </form>
              <p className="mt-2 text-base text-center text-gray-600">
                Already have an account?{" "}
                <a
                  href="#"
                  title=""
                  className="font-medium text-blue-600 transition-all duration-200 hover:text-blue-700 focus:text-blue-700 hover:underline"
                >
                  Login
                </a>
              </p>
              <p className="text-center mt-5 text-sm text-gray-600">
                <a
                  href="#"
                  title=""
                  className="text-blue-600 transition-all duration-200 hover:underline hover:text-blue-700"
                >
                  Privacy Policy
                </a>{" "}
                &
                <a
                  href="#"
                  title=""
                  className="text-blue-600 transition-all duration-200 hover:underline hover:text-blue-700"
                >
                  Terms of Service
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
