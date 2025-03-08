import Image from "next/image";
import React from "react";
import logo from "../../assets/logo.jpeg";
import search from "../../assets/icon/search.svg";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="top-logo-search flex items-center mt-10">
      <Link href={"/profile"}>
        <div className="logo mr-5">
          <Image
            src={logo}
            width={40}
            height={40}
            alt="logo"
            className="rounded-full shadow-[0px_10px_14px_0px_#F8C272B2]"
          />
        </div>
      </Link>
      <div className="search-bar relative w-full">
        <Image
          src={search}
          width={24}
          height={24}
          alt="search"
          className="absolute left-3 top-4"
        />
        <input
          type="text"
          placeholder="Search"
          className="py-4 pl-10 pr-4 bg-[#FFF8F4] outline-none w-full rounded-[10px]"
        />
      </div>
    </div>
  );
};

export default Hero;
