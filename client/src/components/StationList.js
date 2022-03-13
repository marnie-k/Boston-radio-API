import React from 'react'
import { NavLink } from 'react-router-dom'

const StationList = (props) => {
    const { stations } = props

    return (
    <div>
        <h1> Select a Station</h1>
        <ul className='StationList'>
            {stations.map(station => <li key={station.id}> <NavLink to={`/stations/${station.id}`}>{station.id}: </NavLink>{station.callLetters}</li>)}
            </ul>
    </div>
     )
}
export default StationList