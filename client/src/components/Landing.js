import React, { useState, useEffect } from  'react';
import axios from 'axios';

// import { NavLink } from 'react-router-dom';

const Landing = () => {

  const [stations, setStations] = useState([])
  
  useEffect(() => {
    const fetchStations = async() => {
      const fetchedData = await axios.get('http://localhost:1337/api/stations') 
      setStations(fetchedData.data)
     // console.log(fetchedData.data)
    }
  fetchStations()  
  },[])

  return (
    <div>
        <h1 className= 'Title'>Welcome to Boston Radio</h1>
        <h2 className= 'Header'>Greater Boston area radio stations</h2>
                {stations.map(
                      station=>{
                        return(
                          <div>
                            {station.callLetters}~{station.frequency}
                          </div>)})
                 }       
      </div>
  );
};

export default Landing;
