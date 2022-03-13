import React, { useState, useEffect } from 'react';
import StationList from './StationList'
import axios from 'axios';
//import Details from './Details'

const Landing = () => {
  const [callLetters] = useState('')
  const [stations, setStations] = useState([])
  
  
  useEffect(() => {
    const fetchStations = async() => {
      const fetchedData = await axios.get('http://localhost:1337/api/stations')
      setStations(fetchedData.data)
     
    }
  fetchStations()
  }, [])
  
  const stationFilter = (station) => station.callLetters.includes(callLetters)
 
  return (
    <div>
        <h1 className= 'Title'>Welcome to Boston Radio</h1>
        <h2 className= 'Header'>Greater Boston area radio stations</h2>
      <StationList
        stations={stations.filter(stationFilter)}
      />

      </div>
  )
}
export default Landing;