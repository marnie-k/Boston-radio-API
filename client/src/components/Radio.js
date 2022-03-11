// This is the parent of Title
// this can give props to title
import React from 'react';
import { useState, useEffect } from 'react';
import Title from './Title'
import Station from './Station'
import axios from 'axios';
const Radio = () => {
const [callLetters, setCallLetters] = useState('')
const [allStations, setAllStations] = useState([])
useEffect(() => {
    console.log('My useEffect is working')
    const fetchAllStations = async () => {
        const fetchedData = await axios.get('http://localhost:1337/api/stations')
        setAllStations(fetchedData.data)
        console.log(fetchedData.data)
    }
    fetchAllStations()
}, [callLetters])
console.log(allStations)
console.log(allStations.map((x) => x.callLetters))
console.log(allStations.map((x) => x.frequency))
const handleCallLetters = event => {
setCallLetters(event.target.value)
}
    return (
        <div>
        <Title callLetters = {callLetters}/>
        <input type= "text"  onChange={handleCallLetters}/>
        <Station/>
        </div>
    )
}
export default Radio;

