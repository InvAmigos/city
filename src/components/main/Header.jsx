"use client"

import React, { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { Transition } from "@headlessui/react"

import Avatar from "./Avatar"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolledUp, setScrolledUp] = useState(true)
  const prevScrollY = useRef(0)

  useEffect(() => {
    function handleScroll() {
      const currentScrollY = window.scrollY
      if (currentScrollY < prevScrollY.current) {
        setScrolledUp(true)
      } else {
        setScrolledUp(false)
      }
      prevScrollY.current = currentScrollY
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const headerClass = `top-0 z-10 mx-auto w-full bg-black shadow-2xl fixed transform ${
    scrolledUp ? "" : "-translate-y-full"
  }`

  return (
    <div>
      <nav className={headerClass}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <Avatar className="my-auto" />
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <Link
                    href="/events"
                    className="my-auto  px-3 py-2 font-medium text-white hover:bg-gray-700 hover:text-white"
                  >
                    Events
                  </Link>

                  <Link
                    href="#"
                    className="my-auto  px-3 py-2 font-medium text-white hover:bg-gray-700 hover:text-white"
                  >
                    Create
                  </Link>

                  <a
                    href="#"
                    className="my-auto  px-3 py-2 font-medium text-white hover:bg-gray-700 hover:text-white"
                  >
                    Projects
                  </a>
                  {/* <a
                    href="#"
                    className="hover:bg-gray-700 text-white hover:text-white px-3 py-2  font-medium font-medium"
                  >
                    Calendar
                  </a>

                  <a
                    href="#"
                    className="hover:bg-gray-700 text-white hover:text-white px-3 py-2  font-medium font-medium"
                  >
                    Reports
                  </a> */}
                </div>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="inline-flex items-center justify-center bg-white p-2 text-black  transition duration-300 hover:scale-110  "
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(node) => (
            <div className="md:hidden" id="mobile-menu">
              <div ref={node} className="space-y-1 px-2 pt-2 pb-3 sm:px-3">
                <a
                  href="#"
                  className="block  px-3 py-2 text-base font-medium text-white hover:bg-gray-700 hover:text-white"
                >
                  stroke-miterlimit Create
                </a>

                <a
                  href="#"
                  className="block  px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                >
                  Team
                </a>

                <a
                  href="#"
                  className="block  px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                >
                  Projects
                </a>

                <a
                  href="#"
                  className="block  px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                >
                  Calendar
                </a>

                <a
                  href="#"
                  className="block  px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                >
                  Reports
                </a>
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>
  )
}
