import {useState} from 'react'

const apiStatusProgress = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  failure: 'FAILURE',
  success: 'SUCCESS',
}
const Simple = () => {
  const [apiStatus, setApiStatus] = useState(apiStatusProgress.success)

  const loaderView = () => {
    return (
      <div>
        <h1>Loading view ...</h1>
      </div>
    )
  }

  const successView = () => {
    return (
      <div>
        <h1>Success view ...</h1>
      </div>
    )
  }

  const failureView = () => {
    return (
      <div>
        <h1>Failure view</h1>
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
  return <div>{renderDetails()}</div>
}

export default Simple
