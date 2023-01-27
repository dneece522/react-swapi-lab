import { useEffect, useState } from "react"

const StarshipList = () => {
  const [starshipList, setStarshipList] = useState([])

  

  return (
    <>
      <h3>Starship List:</h3>
      {starshipList.length ?
        <>
          {starshipList.map(starship =>
            <div key={starship.index}>
              {starship.name}
            </div>
          )}
        </>
        :
        <>
          <h4>Loading Starships...</h4>
        </>
      }
    </>
  )
}

export default StarshipList