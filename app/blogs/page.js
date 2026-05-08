import Image from "next/image";
import Link from "next/link";

import { blogs } from "@/constants";

export default function Page() {
  return (
    <section className="mb-10">
      <div className="max-w-[900px] min-[950px]:mx-auto mx-8">
        <div className="flex sm:flex-row flex-wrap gap-12 justify-center">
          {blogs.map((el, index) => (
            <Link
              href={`/blogs/${el.id}`}
              key={index}
              className="flex-[0_0_350px]"
            >
              <div className="p-4 bg-white rounded-[10px] h-full shadow-md  mb-6">
                <figure>
                  <div className="relative h-[230px] flex-1 mb-4 rounded-[10px] overflow-hidden">
                    <Image src={`/assets/${el.img}`} alt="blog" fill={true} />
                  </div>

                  <h2 className="text-primary sm:text-3xl text-2xl font-medium mb-4">
                    {el.title}
                  </h2>
                  <p className="text-[#4e5253] sm:text-lg text-base">
                    {el.desc1}
                  </p>
                </figure>
              </div>
            </Link>
          ))}
        </div>

        {/* <div className="flex mt-8 justify-center">
          <div className="flex gap-4">
            <button className="border w-[40px] h-[40px] flex justify-center items-center border-primary rounded-[10px]">
              <Image
                src="/assets/paginate-backwards.svg"
                alt="paginate"
                width={20}
                height={20}
              />
            </button>
            <button className="w-[40px] h-[40px] flex justify-center items-center text-white rounded-[10px] bg-primary border border-primary">
              1
            </button>
            <button className="w-[40px] h-[40px] flex justify-center items-center text-black rounded-[10px] border border-primary">
              2
            </button>
            <button className="w-[40px] h-[40px] flex justify-center items-center text-black rounded-[10px] border border-primary">
              3
            </button>
            <button className="border w-[40px] h-[40px] flex justify-center items-center border-primary rounded-[10px]">
              <Image
                src="/assets/paginate-forwards.svg"
                alt="paginate"
                width={20}
                height={20}
              />
            </button>
          </div>
        </div> */}
      </div>
    </section>
  );
}
