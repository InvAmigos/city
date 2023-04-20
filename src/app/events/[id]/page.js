import Link from "next/link"
import React from "react"

export default function Event() {
  return (
    <>
    <Link href={"events/{id}/session"}>send invitations</Link>
      <div>
        This is a simple event Here the user will see a beautiful dashboard
      </div>
    </>
  )
}
