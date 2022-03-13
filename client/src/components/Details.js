import React, { useState, useEffect } from  'react';
import axios from 'axios';
import { NavLink, useParams } from 'react-router-dom';
import StationList from './StationList'

const Details = (props) => {

  const [station, setStation] = useState({})
  const { id } = useParams()


  useEffect(() => {
    const fetchStation = async () => {
      const { data } = await axios.get(`http://localhost:1337/api/stations/${id}`)
  setStation(data) 
}
fetchStation();
  }, [id])
  return (
    <div>
      <h1>Station Information</h1>
      <h2>Name: {station.callLetters}</h2>
      <div>Frequency: {station.frequency}</div>
      <div>Market: {station.market}</div>
      <div>Programing: {station.programming}</div>
    </div>
  );
};

export default Details;
