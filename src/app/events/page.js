import React from "react"

import EventCard from "@/components/EventCard"
import Filter from "@/components/Filter"

const EVENTS = [
  {
    id: "1234567",
    location: { lat: 32, long: 32 },
    type: "event",
    ownerId: "1245",
    date: new Date().toISOString(),
    message: "Amit wedding party",
  },
  {
    id: "12345678",
    location: { lat: 32, long: 32 },
    type: "event",
    ownerId: "1245",
    date: new Date().toISOString(),
    message:
      "Amit wedding party sandjo sdaun uibna iub ihyhab iya biy baiuyb iyl byi",
  },
  {
    id: "12345679",
    location: { lat: 32, long: 32 },
    type: "event",
    ownerId: "1245",
    date: new Date().toISOString(),
    message: "Amit wedding party",
  },
]

export default function Events() {
  return (
    <>
      <Filter />
      <div className="mt-10 flex justify-center">
        <div className="grid grid-cols-1  gap-6 md:grid-cols-1">
          {EVENTS.map(({ id, location, message, ownerId, date, type }) => (
            <EventCard
              key={id}
              id={id}
              location={location}
              message={message}
              ownerId={ownerId}
              date={date}
              type={type}
            />
          ))}
        </div>
      </div>
    </>
  )
}
