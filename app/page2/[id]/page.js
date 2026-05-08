"use client";

import { useContext } from "react";

import { Amenity } from "@/components";
import { detailAmenities, detailServices, listing } from "@/constants";
import Image from "next/image";
import { FormContext } from "@/context/FormContext";

const Page = ({ params }) => {
  const pg = listing.find((el) => el.id === params.id);
  const ctx = useContext(FormContext);

  return (
    <>
      <section>
        <div className="max-w-[1300px] min-[950px]:mx-auto mx-8 mb-20">
          <div className="flex gap-4 max-w-[750px]:items-end min-[950px]:mb-6 mb-10 max-[750px]:flex-col">
            <div className="mr-auto">
              <h1 className="min-[950px]:text-5xl text-3xl max-[500px]:text-2xl min-[950px]:mb-4 mb-1 ">
                {pg.name}
              </h1>
              <span className="text-[#7D7D7D] min-[950px]:text-4xl text-3xl max-[500px]:text-2xl">
                {pg.campus} Campus
              </span>
            </div>

            <div className="flex min-[500px]:items-end max-[500px]:flex-col max-[500px]:gap-4 max-[500px]:items-start sm:flex hidden">
              <div className="flex gap-6">
                {pg.types.map((t, it) => {
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

              <div className="min-[500px]:ml-16">
                <p className="text-[11px] text-[#7D7D7D] leading-[14px] mb-2">
                  Starts from
                </p>
                <p className="text-[#292D32] sm:text-lg text-base leading-[26px]">
                  ₹21,999 <span className="text-xs">/mo*</span>
                </p>
              </div>
            </div>
          </div>

          <div className="flex gap-6 items-start min-[950px]:flex-row flex-col">
            <div className="relative min-[950px]:h-[600px] max-[950px]:w-full h-[300px] min-[950px]:mb-0 min-[950px]:mb-8 min-[950px]:flex-[2] rounded-[10px] overflow-hidden sm:block hidden">
              <Image
                src={`/assets/${pg.img}`}
                alt="boston-house"
                fill={true}
                className="object-cover"
              />
            </div>

            <div className="overflow-x-scroll [&::-webkit-scrollbar]:hidden min-[950px]:flex-[1] w-full">
              <div className="flex min-[950px]:justify-between min-[950px]:justify-center items-center min-[950px]:gap-12 gap-2 min-[950px]:mb-12 mb-6 min-[950px]:flex-col flex-row">
                <div className="relative max-[950px]:flex-[1] sm:min-w-[250px] min-w-[180px] h-[200px] rounded-[10px] overflow-hidden">
                  <Image
                    src={`/assets/${pg.img}`}
                    alt="boston-house"
                    fill={true}
                    className="object-cover"
                  />
                </div>
                <div className="relative max-[950px]:flex-[1]  sm:min-w-[250px] min-w-[180px] h-[200px] rounded-[10px] overflow-hidden">
                  <Image
                    src={`/assets/${pg.img}`}
                    alt="boston-house"
                    fill={true}
                    className="object-cover"
                  />
                </div>
                <div className="relative max-[950px]:flex-[1]  sm:min-w-[250px] min-w-[180px] h-[200px] rounded-[10px] overflow-hidden">
                  <Image
                    src={`/assets/${pg.img}`}
                    alt="boston-house"
                    fill={true}
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4 items-center sm:hidden block mb-6">
            <div className="flex gap-6">
              {pg.types.map((t, it) => {
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

            <div className="min-[500px]:ml-16">
              <p className="text-[11px] text-[#7D7D7D] leading-[14px] mb-2">
                Starts from{" "}
                <span className="text-[#292D32] sm:text-lg text-base leading-[26px]">
                  {" "}
                  {pg.price} /mo*
                </span>
              </p>
            </div>
          </div>

          <div className="flex justify-center mb-8 min-[950px]:hidden">
            <button
              className="bg-primary px-8 py-4 rounded-[10px] text-white text-sm font-medium flex-[0_1_280px] "
              onClick={ctx.showForm}
            >
              Request a callback
            </button>
          </div>

          <div className="flex justify-between items-start">
            <div className="flex-[1]">
              <div className="min-[950px]:max-w-[50%] bg-white rounded-[10px] sm:shadow-none shadow-md p-4">
                <h4 className="min-[950px]:text-2xl text-xl font-medium mb-2">
                  Services
                </h4>
                <div className="flex flex-wrap gap-4 mb-8">
                  {pg.services.map((el, i) => (
                    <Amenity icon={el.icon} text={el.text} key={i} />
                  ))}
                </div>
              </div>
            </div>

            <button
              className="bg-primary px-8 py-4 rounded-[10px] mt-6 text-white font-medium flex-[0_1_280px] min-[950px]:block hidden"
              onClick={ctx.showForm}
            >
              Request a callback
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;
