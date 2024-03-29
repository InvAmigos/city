import Image from "next/image"
import ButtonPartyForm from "$/create/ButtonPartyForm"

export default function Hero() {
  return (
    <div className="pt-24">
      <div className="container mx-auto flex max-w-7xl flex-col flex-wrap  items-center  px-4 sm:px-6 md:flex-row lg:px-8">
        <div className="flex w-full flex-col items-start justify-center text-center md:w-2/5 md:text-left">
          <p className="tracking-loose w-full uppercase">hello people</p>
          <h1 className="my-4 text-5xl font-bold leading-tight">
            Connect Invite Share Organize let's go Party D:
          </h1>
          <p className="mb-8 text-2xl leading-normal">
            Most efficient party organizer ever made 100% free*
          </p>
          <ButtonPartyForm />
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
