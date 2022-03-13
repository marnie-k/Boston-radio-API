import React from 'react'
import { NavLink } from 'react-router-dom'

const StationList = (props) => {
    const { stations } = props

    return (
    <div>
        <h1> Select a Station</h1>
        <ul className='StationList'>
            {stations.map(station => <li key={station.callLetters}><NavLink to={`/stations/${station.callLetters}`}>{station.callLetters}</NavLink></li>)}
            </ul>
    </div>
     )
}
export default StationList