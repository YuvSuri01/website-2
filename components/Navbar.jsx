"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useContext } from "react";

import { navbarLinks } from "@/constants";
import { CallbackForm } from "@/components";
import { FormContext } from "@/context/FormContext";

const Navigation = () => {
  return navbarLinks.map((el, index) => (
    <Link
      href={el.path}
      key={index}
      className="text-[#232728] text-base font-medium border-b border-white hover:border-primary cursor-pointer"
    >
      {el.name}
    </Link>
  ));
};

const Navbar = () => {
  const [isFormOpen, setisFormOpen] = useState(false);
  const [showMobileNav, setShowMobileNav] = useState(false);
  const ctx = useContext(FormContext);

  const openNav = () => {
    setShowMobileNav(true);
  };

  const closeNav = () => {
    setShowMobileNav(false);
  };

  const openForm = () => {
    setisFormOpen(true);
  };

  const closeForm = () => {
    setisFormOpen(false);
  };

  const callbackClickHandler = () => {
    closeNav();
    openForm();
  };

  return (
    <>
      <nav className="items-center justify-between pb-3 max-w-[1300px] mx-auto px-8 sm:px-0 max-[950px]:hidden flex">
        <Link href="/">
          <Image
            src="/assets/3yearhome logo.PNG"
            alt="Logo"
            width={130}
            height={130}
          />
        </Link>

        <div className="items-center gap-8 hidden sm:flex">
          <Navigation />

          <div
            className="flex items-center gap-2 bg-primary p-2.5 rounded-[10px] cursor-pointer"
            onClick={ctx.showForm}
          >
            <span className="bg-white p-1.5 rounded-full">
              <Image
                src="/assets/call-icon-blue.svg"
                alt="call-icon"
                width={16}
                height={16}
              />
            </span>
            <span className="text-white font-medium text-base">
              Request a callback
            </span>
          </div>
        </div>
      </nav>

      {showMobileNav && (
        // <div
        //   className={`bg-white fixed top-0 left-0 h-[100vh] w-full z-[100] flex justify-center items-center`}
        // >
        <nav
          className="fixed top-36 right-[30px] bg-white flex flex-col items-center gap-6 justify-center z-[100] w-40 p-4 rounded-[10px] shadow-[0_0_5px_rgba(0,0,0,0.3)]"
          onClick={closeNav}
        >
          {/* <button className="absolute top-10 right-10" onClick={closeNav}>
              <Image
                src="/assets/close-icon.svg"
                alt="close"
                width={24}
                height={24}
              />
            </button> */}

          <Navigation />

          {/* <div
              className="flex items-center gap-2 bg-primary p-2.5 rounded-[10px] cursor-pointer"
              onClick={callbackClickHandler}
            >
              <span className="bg-white p-1.5 rounded-full">
                <Image
                  src="/assets/call-icon-blue.svg"
                  alt="call-icon"
                  width={16}
                  height={16}
                />
              </span>
              <span className="text-white font-medium text-base">
                Request a callback
              </span>
            </div> */}
        </nav>
        // </div>
      )}

      <nav className="sticky top-0 z-[60] bg-[#f0fdfa] px-6 justify-between items-center max-[950px]:flex hidden">
        <Link href="/">
          <Image
            src="/assets/3yearhome logo.PNG"
            alt="Logo"
            width={100}
            height={100}
          />
        </Link>

        <div className=" flex items-center gap-6">
          <Link href="tel:8178194015">
            <Image
              src="/assets/call-icon-blue.svg"
              alt="call"
              width={30}
              height={30}
            />
          </Link>

          <button onClick={() => setShowMobileNav((prev) => !prev)}>
            <Image
              src="/assets/hamburger.svg"
              alt="hamburger"
              width={30}
              height={30}
            />
          </button>
        </div>
      </nav>

      {ctx.isFormOpen && (
        <CallbackForm isFormOpen={ctx.isFormOpen} closeForm={ctx.hideForm} />
      )}
    </>
  );
};

export default Navbar;
