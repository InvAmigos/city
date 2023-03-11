"use client"

import React, { useEffect, useState } from "react"
import useGlobalState from "@/states/smsListPreview"
import Papa from "papaparse"

function FileUploader() {
  const [updateSmsData] = useGlobalState((state) => [state.updateSmsData])

  const parseFile = (file) => {
    const reader = new FileReader()
    reader.onload = (event) => {
      const fileContents = event.target.result
      const parsedData = Papa.parse(fileContents, { header: true })
      const rows = parsedData.data
      updateSmsData(rows) // update the state using the set function
    }
    reader.readAsText(file)
  }

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0]
    parseFile(selectedFile)
  }

  return (
    <div>
      <label htmlFor="file-input" className="sr-only">
        Choose file
      </label>
      <input
        type="file"
        name="file-input"
        className="block w-full rounded-md border border-gray-200 text-sm shadow-sm file:mr-4 file:border-0 file:bg-transparent file:bg-gray-100 file:py-3 file:px-4
"
      />
    </div>
  )
}

export default FileUploader
