import React, { useEffect, useState } from "react"

const FormField = ({
  name,
  label,
  placeholder,
  onChangeYourInfo,
  value,
  type,
  isEmpty,
}) => {
  const [displayRequired, setDisplayRequired] = useState("hidden")
  const [redBorder, setRedBorder] = useState("border-[#d6d9e6]")

  useEffect(() => {
    if (isEmpty == true) {
      setDisplayRequired("block")
      setRedBorder("border-[#ed3548]")
    }
    // console.log(displayRequired);
    // console.log(isEmpty);
  }, [isEmpty])

  return (
    <div>
      <div className="flex items-center justify-between">
        <label>{label}</label>
        <p
          className={`${displayRequired} text-[14px] font-medium text-[#ed3548]`}
        >
          This field is required
        </p>
      </div>
      <div>
        <input
          onChange={onChangeYourInfo}
          name={name}
          className={`mt-1 w-full rounded-full rounded-lg border p-2 pl-3 font-medium ${redBorder} text-[15px] text-[#02295a] hover:border-[#02295a] focus:border-white focus:ring-[#bfe2fd]`}
          type={type}
          placeholder={placeholder}
          value={value}
        />
      </div>
    </div>
  )
}

export default FormField
