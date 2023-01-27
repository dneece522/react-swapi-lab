import { useState, useEffect } from "react"
import { getDetails } from "../../services/sw-api"
import { useLocation } from "react-router-dom"
import { Link } from "react-router-dom"

const linkStyle = {
  color: "white",
  marginTop: "8px",
  marginBottom: "15px"
}

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
      <div id="detail">
        <div className="details">
          <p>NAME: {starshipDetails.name}</p>
          <p>MODEL: {starshipDetails.model}</p>
          <Link style={linkStyle} to="/starship-list">RETURN</Link>
        </div>
      </div>
    </>
  )
}

export default StarshipDetails