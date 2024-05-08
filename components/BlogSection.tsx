/* eslint-disable @next/next/no-img-element */
import blogData from "@/data/blogData";
import React from "react";

const BlogSection = () => {
  return (
    <section className="relative  pt-[5.5rem] lg:pt-24 flex items-center justify-center px-4">
      <div className="pb-16 md:py-24">
        <h1 className="text-6xl lg:text-7xl text-gray-900 font-bold p-8 text-center">
          Blog
        </h1>
        <picture className="pointer-events-none absolute top-12 -z-10 ">
          <img
            alt="background"
            className="h-full object-cover w-full"
            src=" /assets/net-bg-header.svg"
          />
        </picture>
        <div className="container">
          <article className="mb-[1.875rem] md:mb-16">
            <div className="rounded-2xl border-2 border-gray-800 flex flex-col overflow-hidden transition-shadow hover:shadow-lg md:flex-row">
              <figure className="group overflow-hidden md:w-1/2">
                <a href="/single_post/post_1">
                  <img
                    alt="post 1"
                    src="/assets/post-image-1.png"
                    className="h-full w-full  transition-transform duration-[1600ms] will-change-transform group-hover:scale-105"
                  />
                </a>
              </figure>
              <div className="rounded-b-[1.25rem]  bg-white p-[6%] md:w-1/2 md:rounded-none md:rounded-r-[1.25rem]">
                <div className="mb-3 flex flex-wrap items-center space-x-1 text-sm">
                  <p className=" text-gray-700  hover:text-accent">
                    Wednesday 17 August, 2022
                  </p>
                </div>
                <h2 className="font-bold text-gray-800 hover:text-gray-900 mb-4 text-2xl sm:text-4xl lg:text-5xl">
                  <a href="/single_post/post_1">
                    Using Riverside.fm With Cal.com
                  </a>
                </h2>
                <p className=" mb-8 text-gray-500">
                  How Cal.com can be used with Riverside.fm to create and host
                  podcasts wherever you are.
                </p>

                <div className="flex items-center gap-3">
                  <img
                    className="w-10 h-10 rounded-full"
                    src="/assets/user-avatar.png"
                    alt="user"
                  />
                  <div className="font-medium dark:text-white">
                    <div>Assantewa Heubi</div>
                  </div>
                </div>
              </div>
            </div>
          </article>
          <h1 className="text-4xl lg:text-5xl text-gray-900 font-bold py-8 text-left mt-10">
            More Stories
          </h1>
          <div className="grid grid-cols-1 gap-[1.875rem] sm:grid-cols-2">
            {blogData.map(
              (
                {
                  title,
                  description,
                  date,
                  blogImageUrl,
                  authorAvatarUrl,
                  authorName,
                },
                index
              ) => (
                <article key={index}>
                  <div className="rounded-2xl overflow-hidden transition-shadow hover:shadow-lg">
                    <figure className="group overflow-hidden ">
                      <a href="/single_post/post_1">
                        <img
                          alt="Mint your own Tezos collections"
                          width={370}
                          height={214}
                          className="h-full w-full object-cover transition-transform duration-[1600ms] will-change-transform group-hover:scale-105 "
                          src={blogImageUrl}
                        />
                      </a>
                    </figure>
                    <div className="  border-gray-100 rounded-b-[1.25rem] border border-t-0 bg-white p-[10%]">
                      <div className="mb-3 flex flex-wrap items-center space-x-1 text-sm">
                        <p className=" text-gray-700  hover:text-accent">
                          {date}
                        </p>
                      </div>
                      <h2 className="font-bold text-gray-800 hover:text-gray-900 mb-4 text-2xl sm:text-3xl ">
                        <a href="/single_post/post_1">{title}</a>
                      </h2>
                      <p className=" mb-8 text-gray-500">{description}</p>

                      <div className="flex items-center gap-3">
                        <img
                          className="w-10 h-10 rounded-full"
                          src={authorAvatarUrl}
                          alt="user"
                        />
                        <div className="font-medium dark:text-white">
                          <div>{authorName}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
