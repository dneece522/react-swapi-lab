import { useEffect, useState } from "react"
import { getStarshipList } from "../../services/sw-api"
import { Link } from "react-router-dom"

const linkStyle = {
  textDecoration: "none",
  color: "white"
}

const StarshipList = () => {
  const [starshipList, setStarshipList] = useState([])

  useEffect(() => {
    const fetchStarshipList = async () => {
      const starshipData = await getStarshipList()
      setStarshipList(starshipData.results)
    }
    fetchStarshipList()
  }, [])

  return (
    <>
      {starshipList.length ?
        <div id="starships">
          {starshipList.map(starship =>
            <Link 
              to="/starship" 
              key={starship.name} 
              state={{starship}}
              style={linkStyle}
            >
              <div className="starship">{starship.name}</div>
            </Link>
          )}
        </div>
        :
        <>
          <h3>Loading Starships...</h3>
        </>
      }
    </>
  )
}

export default StarshipList