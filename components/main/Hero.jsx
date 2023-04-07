import Image from "next/image"
import Link from "next/link"

export default function Hero() {
  return (
    <div className="pt-24">
      <div className="container mx-auto flex flex-col flex-wrap items-center px-3 md:flex-row">
        <div className="flex w-full flex-col items-start justify-center text-center md:w-2/5 md:text-left">
          <p className="tracking-loose w-full uppercase">hello people</p>
          <h1 className="my-4 text-5xl font-bold leading-tight">
            Connect Invite Share Organize let's go Party D:
          </h1>
          <p className="mb-8 text-2xl leading-normal">
            Most efficient party organizer ever made 100% free*
          </p>
          <Link
            className="focus:shadow-outline mx-auto my-6 transform bg-black  py-4 px-8 font-bold text-white shadow-2xl  transition duration-300 ease-in-out hover:scale-105 focus:outline-none lg:mx-0"
            href="/session"
          >
            {" "}
            TRY
          </Link>
        </div>
        <div className="w-full py-6 text-center md:w-3/5">
          <Image
            alt="hero image"
            width={1000}
            height={1000}
            className="z-50 w-full md:w-4/5"
            src="/hero.png"
          />
        </div>
      </div>
    </div>
  )
}
