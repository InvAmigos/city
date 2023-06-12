import React, { useEffect, useState } from "react"
import Image from "next/image"

const PlanOption = ({
  id,
  logo,
  title,
  price,
  onPlanSelect,
  selected,
  planDuration,
}) => {
  const [bg, changeBg] = useState("")
  const [displayTwoMonths, setDisplayTwoMonths] = useState("invisible")

  useEffect(() => {
    if (planDuration == "mo") {
      setDisplayTwoMonths("invisible")
    } else {
      setDisplayTwoMonths("block")
    }

    if (selected) {
      changeBg("bg-[#f0f6ff]")
    } else {
      changeBg("")
    }
  }, [selected, planDuration])

  return (
    <div
      onClick={() => onPlanSelect(title, price, id)}
      className={`${bg} items-left flex cursor-pointer flex-row justify-start rounded-xl border border-[#d6d9e6] px-5 pt-5 pr-14 hover:border-[#473dff] focus:bg-violet-700 md:flex-col md:justify-between`}
    >
      <div className="mb-5 mr-10 md:mb-10 md:mr-0">
        <Image priority src={logo} alt="Plan Option" />
      </div>
      <div>
        <div className="font-medium text-[#02295a]">{title}</div>
        <div className="mb-3 text-[14px] text-[#9699ab]">
          ${price}/{planDuration}
        </div>
        <div
          className={`${displayTwoMonths} mb-3 -mt-2 w-[100px] text-[13px] font-medium text-[#02295a]`}
        >
          2 months free
        </div>
      </div>
    </div>
  )
}

export default PlanOption
