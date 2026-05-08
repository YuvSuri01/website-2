import Image from "next/image";

const Page = () => {
  return (
    <>
      <section className="sm:mb-28">
        <h1 className="sm:text-5xl text-3xl font-bold sm:leading-[70px] max-[450px]:text-2xl leading-[50px] text-center text-center mb-4 text-primary">
          Our Team
        </h1>
        <div className="max-w-[1256px] sm:mx-auto mx-8">
          <div className="relative w-full sm:h-[400px] h-[180px] rounded-[10px] overflow-hidden">
            <Image
              src="/assets/about-3.png"
              alt="about"
              fill={true}
              className="sm:object-cover object-contain"
            />
          </div>
        </div>
      </section>

      <section className="mb-28">
        <div className="max-w-[1256px] mx-auto pt-8 mb-20">
          <div className="flex sm:gap-12 gap-4 items-center sm:bg-transparent bg-white rounded-[10px] sm:p-0 p-6 sm:flex-row flex-col mx-8 sm:shadow-none shadow-md">
            <h2 className="sm:text-4xl text-primary text-2xl font-bold sm:leading-[45px] leading-[30px] text-center sm:text-left mb-6 sm:hidden block order-[-5]">
              About Us
            </h2>
            <div className="flex-50">
              <h2 className="sm:text-4xl text-primary text-3xl font-bold sm:leading-[45px] leading-[30px] text-center sm:text-left mb-6 sm:block hidden">
                About Us
              </h2>

              <p className="text-[#4e5253] sm:text-xl text-base sm:w-[93%] w-full sm:px-0 px-2 leading-[28px] sm:text-left text-center">
                Three Year Home is an initiative started in the year 2018. It is
                a subunit of Yaadgar Safar. Yaadgar Safar is a leading travel
                company located in Delhi. Since 2016, it has been specializing
                in organizing college trips, school trips, corporate trips, and
                personal trips. <br /> <br /> Three Year Home is a separate
                entity, that works under Yaadgar Safar. With a team of more than
                30 members, we aim at helping the students in finding a good
                accommodation at a much reasonable price by providing them with
                verified leads for the same.
              </p>
            </div>
            <div className="relative sm:flex-50 sm:h-[400px] h-[300px] w-full rounded-[20px] overflow-hidden sm:order-[0] order-[-1]">
              <Image
                src="/assets/about-1.png"
                alt="about"
                fill={true}
                className="object-cover"
              />
            </div>
          </div>
        </div>

        <div className="max-w-[1256px] mx-auto pt-8">
          <div className="flex sm:gap-12 gap-4 items-center sm:bg-transparent bg-white rounded-[10px] sm:p-0 p-6 sm:flex-row flex-col mx-8 sm:shadow-none shadow-md">
            <h2 className="sm:text-4xl text-primary text-2xl font-bold sm:leading-[45px] leading-[30px] text-center sm:text-left mb-6 sm:hidden block order-[-5]">
              Vision
            </h2>
            <div className="relative sm:flex-50 sm:h-[400px] h-[300px] w-full rounded-[20px] overflow-hidden">
              <Image
                src="/assets/about-2.png"
                alt="about"
                fill={true}
                className="object-cover"
              />
            </div>
            <div className="flex-50 sm:pl-12">
              <h2 className="sm:text-4xl text-primary text-3xl font-bold leading-[45px] text-center sm:text-left mb-6 sm:block hidden">
                Vision
              </h2>

              <p className="text-[#4e5253] sm:text-xl text-base sm:w-[93%] w-full sm:px-0 px-2 leading-[28px] sm:text-left text-center">
                Started in the year 2018, Three Year Home is a government
                registered startup aimed at making the tedious task of finding
                an accommodation in Delhi, a much easier and economical process
                for the students. <br /> <br /> We aim at providing the best,
                verified PGs to the students, while completely eliminating the
                much expensive brokerage demanded in the market. Everything that
                we do is fully backed by legal agreements, to protect the
                students from any sorts of exploitation by the PGs.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="max-w-[1256px] mx-auto mb-40">
          <div className="max-w-[1256px] sm:mx-auto mx-8 p-8 mb-14 sm:bg-transparent bg-white p-4 mx-8 rounded-[10px] sm:shadow-none shadow-md">
            <h2 className="sm:text-4xl text-2xl font-bold sm:leading-[45px] leading-[30px] text-center mb-6">
              “Find Your Perfect Home Away from Home: Unlock a{" "}
              <br className="sm:block hidden" />
              <span className="text-primary">
                World of PGs and Hostels
              </span>{" "}
              with Our Premier Lead Services”
            </h2>

            <p className="text-[#4e5253] sm:text-xl text-base sm:w-[93%] w-full sm:px-0 px-2 leading-[28px] text-center sm:w-[60%] w-full mx-auto px-4">
              Connecting students to their ideal homes in Delhi University since
              2018, revolutionizing the search for PGs and hostels. <br /> Find
              Your Perfect PG or Hostel: Hassle-Free, Brokerage-Free
              Accommodation Solutions! We connect you with the finest leads for
              PGs and hostels, ensuring a hassle-free transition into your new
              home.
            </p>
          </div>

          <div className="flex justify-between items-center px-8 sm:flex-row flex-col sm:gap-2 gap-16">
            <div className="bg-white rounded-[10px] p-4 flex flex-col gap-2 items-center shadow-md">
              <p className="text-3xl font-bold text-primary">100 Beds</p>
              <p className="font-bold">In Du North Campus</p>
              <p className="text-[#777]">July 2017</p>
            </div>
            <Image
              src="/assets/about-arrow.png"
              alt="about-arrow"
              width={68}
              height={2}
              className="sm:rotate-0 rotate-90"
            />
            <div className="bg-white rounded-[10px] p-4 flex flex-col gap-2 items-center shadow-md">
              <p className="text-3xl font-bold text-primary">2000 Beds</p>
              <p className="font-bold">In Delhi NCR</p>
              <p className="text-[#777]">July 2018</p>
            </div>
            <Image
              src="/assets/about-arrow.png"
              alt="about-arrow"
              width={68}
              height={2}
              className="sm:rotate-0 rotate-90"
            />
            <div className="bg-white rounded-[10px] p-4 flex flex-col gap-2 items-center shadow-md">
              <p className="text-3xl font-bold text-primary">20k+ Beds</p>
              <p className="font-bold">Across 15 cities</p>
              <p className="text-[#777]">Present</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;
