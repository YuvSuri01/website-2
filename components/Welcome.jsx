import Image from "next/image";

const Welcome = () => {
  return (
    <>
      <div className="max-w-[500px] sm:mx-auto mx-8 overflow-hidden flex ">
        <p className="bg-gradient-to-r from-[#c9f007] to-[#0E9894] p-6 pb-0 text-2xl sm:text-3xl bg-clip-text text-transparent font-bold  flex-[0_0_500px] animate-marquee">
          Welcome to 3 Year Home
        </p>
        <p className="bg-gradient-to-r from-[#c9f007] to-[#0E9894]  p-6 pb-0 text-2xl sm:text-3xl bg-clip-text text-transparent font-bold  flex-[0_0_500px] animate-marquee">
          Welcome to 3 Year Home
        </p>
      </div>
      <div className="bg-[#4a4747] fixed sm:bottom-8 bottom-2 sm:right-8 right-2 rounded-full flex flex-col sm:flex-row gap-4 items-center px-2 sm:px-8 py-4 sm:py-2 z-50">
        <a
          href="https://www.instagram.com/3yearhome/?igshid=MzRlODBiNWFlZA%3D%3D"
          target="_blank"
        >
          <Image
            src="/assets/colored-instagram.svg"
            alt="instagram"
            width={35}
            height={35}
          />
        </a>
        <a
          href="https://wa.me/8178194015?text=Hello%203YearHome%2C%0AI%20wanna%20enquire%20about%20the%20PG."
          target="_blank"
        >
          <Image
            src="/assets/colored-whatsapp.svg"
            alt="instagram"
            width={35}
            height={35}
          />
        </a>
      </div>
    </>
  );
};

export default Welcome;
