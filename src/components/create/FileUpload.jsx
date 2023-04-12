"use client"

import React, { useEffect, useState } from "react"
import useGlobalState from "@/states/invitationsTable"
import Papa from "papaparse"

export default function FileUploader() {
  const [selectedFile, setSelectedFile] = useState(null)
  const [updateSmsData] = useGlobalState((state) => [state.updateSmsData])

  const parseFile = (file) => {
    console.log(file.type)
    const reader = new FileReader()
    reader.onload = (event) => {
      const fileContents = event.target.result
      const parsedData = Papa.parse(fileContents, { header: true })
      const rows = parsedData.data
      updateSmsData(rows)
    }
    reader.readAsText(file)
  }

  const handleFileChange = (event) => {
    const file = event.target.files[0]
    setSelectedFile(file)
    parseFile(file)
  }

  return (
    <div>
      <label htmlFor="file-input" className="sr-only">
        Choose file
      </label>
      <input
        onChange={handleFileChange}
        type="file"
        name="file-input"
        className="block w-full rounded-md border border-gray-200 text-sm shadow-sm file:mr-4 file:border-0 file:bg-transparent file:bg-gray-100 file:py-3 file:px-4"
      />
    </div>
  )
}
