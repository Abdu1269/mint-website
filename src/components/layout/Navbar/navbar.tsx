"use client";
import { cn } from "@/lib/_func/cn";
import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";
import { NavbarLinks } from "./link";
import { PulseBeamsSecond } from "@/components/CTA/cta";
export default function Navbar() {
  const [scrolled, setScrolled] = React.useState(false);
  const navbarRef = useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
        navbarRef.current?.classList.remove("bg-transparent");
        navbarRef.current?.classList.add("bg-white");
      } else {
        setScrolled(false);
        navbarRef.current?.classList.remove("bg-white");
        navbarRef.current?.classList.add("bg-transparent");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);
  return (
    <div
      ref={navbarRef}
      className={cn(
        `navbar bg-transparent fixed top-0 z-50 w-full`,
        scrolled && "shadow-xl rounded-bl-xl rounded-br-xl"
      )}
    >
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Parent</a>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
        <div className="px-10">
          <Link href="/" className="">
            <Image src="/mint.png" alt="menu" width={80} height={80} />
          </Link>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul
          className={cn(
            "menu menu-horizontal px-1 text-white",
            scrolled && "text-black"
          )}
        >
          {NavbarLinks.map((link) => (
            <li key={link.id} className="px-2 font-semibold text-md">
              <Link href={link.path}>{link.title}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="navbar-end flex gap-5">
        <Link href="#" className="">
          <li className="bg-slate-700 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6  text-white inline-block ">
            <span className="absolute inset-0 overflow-hidden rounded-full ">
              <span className="absolute  inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0  transition-opacity duration-500 group-hover:opacity-100" />
            </span>
            <div className="relative  flex space-x-2 items-center z-10 rounded-full bg-slate-700 py-0.5 px-4 ring-1 ring-white/10 ">
              <span className="px-5 py-1 text-2md">Login</span>
              <svg
                fill="none"
                height="16"
                viewBox="0 0 24 24"
                width="16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.75 8.75L14.25 12L10.75 15.25"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                />
              </svg>
            </div>
            <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
          </li>
        </Link>
        <Link href="/register">
          <PulseBeamsSecond title="Register" sx={"h-10  w-40"} />
        </Link>
      </div>
    </div>
  );
}
