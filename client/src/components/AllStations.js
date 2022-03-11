// this is the child of Radio
// this receives props from radio
import React from 'react';
//  import { NavLink } from 'react-router-dom'
// This should return a list of all the stations
// the following fields should be displayed: Call Letters, Frequency

const AllStations = () => {

    return (
        <div>
            <div> This is AllStations </div>
            <div> List of All Stations with ID (NavLink) Call Letters and Frequency</div>
        </div>
    )
}

export default AllStations;
/*
            <ul>
             {stations.map (station => <li key= {station.callLetters}><NavLink to={`stations/${station.callLetters}`}>{station.callLetters}</NavLink></li>)}
            </ul>
*/