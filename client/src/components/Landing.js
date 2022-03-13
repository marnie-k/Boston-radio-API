import axios from 'axios';
import react, { useState,useEffect } from  'react';
// import AllStations from  './AllStations';

const Landing = () => {

  //POS named stations to hold all stations
  const [stations, setStations] = useState([[]])

  useEffect(() => {
    const fetchStations = async() => {
      const fetchedData = await axios.get('http://localhost:1337/api/stations') 
      setStations(fetchedData.data)
      console.log(fetchedData.data)
    }
  fetchStations()  
  },[])

  return (
    <div>
      <h1 className= 'Title'>Welcome to Boston Radio</h1>
      <h2 className= 'Header'>Greater Boston area radio stations</h2>
        <div>{stations.map(station=>{
           return(
            <div>{station.id}</div>
            )
      })}</div>
    </div>
  );
};

export default Landing;
