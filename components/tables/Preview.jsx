"use client"

import React, { useEffect } from "react"
import useGlobalState from "@/states/smsListPreview"

const Row = ({ name = "", message = "", phone = "" }) => {
  return (
    <tr>
      <td className="bold text-md border-b border-gray-200 bg-white px-5 py-5 italic">
        <div className="flex items-center">
          <div className="ml-3">
            <p className="whitespace-no-wrap text-gray-900">{name}</p>
          </div>
        </div>
      </td>
      <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
        <p className="whitespace-no-wrap text-gray-900">{phone}</p>
      </td>
      <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
        <p className="whitespace-no-wrap text-gray-900">{message}</p>
      </td>
    </tr>
  )
}

export default function Preview() {
  const [smsData] = useGlobalState((state) => [state.smsData])

  useEffect(() => {
    console.log(smsData )
  }, [smsData])

  return (
    <div className="mt-8 bg-gray-200 font-sans antialiased">
      <div className="container mx-auto px-4 sm:px-8">
        <div className="py-8">
          <div>
            <h2 className="text-2xl font-semibold leading-tight">Users</h2>
          </div>
          <div className="my-2 flex flex-col sm:flex-row">
            <div className="mb-1 flex flex-row sm:mb-0">
              <div className="relative">
                <select className="block h-full w-full appearance-none  border border-gray-400 bg-white py-2 px-4 pr-8 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none">
                  <option>5</option>
                  <option>10</option>
                  <option>20</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg
                    className="h-4 w-4 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
              <div className="relative">
                <select className="sm:-none block h-full  w-full  appearance-none border-t border-r border-b border-gray-400 bg-white py-2 px-4 pr-8 leading-tight text-gray-700 focus:border-l focus:border-r focus:border-gray-500 focus:bg-white focus:outline-none sm:border-r-0">
                  <option>All</option>
                  <option>Active</option>
                  <option>Inactive</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg
                    className="h-4 w-4 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="relative block">
              <span className="absolute inset-y-0 left-0 flex h-full items-center pl-2">
                <svg
                  viewBox="0 0 24 24"
                  className="h-4 w-4 fill-current text-gray-500"
                >
                  <path d="M10 4a6 6 0 100 12 6 6 0 000-12zm-8 6a8 8 0 1114.32 4.906l5.387 5.387a1 1 0 01-1.414 1.414l-5.387-5.387A8 8 0 012 10z"></path>
                </svg>
              </span>
              <input
                placeholder="Search"
                className="sm:-none block w-full   appearance-none border border-b border-gray-400 bg-white py-2 pl-8 pr-6 text-sm text-gray-700 placeholder-gray-400 focus:bg-white focus:text-gray-700 focus:placeholder-gray-600 focus:outline-none"
              />
            </div>
          </div>
          <div className="-mx-4 overflow-x-auto px-4 py-4 sm:-mx-8 sm:px-8">
            <div className="g inline-block min-w-full overflow-hidden shadow">
              <table
                className="min-w-full leading-normal"
                style={{ width: "550px" }}
              >
                <thead>
                  <tr>
                    <th className="border-b-2 border-gray-200 bg-black px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-white">
                      name
                    </th>
                    <th className="w-12 border-b-2 border-gray-200 bg-black px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-white">
                      phone
                    </th>
                    <th className="border-b-2 border-gray-200 bg-black px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-white">
                      Message
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="bold text-md border-b border-gray-200 bg-white px-5 py-5 italic">
                      <div className="flex items-center">
                        <div className="ml-3">
                          <p className="whitespace-no-wrap text-gray-900">
                            {"Moshe Mizrachi"}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                      <p className="whitespace-no-wrap text-gray-900">
                        {"123456789"}
                      </p>
                    </td>
                    <td className="w-96 border-b border-gray-200 bg-white px-5 py-5 text-sm">
                      <p className="whitespace-no-wrap text-gray-900">
                        {
                          "This is my long message, hello my honey I am really glad you are coming to my party is happening in the heaven's street be sure to come on time please notify me if you are not coming"
                        }
                      </p>
                    </td>
                  </tr>
                  {smsData.map((value) => (
                    <Row
                      key={value.name}
                      name={value.name}
                      phone={value.phone}
                      message={value.message}
                    ></Row>
                  ))}
                </tbody>
              </table>
              <div className="xs:flex-row xs:justify-between flex flex-col items-center border-t bg-white px-5 py-5          ">
                <span className="xs:text-sm text-xs text-gray-900">
                  Showing 1 to 4 of 50 Entries
                </span>
                <div className="xs:mt-0 mt-2 inline-flex">
                  <button className=" bg-black py-2 px-4 text-sm font-semibold text-white hover:bg-gray-400">
                    Prev
                  </button>
                  <button className=" bg-black py-2 px-4 text-sm font-semibold text-white hover:bg-gray-400">
                    Next
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
