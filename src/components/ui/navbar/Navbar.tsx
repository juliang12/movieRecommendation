"use client";
import Link from "next/link";
import React, { useState } from "react";
import icon from "@/assets/bars.svg";
import Image from "next/image";
import { signOut } from "firebase/auth";
import { auth } from "@/config/firebase";
import useAuth from "@/hooks/auth/useAuth";

const Navbar = () => {
  const [hidde, setHidde] = useState(false);
  const { user, loading } = useAuth();

  const handleMobile = () => {
    setHidde(!hidde);
  };

  const handleClick = () => {
    setHidde(false);
  };

  const signOutUser = async () => {
    await signOut(auth);
  };


  return (
    <div className="w-full h-12 bg-slate-900 flex justify-between px-5 items-center">
      <h1 className="text-3xl text-white">MR</h1>
      <nav
        className={`max-md:absolute max-md:bg-slate-600 max-md:min-h-[60vh] left-0 top-[9%] ${
          !hidde ? "left-[-100%]" : ""
        } w-full flex items-center justify-center z-20`}
      >
        <ul className="h-full flex md:flex-row flex-col gap-5 items-center text-white uppercase ">
          <Link
            onClick={handleClick}
            href="/"
            className="hover:text-indigo-500 transition-colors duration-500 max-md:my-0"
          >
            Home
          </Link>
          <Link
            onClick={handleClick}
            href="/search"
            className="hover:text-indigo-500 transition-colors duration-500"
          >
            Search
          </Link>
          <Link
            onClick={handleClick}
            href="/bookmarks"
            className="hover:text-indigo-500 transition-colors duration-500"
          >
            Bookmarks
          </Link>
        </ul>
      </nav>
      {!loading && user ? (
        <button
          onClick={() => signOutUser()}
          className="text-white hover:bg-slate-500 py-2 px-2 rounded-lg text-sm"
        >
          Logout
        </button>
      ) : (
        <a
          href="/auth/login"
          className="text-white hover:bg-slate-500 py-2 px-2 rounded-lg text-sm"
        >
          Login
        </a>
      )}

      <div onClick={handleMobile}>
        <Image
          className="md:hidden cursor-pointer"
          src={icon}
          alt=""
          width={30}
          height={30}
        />
      </div>
    </div>
  );
};

export default Navbar;
