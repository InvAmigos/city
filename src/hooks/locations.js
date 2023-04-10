import { useState } from "react"

function useLocation() {
  const [location, setLocation] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  function handleSuccess(position) {
    setLoading(false)
    setLocation({
      lat: position.coords.latitude,
      lng: position.coords.longitude,
    })
  }

  function handleError(error) {
    setLoading(false)
    setError(error.message)
  }

  function getLocation() {
    setLoading(true)
    navigator.geolocation.getCurrentPosition(handleSuccess, handleError)
  }

  return { location, loading, error, getLocation }
}

export default useLocation
