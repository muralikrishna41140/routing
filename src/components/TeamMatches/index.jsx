import {useState} from 'react'
import {useEffect} from 'react'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'
import {useParams} from 'react-router'

const TeamMatches = () => {
  const [match, setmatch] = useState({})
  useEffect(() => {
    featchs()
  }, [])

  const ids = useParams()
  
  console.log(ids)
  const {id} = ids

  const featchs = async () => {
    const fett = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await fett.json()
    setmatch(data)
  }

  return (
    <div>
      <img src={match.team_banner_url} />

      {/* <LatestMatch matchdata={match.latest_match_details}/> */}
      {/* <h1>{ipl.name}</h1> */}
      {match.latest_match_details && (
        <LatestMatch latestMatchDetails={match.latest_match_details} />
      )}
      {match.recent_matches &&
        match.recent_matches.map(each => (
          <MatchCard recentmatch={each} key={each.id} />
        ))}
    </div>
  )
}
export default TeamMatches
