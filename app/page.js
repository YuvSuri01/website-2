"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import {
  milestones,
  facilitiesImages,
  highlights,
  knowYourUniversity,
  blogs,
  welcome,
} from "@/constants";
import { Button, SearchBar } from "@/components";

export default function Home() {
  return (
    <>
      <section>
        <div className="mx-8">
          <div className="flex gap-8 sm:pt-8 pb-8 sm:px-8 px-4 sm:flex-row flex-col">
            <div className="min-[950px]:flex-[0_1_35%] flex-50">
              <h1 className="sm:text-5xl text-3xl font-[Playfair Display] font-normal sm:leading-[70px] max-[450px]:text-2xl leading-[50px] text-center sm:text-left mb-2 ">
                &ldquo;Find Your Perfect Home Away from Home&rdquo;
              </h1>
              <p className="text-lg leading-[28px] mb-4 sm:text-left text-center ">
                Connecting students to their ideal homes in Delhi University
                since 2018, revolutionizing the search for{" "}
                <span className="font-bold text-primary">PGs and hostels.</span>{" "}
                <br className="sm:block hidden" />
                Find Your Perfect PG or Hostel:{" "}
                <span className="font-bold text-primary">
                  {" "}
                  Hassle-Free, Brokerage-Free Accommodation Solutions!
                </span>
              </p>
            </div>

            <div className="min-[950px]:flex-[0_1_65%] flex-50 flex gap-8 max-[950px]:flex-col flex-row">
              {facilitiesImages.map((el, index) => (
                <div key={index} className="flex-[1]">
                  <motion.div
                    className="group relative min-[950px]:h-[380px] h-[150px] w-full overflow-hidden min-[950px]:rounded-none rounded-[10px]"
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                  >
                    <Link href="/page1">
                      <Image
                        src={el.img}
                        alt="facilities"
                        fill={true}
                        className="min-[950px]:object-contain scale-100 group-hover:scale-125 transition-all"
                      />
                    </Link>
                    {/* <Link
                      href="/page1"
                      className="block font-bold text-4xl text-white text-center absolute top-28 left-1/2 z-10 -translate-x-1/2 drop-shadow-[0_35px_35px_rgba(0,0,0,1)] group-hover:text-[#c9f007] min-[950px]:block hidden"
                    >
                      {el.heading}
                    </Link> */}
                    {/* <Link
                      href="/page1"
                      className="text-base font-bold text-white absolute bottom-4 left-4 z-10 group-hover:text-[#c9f007] min-[950px]:hidden block"
                    >
                      {el.heading}
                    </Link> */}
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-[#EEEEEE] p-8">
          <div className="max-w-[1000px] mx-auto flex sm:justify-between justify-center sm:flex-nowrap max-[350px]:flex-wrap sm:gap-8 gap-4">
            {milestones.map((el, index) => (
              <div
                className="flex items-center gap-2 sm:flex-row flex-col sm:flex-none flex-[1] max-[350px]:flex-none rounded-[10px] sm:bg-[#f0fdfa] bg-white sm:p-0 p-4 min-w-[100px]"
                key={index}
              >
                <Image src={el.image} alt={el.text} width={30} height={24} />
                <span className="text-[#232728] sm:text-[24px] text-[16px] font-medium">
                  {el.count}
                </span>
                <span className="sm:text-[18px] text-[14px] text-[#4e5253]">
                  {el.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="">
          {/* <div className="sm:px-20 px-12 sm:py-12 py-6 mb-16">
            <p className="text-lg leading-[26px] text-center text-gray text-[#292D32]">
              Come over and experience how a place to stay can be so much more
            </p>
          </div> */}

          {/* <div className="flex flex-wrap min-[950px]:gap-20 gap-12 max-[400px]:gap-2 sm:justify-center justify-center max-[350px]:justify-center min-[950px]:px-16 px-4 min-[950px]:pb-32 pb-20">
            {welcome.map((el, index) => (
              <div
                className="sm:bg-[#f0fdfa] rounded-[10px] bg-white sm:p-0 p-2 sm:shadow-none shadow-sm"
                key={index}
              >
                <div className="relative min-[950px]:w-[390px] w-[130px] max-[400px]:w-[100px] min-[950px]:h-[275px] max-[400px]:h-[100px] h-[130px] rounded-[15px] overflow-hidden flex justify-center items-center">
                  <Image
                    src={el.img}
                    alt="welcome"
                    fill={true}
                    className="object-cover"
                  />
                  <motion.p className="font-medium min-[950px]:text-[40px] max-[400px]:text-sm text-lg min-[950px]:leading-[50px] leading-[30px] text-white z-[10] text-center">
                    {el.text}
                  </motion.p>
                </div>
              </div>
            ))}
          </div> */}
          <div className="max-w-[1256px] mx-auto mb-16 flex justify-center flex-col items-center">
            <h2 className="sm:text-5xl text-3xl font-normal sm:leading-[70px] max-[450px]:text-2xl leading-[50px] text-center sm:text-left mb-2">
              Welcome to 3 Year home
            </h2>
            <p className="text-lg leading-[26px] text-center text-gray text-[#292D32] mb-8">
              Come over and experience how a place to stay can be so much more
            </p>
            <div className="relative w-full min-[950px]:w-2/3 h-[450px] sm:block hidden">
              <Image src="/assets/why.png" alt="why" fill={true} />
            </div>
            <div className="relative w-full h-[400px] sm:hidden block mx-12">
              <Image src="/assets/why-mobile-2.png" alt="why" fill={true} />
            </div>
            {/* <div className="relative flex p-8  h-[250px]">
              <Image
                src="/assets/logo-svg.svg"
                alt="logo"
                width={150}
                height={150}
                className="shaadow-md absolute top-[115px] left-1/2 -translate-x-1/2 -translate-y-1/2"
              />
              <div>
                <Image
                  src="/assets/government-approved.png"
                  alt="government-approved"
                  width={180}
                  height={180}
                  className="absolute -top-[50px] left-[54.9%] shadow-md"
                />
                <p className="text-lg leading-[26px] text-center text-gray text-[#292D32] absolute top-0 left-[68%]">
                  Government <br /> Approved
                </p>
              </div>
              <div>
                <Image
                  src="/assets/iso-msme.png"
                  alt="government-approved"
                  width={150}
                  height={150}
                  className="absolute top-[90px] left-[55.7%] shadow-md z-10"
                />
                <p className="text-lg leading-[26px] text-center text-gray text-[#292D32] absolute top-[150px] left-[68%]">
                  ISO & MSME <br />
                  Certified
                </p>
              </div>
              <div>
                <Image
                  src="/assets/newspaper-listed.png"
                  alt="government-approved"
                  width={150}
                  height={150}
                  className="absolute top-[175px] left-[49.3%] rotate-[10deg] shadow-md"
                />
                <p className="text-lg leading-[26px] text-center text-gray text-[#292D32] absolute top-[120%] left-[56%]">
                  Listed in 5 <br />
                  Newspapers
                </p>
              </div>
              <div>
                <Image
                  src="/assets/student-accomodation.png"
                  alt="government-approved"
                  width={150}
                  height={150}
                  className="absolute top-[185px] left-[38.2%] rotate-[25deg] shadow-md"
                />
                <p className="text-lg leading-[26px] text-center text-gray text-[#292D32] absolute top-[120%] left-[30%]">
                  5000+ Student <br /> Accomodation
                </p>
              </div>
              <div>
                <Image
                  src="/assets/no-brokerage.png"
                  alt="government-approved"
                  width={150}
                  height={150}
                  className="absolute top-[70px] left-[30.6%] rotate-[35deg] shadow-md"
                />
                <p className="text-lg leading-[26px] text-center text-gray text-[#292D32] absolute top-[55%] left-[25%]">
                  No <br /> Brokerage
                </p>
              </div>
              <div>
                <Image
                  src="/assets/trusted-colleges.png"
                  alt="government-approved"
                  width={150}
                  height={150}
                  className="absolute top-[-40px] left-[31.8%] rotate-[40deg] shadow-md"
                />
                <p className="text-lg leading-[26px] text-center text-gray text-[#292D32] absolute top-0 left-[22%]">
                  Trusted By <br /> 30+ Colleges
                </p>
              </div> 
            </div>
              */}
          </div>

          <div className="sm:px-8 sm:mx-0 mx-8 sm:my-0 my-8 sm:bg-transparent bg-white rounded-[10px] sm:shadow-none shadow-sm">
            <div className="max-w-[1156px] mx-auto sm:py-28 py-8 flex min-[950px]:items-center sm:gap-20 gap-8 min-[950px]:flex-row flex-col">
              <h3 className="text-2xl leading-[40px] font-bold text-center sm:hidden block">
                Brokerage free{" "}
                <br className="max-[350px]:hidden block sm:hidden" />{" "}
                <span className="text-primary"> Accomodations</span>
              </h3>
              <div className="flex-50 flex gap-20 justify-start ml-8 max-[350px]:ml-4">
                <div className="sm:w-[270px] w-[180px] max-[350px]:w-[130px] sm:h-[440px] max-[350px]:h-[250px] h-[350px] relative">
                  <Image
                    src="/assets/daily-chores-1.png"
                    alt="daily-chores"
                    fill={true}
                    className="object-cover rounded-2xl"
                    loading="lazy"
                  />

                  <div className="sm:absolute relative top-[50%] sm:left-[72%] left-[50%] -translate-y-1/2 sm:h-[280px] h-[200px] sm:w-[360px] max-[350px]:w-[120px] w-[200px] px-2 rounded-2xl">
                    <Image
                      src="/assets/daily-chores-2.png"
                      alt="daily-chores"
                      fill={true}
                      className="object-contain rounded-2xl"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>

              <motion.div
                className="flex-50 sm:px-0 px-4"
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h3 className="sm:text-4xl text-3xl leading-[44px] font-bold sm:mb-[16px]  text-center min-[950px]:text-left sm:block hidden">
                  Brokerage free <br className="sm:block hidden" />{" "}
                  <span className="text-primary"> Accomodations</span>
                </h3>
                <p className="text-[#4e5253] sm:text-xl text-base sm:w-[93%] w-full sm:px-0 px-2 leading-[28px] min-[950px]:text-left text-center">
                  3YearHome offers Brokerage-Free Leads for PGs and hostels,
                  streamlining your search!
                </p>
              </motion.div>
            </div>
          </div>
        </div>

        <div className="">
          <div className="sm:px-8 px-4 sm:mx-0 mx-8 sm:my-0 my-8 sm:bg-transparent bg-white rounded-[10px] sm:shadow-none shadow-sm">
            <div className="max-w-[1156px] mx-auto sm:py-28 py-10 flex items-center gap-8 sm:flex-row flex-col">
              <h3 className="text-2xl leading-[40px] font-bold text-center sm:hidden block order-[-5]">
                Only providing{" "}
                <span className="text-primary"> verified leads </span>
                <br className="sm:block hidden" />
              </h3>
              <motion.div
                className="flex-[0_1_47%]"
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 1, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h3 className="sm:text-4xl text-3xl leading-[44px] font-bold mb-[16px] sm:text-left text-center sm:block hidden">
                  Only providing{" "}
                  <span className="text-primary"> verified leads</span>
                  <br className="sm:block hidden" />
                </h3>
                <p className="text-[#4e5253] sm:text-xl text-base sm:px-0 px-2 w-[98%] leading-[28px] sm:text-left text-center">
                  Find your ideal PGs and hostels with confidence: Verified
                  leads now available.
                </p>
              </motion.div>

              <div className="h-[440px] flex gap-6 flex-[0_1_53%] flex-row sm:order-[0] order-[-1] w-full">
                <div className="flex-50 flex flex-col gap-6">
                  <motion.div
                    className="relative flex-50"
                    initial={{ scale: 0.5, opacity: 0 }}
                    whileInView={{ scale: 1, rotate: 360, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    viewport={{ once: true }}
                  >
                    <Image
                      src="/assets/common-area-2.png"
                      alt="common-area"
                      fill={true}
                      className="object-cover rounded-2xl"
                      loading="lazy"
                    />
                  </motion.div>
                  <motion.div
                    className="relative flex-50"
                    initial={{ scale: 0.5, opacity: 0 }}
                    whileInView={{ scale: 1, rotate: -360, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    viewport={{ once: true }}
                  >
                    <Image
                      src="/assets/common-area-3.png"
                      alt="common-area"
                      fill={true}
                      className="object-cover rounded-2xl"
                      loading="lazy"
                    />
                  </motion.div>
                </div>
                <div className="relative flex-50 sm:w-full w-[200px] sm:h-full h-[300px]">
                  <Image
                    src="/assets/common-area-1.png"
                    alt="common-area"
                    fill={true}
                    className="object-cover rounded-2xl"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="sm:px-8 px-4 sm:mx-0 mx-8 sm:my-0 my-8 sm:bg-transparent bg-white rounded-[10px] sm:shadow-none shadow-sm">
            <div className="max-w-[1156px] mx-auto sm:py-28 py-12 flex items-center sm:gap-20 gap-8 sm:flex-row flex-col">
              <h3 className="text-2xl leading-[40px] font-bold text-center sm:hidden block order-[-5]">
                Numerous
                <br className="sm:block hidden" />{" "}
                <span className="text-primary">Accommodation Options</span>
              </h3>
              <div className="h-[440px] flex gap-6 flex-[0_1_53%] flex-row sm:order-[0] order-[-1] w-full">
                <div className="relative flex-50 sm:w-full w-[200px] sm:h-full h-[300px]">
                  <Image
                    src="/assets/expecting-1.png"
                    alt="expecting"
                    fill={true}
                    className="object-cover rounded-2xl"
                    loading="lazy"
                  />
                </div>

                <div className="flex-50 flex flex-col gap-6">
                  <motion.div
                    className="relative flex-50"
                    initial={{ scale: 0.5, opacity: 0 }}
                    whileInView={{ scale: 1, rotate: -360, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    viewport={{ once: true }}
                  >
                    <Image
                      src="/assets/expecting-2.png"
                      alt="expecting"
                      fill={true}
                      className="object-cover rounded-2xl"
                      loading="lazy"
                    />
                  </motion.div>
                  <motion.div
                    className="relative flex-50"
                    initial={{ scale: 0.5, opacity: 0 }}
                    whileInView={{ scale: 1, rotate: 360, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    viewport={{ once: true }}
                  >
                    <Image
                      src="/assets/expecting-3.png"
                      alt="expecting"
                      fill={true}
                      className="object-cover rounded-2xl"
                      loading="lazy"
                    />
                  </motion.div>
                </div>
              </div>

              <motion.div
                className="flex-[0_1_47%] sm:px-0 px-4"
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 1, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h3 className="sm:text-4xl text-3xl sm:text-left text-center leading-[44px] font-bold mb-[16px] sm:block hidden">
                  Numerous
                  <br className="sm:block hidden" />{" "}
                  <span className="text-primary">Accommodation Options</span>
                </h3>
                <p className="text-[#4e5253] sm:text-xl text-base sm:px-0 px-2 sm:w-[97%] w-full leading-[28px] sm:text-left text-center">
                  Find your perfect fit! Explore a wide range of options for PGs
                  and Hostels!
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <section className="sm:mb-20 mb-6">
        <div className="mb-12 overflow-hidden sm:px-0 px-6">
          <motion.h2
            className="font-semibold sm:text-[41px] text-[24px] leading-[50px] text-[#292D32] text-center mb-4"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            viewport={{ once: true }}
          >
            KNOW YOUR <span className="text-primary">UNIVERSITY</span>
          </motion.h2>
          <p className="text-[#4E5253] text-lg leading-[26px] text-center">
            Inside the university Experience. A student&apos;s journey
          </p>
        </div>

        <div className="sm:mx-28 mx-12 overflow-hidden flex">
          <div className="flex animate-marquee">
            {blogs.slice(0, 4).map((el, index) => (
              <Link href={`/blogs/${el.id}`} key={index}>
                <div className="relative sm:w-[325px] sm:h-[325px] w-[150px] h-[150px]">
                  <Image
                    key={index}
                    src={`/assets/${el.img}`}
                    alt="know your university"
                    fill={true}
                    className="object-cover"
                  />
                </div>
              </Link>
            ))}
          </div>
          <div className="flex animate-marquee">
            {blogs.slice(0, 4).map((el, index) => (
              <Link href={`/blogs/${el.id}`} key={index}>
                <div className="relative sm:w-[325px] sm:h-[325px] w-[150px] h-[150px]">
                  <Image
                    key={index}
                    src={`/assets/${el.img}`}
                    alt="know your university"
                    fill={true}
                    className="object-cover"
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="sm:p-16 p-8">
        <div className="sm:mb-20 mb-6 overflow-hidden sm:px-0 px-4">
          <motion.h2
            className="font-semibold sm:text-[41px] text-[24px] sm:leading-[50px] leading-[35px] text-[#292D32] text-center mb-4"
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            viewport={{ once: true }}
          >
            SPOTLIGHT <br className="sm:block hidden" />
            <span className="text-primary">ON US</span>
          </motion.h2>
          <p className="text-[#4E5253] sm:text-lg text-base leading-[26px] text-center">
            Our achievements and innovations highlighted in leading newspaper.
          </p>
        </div>

        <div className="overflow-hidden flex px-8 sm:mb-12">
          <div className="flex gap-[120px] animate-marquee px-[60px]">
            {highlights.map((el, index) => (
              <div
                className="relative h-[50px] w-[200px] shadow-[0_0_5px_rgba(0,0,0,0.2)]"
                key={index}
              >
                <Image src={el} alt="higlight in newspaper" fill={true} />
              </div>
            ))}
          </div>
          <div className="flex gap-[120px] animate-marquee px-[60px]">
            {highlights.map((el, index) => (
              <div
                className="relative h-[50px] w-[200px] shadow-[0_0_5px_rgba(0,0,0,0.2)]"
                key={index}
              >
                <Image src={el} alt="higlight in newspaper" fill={true} />
              </div>
            ))}
          </div>
        </div>

        {/* <div className="flex justify-center">
          <Button clickHandler={() => {}}>Read More</Button>
        </div> */}
      </section>
    </>
  );
}
