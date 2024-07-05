"use client";
import React from "react";
import Navbar from "../ui/navbar/Navbar";
import Footer from "../ui/footer/Footer";

interface LayoutProps {
  children: React.ReactNode;
}

const AppLayout = ({ children }: LayoutProps) => {

  return (
    <>
      <Navbar />
      <main className="h-full py-10 bg-black-100 overflow-hidden mx-auto sm:px-10 px-5">
        {children}
      </main>
      <Footer />
    </>
  );
};

export default AppLayout;
