"use client"

import { useState } from "react"
import Image from "next/image"
import { useForm } from "react-hook-form"
import Form from "./multiStep/Form"

const EventForm = ({ onClick }) => {
  const [useCurrentLocation, setUseCurrentLocation] = useState(false)

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    console.log("Here we validate")
    console.log(data)
  }

  return (
    <>
    <Form />
    {/* <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex h-auto w-80 bg-gray-100 md:min-w-max">
        <div
          className="m-auto"
          style={{
            boxShadow: "rgba(0, 0, 0, 0.56) 0px 22px 70px 4px",
          }}
        >
          <div>
            <div className=" bg-white shadow">
              <div className="flex">
                <Image
                  alt="sms-icon"
                  width={80}
                  height={80}
                  className=""
                  src="/partyIconBW.png"
                />
                <div className="flex overflow-hidden py-8 ">
                  <h1 className="inline text-2xl font-semibold leading-none">
                    Party
                  </h1>
                </div>
              </div>
              <div className="px-5 pb-5">
                <input
                  {...register("name", { required: true, maxLength: 20 })}
                  placeholder="Name"
                  className="focus:shadow-outline  mt-2 w-full transform border-transparent bg-gray-300  px-4   py-2.5 font-mono text-base text-black placeholder-gray-600 ring-black ring-offset-1  transition duration-500 ease-in-out  focus:bg-white focus:outline-none focus:ring-2 "
                />
                {errors.name?.type === "required" && (
                  <span className="m-1 block italic text-red-600 sm:inline">
                    Party name is required
                  </span>
                )}
                <div className="m-1">
                  <label className="bg-white ">
                    <input
                      type="checkbox"
                      onChange={() => {
                        setUseCurrentLocation(!useCurrentLocation)
                      }}
                      className="mr-2 h-4 w-4  appearance-none border-none bg-gray-300 p-1 text-black  shadow-lg checked:bg-black  focus:ring-transparent "
                    />
                    Use current location
                  </label>
                </div>

                {useCurrentLocation ? (
                  <input
                    disabled
                    placeholder="Address"
                    className="focus:shadow-outline mt-2 w-full transform border-transparent bg-gray-300 px-4 py-2.5 font-mono text-base text-black placeholder-gray-600 ring-gray-400 ring-offset-2 ring-offset-current transition duration-500 ease-in-out focus:border-black focus:bg-white focus:outline-none focus:ring-2 disabled:opacity-25 dark:focus:bg-gray-800"
                  />
                ) : (
                  <input
                    {...register("address")}
                    placeholder="Address"
                    className="focus:shadow-outline  mt-2 w-full transform border-transparent bg-gray-300  px-4   py-2.5 font-mono text-base text-black placeholder-gray-600 ring-black ring-offset-1  transition duration-500 ease-in-out  focus:bg-white focus:outline-none focus:ring-2 "
                  />
                )}
              </div>
              <div className="flex">
                <div className="flex-1 overflow-hidden py-5 pl-5">
                  <h1 className="inline text-2xl font-semibold leading-none">
                    Additionals*
                  </h1>
                </div>
                <div className="flex-none pt-2.5 pr-2.5 pl-1"></div>
              </div>
              <div className="px-5 pb-5">
                <div className="flex">
                  <div className="w-1/4 flex-grow pr-2">
                    <input
                      placeholder="PLZ"
                      className=" focus:shadow-outline mt-2 w-full transform border-transparent bg-gray-300  px-4   py-2.5 font-mono text-base text-black placeholder-gray-600 ring-gray-400 ring-offset-2  ring-offset-current transition duration-500 ease-in-out focus:border-black focus:bg-white focus:outline-none focus:ring-2 dark:focus:bg-gray-800"
                    />
                  </div>
                  <div className="flex-grow">
                    <input
                      placeholder="City"
                      className=" focus:shadow-outline mt-2 w-full transform border-transparent bg-gray-300  px-4   py-2.5 font-mono text-base text-black placeholder-gray-600 ring-gray-400 ring-offset-2  ring-offset-current transition duration-500 ease-in-out focus:border-black focus:bg-white focus:outline-none focus:ring-2 dark:focus:bg-gray-800"
                    />
                  </div>
                </div>
              </div>
              <hr className="mt-4" />
              <div className="flex flex-row-reverse p-3">
                <div className="flex-initial pl-3">
                  <button
                    type="submit"
                    className="flex transform items-center  bg-black px-5 py-2.5 font-medium   capitalize tracking-wide text-white  transition duration-300  ease-in-out hover:bg-gray-800 focus:bg-gray-900 focus:outline-none active:scale-95"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="24px"
                      viewBox="0 0 24 24"
                      width="24px"
                      fill="#FFFFFF"
                    >
                      <path d="M0 0h24v24H0V0z" fill="none"></path>
                      <path
                        d="M5 5v14h14V7.83L16.17 5H5zm7 13c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-8H6V6h9v4z"
                        opacity=".3"
                      ></path>
                      <path d="M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm2 16H5V5h11.17L19 7.83V19zm-7-7c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zM6 6h9v4H6z"></path>
                    </svg>
                    <span className="mx-1 pl-2">Create</span>
                  </button>
                </div>
                <div className="flex-initial">
                  <button
                    onClick={onClick}
                    type="button"
                    className="flex transform items-center  px-5 py-2.5 font-medium capitalize tracking-wide  text-black transition duration-300  ease-in-out  hover:bg-red-200 hover:fill-current hover:text-red-600 focus:outline-none active:scale-95"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="24px"
                      viewBox="0 0 24 24"
                      width="24px"
                    >
                      <path d="M0 0h24v24H0V0z" fill="none"></path>
                      <path d="M8 9h8v10H8z" opacity=".3"></path>
                      <path d="M15.5 4l-1-1h-5l-1 1H5v2h14V4zM6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9z"></path>
                    </svg>
                    <span className="mx-1 pl-2">Cancel</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form> */}
    </>
  )
}

export default EventForm
