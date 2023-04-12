import React from "react"
import Image from "next/image"
import Link from "next/link"

export default function Pick() {
  return (
    <>
      <div className="m-10 mt-28 justify-center md:flex ">
        <Link
          href="session/sms"
          className="group relative mb-8 block h-80 p-2 shadow-2xl md:m-8 md:p-0 lg:h-96"
        >
          <span className="absolute inset-0 border-2 border-dashed border-black p-2"></span>

          <div className="h-full transform border-2 border-black bg-white md:relative md:flex md:transition-transform md:group-hover:-translate-x-2 md:group-hover:-translate-y-2">
            <div className="mt-2 p-4 !pt-0 md:w-52 md:p-6 md:transition-opacity md:group-hover:absolute md:group-hover:opacity-0 lg:w-72 lg:p-8">
              <h2 className="mt-8 hidden text-center font-mono text-2xl font-medium md:block">
                SEND SMS
              </h2>
              <div className="text-center">
                <Image
                  alt="sms-icon"
                  width={70}
                  height={70}
                  className="mx-auto mt-8" // add this class to center the image horizontally
                  src="/sms-icon.png"
                />
              </div>
            </div>

            <div className="relative p-4 group-hover:relative sm:p-6 md:absolute md:opacity-0 md:group-hover:opacity-100 lg:p-8">
              <h2 className="text-center font-serif text-2xl font-bold sm:text-2xl">
                SMS
              </h2>

              <p className="mt-4 text-center text-sm sm:text-base">
                Here you can send SMS's invitations faster than ever.
              </p>
            </div>
          </div>
        </Link>
        <Link
          href="session/sms"
          className="group relative mb-8 block h-80 p-2 shadow-2xl md:m-8 md:p-0 lg:h-96"
        >
          <span className="absolute inset-0 border-2 border-dashed border-black p-2"></span>

          <div className="h-full transform border-2 border-black bg-white md:relative md:flex md:transition-transform md:group-hover:-translate-x-2 md:group-hover:-translate-y-2">
            <div className="mt-2 p-4 !pt-0 md:w-52 md:p-6 md:transition-opacity md:group-hover:absolute md:group-hover:opacity-0 lg:w-72 lg:p-8">
              <h2 className="mt-8 hidden text-center font-mono text-2xl font-medium md:block">
                SEND SMS
              </h2>
              <div className="text-center">
                <Image
                  alt="sms-icon"
                  width={70}
                  height={70}
                  className="mx-auto mt-8" // add this class to center the image horizontally
                  src="/sms-icon.png"
                />
              </div>
            </div>

            <div className="relative p-4 group-hover:relative sm:p-6 md:absolute md:opacity-0 md:group-hover:opacity-100 lg:p-8">
              <h2 className="text-center font-serif text-2xl font-bold sm:text-2xl">
                SMS
              </h2>

              <p className="mt-4 text-center text-sm sm:text-base">
                Here you can send SMS's invitations faster than ever.
              </p>
            </div>
          </div>
        </Link>

        <Link
          href="session/sms"
          className="group relative mb-8 block h-80 p-2 shadow-2xl md:m-8 md:p-0 lg:h-96"
        >
          <span className="absolute inset-0 border-2 border-dashed border-black p-2"></span>

          <div className="h-full transform border-2 border-black bg-white md:relative md:flex md:transition-transform md:group-hover:-translate-x-2 md:group-hover:-translate-y-2">
            <div className="mt-2 p-4 !pt-0 md:w-52 md:p-6 md:transition-opacity md:group-hover:absolute md:group-hover:opacity-0 lg:w-72 lg:p-8">
              <h2 className="mt-8 hidden text-center font-mono text-2xl font-medium md:block">
                SEND SMS
              </h2>
              <div className="text-center">
                <Image
                  alt="sms-icon"
                  width={70}
                  height={70}
                  className="mx-auto mt-8" // add this class to center the image horizontally
                  src="/sms-icon.png"
                />
              </div>
            </div>

            <div className="relative p-4 group-hover:relative sm:p-6 md:absolute md:opacity-0 md:group-hover:opacity-100 lg:p-8">
              <h2 className="text-center font-serif text-2xl font-bold sm:text-2xl">
                SMS
              </h2>

              <p className="mt-4 text-center text-sm sm:text-base">
                Here you can send SMS's invitations faster than ever.
              </p>
            </div>
          </div>
        </Link>
      </div>
    </>
  )
}
