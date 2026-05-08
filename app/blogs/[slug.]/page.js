import Image from "next/image";

import { blogs } from "@/constants";
import Link from "next/link";

export default function Page({ params }) {
  const id = params["slug."];
  const blog = blogs.find((el) => el.id === id);

  return (
    <>
      <section className="mb-8">
        <div className="max-w-[1000px] min-[950px]:mx-auto mx-8">
          <h1 className="bg-gradient-to-r from-[#c9f007] to-[#0E9894] bg-clip-text text-transparent min-[950px]:text-4xl text-2xl font-medium mb-4 text-center">
            {blog.title}
          </h1>

          <div className="relative w-full sm:h-[400px] h-[200px] rounded-[10px] mb-4 overflow-hidden">
            <Image
              src={`/assets/${blog.img}`}
              alt="blog"
              fill={true}
              className="object-cover"
            />
          </div>

          <p className="text-[#4e5253] sm:text-lg text-base mb-8 bg-white p-4">
            {blog.desc1} <br /> <br />
            {blog.desc2}
          </p>

          <h2 className="bg-gradient-to-r from-[#c9f007] to-[#0E9894] bg-clip-text text-transparent min-[950px]:text-4xl text-2xl font-medium mb-6">
            {blog.feature}
          </h2>

          <p className="text-[#4e5253] sm:text-lg text-base mb-8 bg-white p-4">
            {blog.desc3}
          </p>

          <div className="p-6 text-[#4e5253] border-l-[6px] italic border-primary bg-[rgba(0,0,0,0.1)] mb-8">
            {blog.desc4}
          </div>

          <p className="text-[#4e5253] sm:text-lg text-base mb-8  bg-white p-4">
            {blog.desc5}
          </p>
        </div>
      </section>

      <aside className="mb-8">
        <div className="max-w-[1000px] min-[950px]:mx-auto mx-8">
          <h2 className="bg-gradient-to-r from-[#c9f007] to-[#0E9894] bg-clip-text text-transparent min-[950px]:text-4xl text-2xl font-medium mb-4 text-center">
            Similar Blogs
          </h2>
          <div className="flex sm:flex-row flex-col gap-8 justify-between">
            {blogs.slice(0, 3).map((el, i) => (
              <div
                className="sm:p-0 p-4 sm:bg-transparent bg-white rounded-[10px] sm:shadow-none shadow-md sm:mb-0 mb-6 flex-[1]"
                key={i}
              >
                <Link href={`/blogs/${el.id}`}>
                  <figure className="">
                    <div className="relative h-[200px] flex-1 mb-4 rounded-[10px] overflow-hidden">
                      <Image src={`/assets/${el.img}`} alt="blog" fill={true} />
                    </div>

                    <h3 className="bg-gradient-to-r from-[#c9f007] to-[#0E9894] bg-clip-text text-transparent min-[950px]:text-2xl text-lg  font-medium mb-4">
                      {el.title}
                    </h3>
                  </figure>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </aside>
    </>
  );
}
