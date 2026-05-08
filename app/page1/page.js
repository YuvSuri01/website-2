"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { Amenity, Dropdown } from "@/components";
import { amenities, listing } from "@/constants";

const Page = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [option, setOption] = useState("Choose area");

  const optionClickHandler = (e) => {
    setOption(e.target.dataset.name);
    setShowDropdown(false);
  };

  return (
    <>
      <section className="max-w-[1350px] sm:mx-auto sm:mx-8 px-6">
        <div className="mb-4">
          <div className="relative sm:h-[360px] h-[100px]">
            <Image
              src="/assets/banner-1.png"
              alt="banner"
              fill={true}
              className="min-[950px]:object-cover object-contain"
            />
          </div>
        </div>

        <div className="flex gap-4 justify-center">
          <button className="border-0 focus:outline-none bg-[#60C3AD] w-[40px] h-[8px] rounded-full"></button>
          <button className="w-[8px] h-[8px] rounded-full bg-[#D0D0D0]"></button>
        </div>
      </section>

      <section className="max-w-[1350px] mx-auto px-6 pt-6 mb-8">
        <div className="flex gap-4 mb-10 sm:flex-nowrap flex-wrap">
          <div className="relative w-[200px]">
            <Dropdown
              showDropdown={showDropdown}
              setShowDropdown={setShowDropdown}
              option={option}
              optionClickHandler={optionClickHandler}
              options={[
                "Delhi",
                "Manipal",
                "Kota",
                "Bangalore",
                "Mumbai",
                "Dehradul",
                "Hyderabad",
                "Noida",
                "Guragaon",
                "Pune",
              ]}
              topPosition="100%"
            />
          </div>
        </div>

        <p className="sm:text-[23px] text-base leading-[31px] sm:mb-16 mb-8">
          waiting to be yours in Delhi
        </p>

        <div className="flex flex-col gap-6">
          {listing.map((el, index) => (
            <div
              className="flex min-[950px]:gap-8 gap-4 flex-row max-[950px]:flex-col min-[950px]:items-stretch items-start min-[950px]:p-0 p-4 sm:bg-transparent bg-white rounded-[10px] sm:shadow-none shadow-md mb-4"
              key={index}
            >
              <Link
                href={`/page2/${el.id}`}
                className="max-[950px]:block max-[950px]:w-full max-[950px]:h-full"
              >
                <div className="relative sm:h-[385px] h-[275px] min-[950px]:w-[524px] w-full min-[950px]:flex-none sm:flex-50 rounded-[10px] overflow-hidden">
                  <Image
                    src={`/assets/${el.img}`}
                    alt="boston-house"
                    fill={true}
                    className="object-cover scale-100 hover:scale-125 transition-all"
                  />
                </div>
              </Link>

              <div className="flex-1 bg-white p-4 rounded-[10px]">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h4 className="text-[17px] leading-[23px]">{el.name}</h4>
                    <span className="text-[11px] leading-[16px] text-[#7D7D7D]">
                      {el.campus} Campus
                    </span>
                  </div>
                </div>

                <div className="flex sm:mb-2 mb-6 gap-6">
                  {el.types.map((t, it) => {
                    if (t === "male" || t === "female")
                      return (
                        <div className="flex items-center gap-2" key={it}>
                          <Image
                            src="/assets/male-icon.svg"
                            alt="male-icon"
                            width={30}
                            height={30}
                          />
                          {t}
                        </div>
                      );
                    else
                      return (
                        <div className="flex items-center" key={it}>
                          <Image
                            src="/assets/occupancy.svg"
                            alt="occupancy-icon"
                            width={30}
                            height={30}
                          />
                          {t}
                        </div>
                      );
                  })}
                </div>

                <p className="text-[11px] text-[#7D7D7D] leading-[14px] mb-2 sm:block hidden">
                  Amenities
                </p>

                <div className="flex mb-10">
                  <div className="min-[950px]:flex-[0_1_70%] flex-[0_1_80%] flex sm:flex-wrap sm:flex-row flex-col gap-4 sm:flex hidden ">
                    {el.amenities.map((a, ia) => (
                      <Amenity icon={a.icon} text={a.text} key={ia} />
                    ))}
                  </div>

                  <div className="min-[950px]:ml-auto sm:block flex items-center gap-4">
                    <p className="sm:text-[11px] text-sm text-[#7D7D7D] leading-[14px] sm:mb-2">
                      Starts from
                    </p>
                    <p className="text-[#292D32] min-[950px]:text-lg text-sm leading-[26px]">
                      {el.price}
                    </p>
                  </div>
                </div>

                <div className="flex sm:justify-end justify-center sm:gap-6 gap-10">
                  <Link
                    href={`/page2/${el.id}`}
                    className="border-0 focus:outline-none font-medium text-primary text-sm leading-[24px] uppercase min-[950px]:p-4 p-2"
                  >
                    View Details
                  </Link>
                  <a
                    href="tel:8178194015"
                    className="border border-primary focus:outline font-medium rounded-[10px] text-primary text-sm leading-[24px] uppercase min-[950px]:px-8 px-6 min-[950px]:py-4 py-2"
                  >
                    Call Now
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Page;
