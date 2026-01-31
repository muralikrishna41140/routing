import "./index.css" 
import {Link} from "react-router"
const TeamCard = (props) => {
  const { teamiteams } = props
  const { name, team_image_url,id} = teamiteams

  return ( 
<Link to={`/team-matches/${id}`}>
    <div className="team-card">
      <h1 className="team-name">{name}</h1>
      <img src={team_image_url} className="team-logo" />
    </div>
    </Link>
  )
}

export default TeamCard
