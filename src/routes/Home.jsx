import React from 'react'
import { useLocation } from 'react-router-dom'

function Home(props) {
  const location = useLocation()  

  React.useEffect(() => {
    console.log('Location changed', location, props)
  }, [location])

  return <h1>home</h1>
}

export default Home
