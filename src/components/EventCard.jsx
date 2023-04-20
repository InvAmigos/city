import React from "react"
import Link from "next/link"

export default function EventCard({
  id,
  location,
  message,
  ownerId,
  date,
  type,
}) {
  return (
    <>
      <Link
        href={`events/${id}`}
        className="w-full transition duration-300 ease-in-out hover:scale-105 lg:flex lg:max-w-full"
      >
        <div
          className="lg:-none h-48 flex-none  overflow-hidden bg-cover text-center lg:h-auto lg:w-48 "
          style={{ backgroundImage: "url('/hero.png')" }}
          title="Mountain"
        ></div>
        <div className="lg:-b-none lg:-r flex  flex-col justify-between border-r border-b border-l border-black bg-white p-4 leading-normal lg:border-l-0 lg:border-t lg:border-black">
          <div className="mb-8">
            <p className="flex items-center text-sm text-gray-600">
              <svg
                className="mr-2 h-3 w-3 fill-current text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
              </svg>
              Members only
            </p>
            <div className="mb-2 text-xl font-bold text-gray-900">
              Best Mountain Trails 2020
            </div>
            <p className="text-base text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, Nonea! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
          </div>
          <div className="flex items-center">
            <img
              className="-full mr-4 h-10 w-10"
              src="/ben.png"
              alt="Avatar of Writer"
            />
            <div className="text-sm">
              <p className="leading-none text-gray-900">John Smith</p>
              <p className="text-gray-600">Aug 18</p>
            </div>
          </div>
        </div>
      </Link>
    </>
  )
}
