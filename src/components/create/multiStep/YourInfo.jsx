import React, { useEffect, useState } from "react"

import FormField from "./FormField"
import SectionHeading from "./SectionHeading"

const FORM_FIELDS = [
  {
    id: 1,
    name: "name",
    label: "Event Name",
    placeholder: "Roni Wedding",
    type: "text",
  },
  {
    id: 2,
    name: "date",
    label: "Event Date",
    placeholder: "10/10/2023",
    type: "date",
  },
  // {
  //   id: 3,
  //   name: "type",
  //   label: "Event Type",
  //   placeholder: "night Event(Wedding, Bar Mitzvah etc.)",
  //   type: "dropdown",
  // },
]

const EVENT_TYPE_DROPDOWN = [
  { id: 1, value: "Night Event" },
  { id: 2, value: "Party(unsupported yet" },
]

const YourInfo = ({ event, onChangeYourInfo, isEmpty }) => {
  return (
    <div>
      <SectionHeading
        title="Personal Info"
        desc="Please provide your name, email address, and phone number."
      />
      <form>
        <div className="flex flex-col space-y-6 text-[14px]">
          {FORM_FIELDS.map((formField) => (
            <FormField
              onChangeYourInfo={onChangeYourInfo}
              key={formField.id}
              name={formField.name}
              label={formField.label}
              placeholder={formField.placeholder}
              value={event[formField.name]}
              isEmpty={isEmpty}
              type={formField.type}
            />
          ))}
          <div>
            <label>Event Type</label>
            <select
              name="type"
              value={event.type}
              onChange={onChangeYourInfo}
              className="className={`p-2 ${redBorder} focus:ring-[#bfe2fd]`} mt-1 w-full rounded-full rounded-lg border p-2 pl-3 text-[15px] font-medium text-[#02295a] hover:border-[#02295a] focus:border-white"
            >
              <option value={"Event"}>Night Event</option>
              <option value={"party"}>Party (unsupported yet)</option>
            </select>
          </div>
        </div>
      </form>
    </div>
  )
}

export default YourInfo
