import React, { useEffect, useState } from "react"
import {
  Document,
  PDFViewer,
  Page,
  StyleSheet,
  Text,
  View,
} from "@react-pdf/renderer"

import PlanOption from "./PlanOption"
import SectionHeading from "./SectionHeading"

const Plan = ({
  currentStep,
  onPlanSelect,
  onToggleDuration,
  planOptions,
  isPlanEmpty,
  planDuration,
}) => {
  const [errorDisplay, setErrorDisplay] = useState("invisible")
  const [check, setCheck] = useState(false)

  const [selectedFile, setSelectedFile] = useState(null)
  const [numPages, setNumPages] = useState(null)

  const handleFileUpload = (event) => {
    const file = event.target.files[0]
    console.log(file)
    setSelectedFile(file)
  }

  const onDocumentLoadSuccess = (obj) => {
    console.log(obj)
    // setNumPages(numPages)
  }

  useEffect(() => {
    if (isPlanEmpty) {
      setErrorDisplay("block")
    } else {
      setErrorDisplay("invisible")
    }

    if (planDuration == "mo") {
      setCheck(false)
    } else {
      setCheck(true)
    }
  }, [isPlanEmpty, planDuration])

  return (
    <div>
      {/* <SectionHeading
        title="Select your plan"
        desc="You have the option of monthly or yearly billing."
      /> */}
      {/* <div className="bg-grey-lighter flex h-screen w-full items-center justify-center"> */}
      <label className="text-blue border-blue hover:bg-blue flex w-64 cursor-pointer flex-col items-center rounded-lg border bg-white px-4 py-6 uppercase tracking-wide shadow-lg ">
        <svg
          className="h-8 w-8"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
        </svg>
        <span className="mt-2 text-base leading-normal">
          UPLOAD INVITATION PDF
        </span>
        <input
          accept=".pdf"
          type="file"
          className="hidden"
          onChange={handleFileUpload}
        />
      </label>
      {/* <PDFViewer>
      <Document
        file={selectedFile}
        onLoadSuccess={onDocumentLoadSuccess}
        onLoadError={console.error}
      >
      </Document>
      </PDFViewer> */}
      {/* </div> */}
      {/* <div className="grid gap-4 md:grid-cols-3 md:grid-rows-1">
        {planOptions.map((planOption) => (
          <PlanOption
            onPlanSelect={onPlanSelect}
            key={planOption.id}
            id={planOption.id}
            logo={planOption.logo}
            title={planOption.title}
            price={planOption.price}
            selected={planOption.selected}
            planDuration={planDuration}
          />
        ))}
      </div>

      <div
        className={`${errorDisplay} mt-5 text-center font-medium text-[#ed3548]`}
      >
        Please select a plan!
      </div>
      <div className="mt-8 rounded-xl bg-[#fafbff] p-2 font-medium text-[#02295a]">
        <div className="flex items-center justify-center space-x-5 text-[14px]">
          <div>Monthly</div>
          <div className="scale-75">
            <label className="relative inline-flex cursor-pointer items-center">
              <input
                onChange={onToggleDuration}
                type="checkbox"
                value=""
                className="peer sr-only"
                checked={check}
              />
              <div className="peer h-6 w-11 rounded-full border-2 border-black bg-gray-200 after:absolute after:top-[2px] after:left-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-gray-800 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none dark:border-gray-600 dark:bg-gray-800"></div>
            </label>
          </div>
          <div>Yearly</div>
        </div>
      </div> */}
    </div>
  )
}

export default Plan
