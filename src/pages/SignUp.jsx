'use client'
import Link from "next/link";
import React from "react";
import { FcGoogle } from "react-icons/fc";
import "../styles/signup.css";
import Image from "next/image";
import cover from "../assets/cover.svg";
import hide from "../assets/icon/hide.svg";
import eye from "../assets/icon/eye.svg";
import { useRouter } from "next/navigation";

const SignUp = ({ page }) => {
  const router = useRouter();
  return (
    <div className="signup relative">
      <div className="signup-cover">
        <Image src={cover} alt="cover" className="w-full" />
      </div>
      <div className="signup-main">
        <div className="max-w-[363px] m-auto">
          <form action="#" method="get">
            <h4>Let’s Sign {page === "signin" ? "In" : "Up"}</h4>
            {!page && <input type="text" placeholder="Username" />}
            <input type="text" placeholder="Email" />
            <div className="relative">
              <input type="text" placeholder="Password" className="!pr-10" />
              <Image
                src={eye}
                alt="hide"
                className="absolute top-4.5 right-2"
              />
            </div>
            {!page && (
              <div className="relative">
                <input
                  type="text"
                  placeholder="Confirm Password"
                  className="!pr-10"
                />
                <Image
                  src={hide}
                  alt="hide"
                  className="absolute top-4.5 right-2"
                />
              </div>
            )}
            {page && (
              <p className="text-[#999] mt-2 text-end">Forgot your password?</p>
            )}
            <button
              onClick={() => router.push("/profile")}
              href={page ? "/setting" : "/"}
              className="button-active w-full mt-4"
            >
              Sign {page === "signin" ? "In" : "Up"}
            </button>
          </form>
          <div className="flex justify-between items-center gap-4 my-5">
            <span className="w-full h-[1.5px] bg-[#d6d4d4]"></span>
            <p className="text-[#999]">Or</p>
            <span className="w-full h-[1.5px] bg-[#d6d4d4]"></span>
          </div>
          <button className="flex items-center py-2.5 px-5 bg-white rounded-[10px] w-full gap-6">
            <FcGoogle />
            <span>Sign up with Google</span>
          </button>
          <p className="text-[#999] mt-5 text-center">
            {page ? "Don’t have an account?" : "Already have an account?"}
            <Link
              href={page ? "/signup" : "signin"}
              className="text-[#FC8801] font-semibold"
            >
              {" "}
              Sign {page === "signin" ? "Up" : "In"}{" "}
            </Link>
            now
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
