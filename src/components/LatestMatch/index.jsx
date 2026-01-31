const LatestMatch = (props)=>{
          const {latestMatchDetails} = props   
          const {umpires,result,man_of_the_match,date,venue,competing_team,competing_team_logo,first_innings,second_innings,match_status} = latestMatchDetails
          return(
            <>
            <p>{umpires}</p>
            <p>{result}</p> 
            <p>{man_of_the_match}</p> 
            <p>{date}</p>
            <p>{venue}</p> 
            <p>{competing_team}</p> 
            <img src={competing_team_logo}/> 
            <p>{first_innings}</p> 
            <p>{second_innings}</p> 
            <p>{match_status}</p>
            </>
          )
}
export default LatestMatch