import {useEffect, useState} from 'react'
import TeamCard from '../TeamCard'
import './index.css'
const Home = () => {
  const [value, setvalue] = useState({})

  useEffect(() => {
    fetchingdata()
  }, [])

  const fetchingdata = async () => {
    const fet = await fetch('https://apis.ccbp.in/ipl')
    const data = await fet.json()
    setvalue(data)
  }

  return (
    <div className="mk">
      <h1 className="mkk">IPL Dashbord</h1>

      {value?.teams?.map(each => (
        <TeamCard teamiteams={each} key={each.id} />
      ))}
    </div>
  )
}
export default Home
