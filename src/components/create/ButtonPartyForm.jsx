"use client"

import React, { useState } from "react"
import { useRouter } from "next/navigation"

import PartyForm from "./PartyForm"

export default function ButtonPartyForm() {
  const [showDialog, setShowDialog] = useState(false)
  //TODO use global state or something better
  const [userSignedIn, setUserSignedIn] = useState(true)
  const router = useRouter()

  const handleButtonClick = (e) => {
    if (!userSignedIn) {
      router.push("/login")
    }
    setShowDialog(true)
  }

  const handlePartyClick = (e) => {
    setShowDialog(!showDialog)
  }

  const tryButton = (addattr) => {
    return (
      <button
        className={`${addattr} mx-auto my-6 transform bg-black py-4 px-8 font-bold text-white shadow-2xl transition duration-300 ease-in-out hover:scale-105 focus:outline-none lg:mx-0`}
        onClick={handleButtonClick}
      >
        {" "}
        TRY
      </button>
    )
  }

  return (
    <>
      {showDialog && userSignedIn && (
        <div>
          <div className="fixed top-0 left-0 z-50 h-full w-full bg-gray-500 opacity-50"></div>
          <div className="fixed top-1/2 left-1/2 z-50 h-auto -translate-x-1/2 -translate-y-1/2 transform">
            <PartyForm onClick={handlePartyClick} />
          </div>
          {screen.width > 400 && tryButton()}
        </div>
      )}
      {!showDialog && tryButton()}
    </>
  )
}
