import Link from "next/link";
import Image from "next/image";

import { footerLinks, footerSocialLinks } from "@/constants";

const Footer = () => {
  return (
    <footer className="bg-[#232728] py-12 min-[950px]:px-28 px-10">
      <div className="flex mb-14 sm:flex-row flex-col sm:gap-4 gap-10">
        <div className="text-white sm:mr-auto">
          <Image
            src="/assets/3yearhome logo.PNG"
            alt="logo"
            width={100}
            height={100}
          />
        </div>
        <div className="text-white text-sm flex-[0_1_40%] flex flex-wrap">
          {footerLinks.map((el, index) => (
            <div className="w-1/2 mb-6 sm:text-left" key={index}>
              <Link href={el.path}>{el.text}</Link>
            </div>
          ))}
        </div>

        <div className="flex justify-end flex-col gap-8">
          <div className="flex items-start gap-8 min-[950px]:ml-44">
            {footerSocialLinks.map((el, index) => (
              <a href={el.path} key={index} target="_blank">
                <Image
                  src={el.img}
                  alt="social link icon"
                  width={24}
                  height={24}
                />
              </a>
            ))}
          </div>

          <div className="flex flex-col sm:items-end items-start gap-4">
            <div className="flex gap-2 items-center text-white text-xs text-right">
              <Image
                src="/assets/location.svg"
                alt="location"
                width={30}
                height={30}
              />
              <p>
                1/15 Block Near PNP Bank, <br /> Tilak Nagar, New Delhi--18
              </p>
            </div>
            <div className="flex gap-2 items-center text-white text-xs text-right">
              <Image src="/assets/call.svg" alt="call" width={30} height={30} />
              <div>
                <a href="tel:9267979239">9267979239</a>,{" "}
                <a href="tel:8178194015">8178194015</a>
              </div>
            </div>
            <div className="flex gap-2 items-center text-white text-xs text-right">
              <Image
                src="/assets/email.svg"
                alt="email"
                width={30}
                height={30}
              />
              <p>info@3yearhome.com</p>
            </div>
          </div>
        </div>
      </div>

      <div className="text-[#A5A9A9] text-[11px] leading-[18px] flex justify-between sm:flex-row flex-col sm:gap-4 gap-8">
        <p className="sm:text-left text-center">
          Copyright © 2022 | All Rights Reserved by Yaadgar Safar | Sitemap
        </p>
        <p className="sm:w-[410px] sm:text-right text-center ">
          Images shown are for representational purposes only. Amenities
          depicted may or may not form a part of that individual property.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
