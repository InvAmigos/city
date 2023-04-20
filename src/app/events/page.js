import React from "react"

import EventCard from "@/components/EventCard"

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
    message: "Amit wedding party sandjo sdaun uibna iub ihyhab iya biy baiuyb iyl byi",
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
      {/* <h1 className="text-2xl">Here we put all our events</h1>
      <h3 className="text-xl">My events card list</h3>
      <h3 className="text-xl">Friends events card list</h3> */}
      <div className="flex justify-center mt-10">
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
