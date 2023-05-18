"use client"

import React from "react"

export default function Header({ name = "David Wedding party" }) {
  return <h1 className="font-kalam mt-4 text-center text-2xl">{`${name}`}</h1>
}
