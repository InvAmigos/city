import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="pt-24">
      <div className="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">
        <div className="flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left">
          <p className="uppercase tracking-loose w-full">
            hello people
          </p>
          <h1 className="my-4 text-5xl font-bold leading-tight">
            Connect Invite Share Organize let's go Party D:
          </h1>
          <p className="leading-normal text-2xl mb-8">
            Most efficient party organizer ever made 100% free*
          </p>
          <Link className="mx-auto lg:mx-0 bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
            href="/session"> TRY
          </Link >
        </div>
        <div className="w-full md:w-3/5 py-6 text-center">
          <Image alt="hero image" width={1000} height={1000} className="w-full md:w-4/5 z-50" src="/hero.png" />
        </div>
      </div>
    </div>
  )
}
