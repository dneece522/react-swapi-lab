import { useState, useEffect } from "react"
import { getDetails } from "../../services/sw-api"
import { useLocation } from "react-router-dom"
import { Link } from "react-router-dom"

const StarshipDetails = () => {
  const [starshipDetails, setStarshipDetails] = useState({})
  const location = useLocation()

  useEffect(() => {
    const fetchDetails = async () => {
      const starshipData = await getDetails(location.state.starship.url)
      setStarshipDetails(starshipData)
    }
    fetchDetails()
  }, [location.state.starship.url])

  return (
    < >
      <h2>Starship Details</h2>
      <h3>NAME: {starshipDetails.name}</h3>
      <h3>MODEL: {starshipDetails.model}</h3>
      <Link to="/starship-list"><button>Return</button></Link>
    </>
  )
}

export default StarshipDetails