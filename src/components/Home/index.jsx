import {useEffect, useState} from 'react'
import TeamCard from '../TeamCard'
import {ThreeDots} from 'react-loader-spinner'
const apiStatusProgress = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  failure: 'FAILURE',
  success: 'SUCCESS',
}

import './index.css'
const Home = () => {
  const [value, setvalue] = useState({})
  const [apiStatus, setApiStatus] = useState(apiStatusProgress.initial)

  useEffect(() => {
    fetchingdata()
  }, [])

  const fetchingdata = async () => {
    try {
      setApiStatus(apiStatusProgress.inProgress)

      const fet = await fetch('https://apis.ccbp.in/ipl')
      if (fet.ok) {
        const data = await fet.json()
        setvalue(data)
        setApiStatus(apiStatusProgress.success)
      } else {
        setApiStatus(apiStatusProgress.failure)
      }
    } catch {
      setApiStatus(apiStatusProgress.failure)
    }
  }

  const loaderView = () => {
    return (
      <div style={{textAlign: 'center'}}>
        <ThreeDots
          height={50}
          width={50}
          color="#4fa94d"
          secondaryColor="#4fa94d"
          strokeWidth={2}
          strokeWidthSecondary={2}
        />
      </div>
    )
  }

  const successView = () => {
    return (
      <div>
        {value?.teams?.map(each => (
          <TeamCard teamiteams={each} key={each.id} />
        ))}
      </div>
    )
  }

  const failureView = () => {
    return (
      <div>
        <h1>There is a technical issue</h1>
      </div>
    )
  }

  const renderDetails = () => {
    switch (apiStatus) {
      case apiStatusProgress.inProgress:
        return loaderView()
      case apiStatusProgress.success:
        return successView()
      case apiStatusProgress.failure:
        return failureView()
      default:
        return null
    }
  }
  return (
    <div className="mk">
      <h1 className="mkk">IPL Dashbord</h1>
      {renderDetails()}
    </div>
  )
}
export default Home
