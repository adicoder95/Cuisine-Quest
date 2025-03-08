import Image from "next/image";
import React from "react";
import logo from "../../assets/logo.jpeg";
import search from "../../assets/icon/search.svg";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="top-logo-search flex items-center mt-10">
      <Link href={'/profile'}>
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
      <h2 className="text-[22px] pl-5 text-[#FC8801] font-bold">
        Recipe Generator
      </h2>
    </div>
  );
};

export default Hero;
