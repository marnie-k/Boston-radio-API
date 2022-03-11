// this is the child of Search
// this receives props from Search
import React, { useState, useEffect }from 'react';
import axios from "axios";

    const OneStation = (props) => {
//compoenet named OneStation
        const [callLetters, setCallLetters] = useState([])
        // POS named callLetters, rerenders useEffect() runs, default empty array
        const [frequency, setFrequency] = useState([])
        // POS named frequency, rerenders when useEffect() runs, default empty array
        const [markets, setmarkets] = useState([])
        // POS named markets, rerenders when useEffect() runs, default empty array 
        const [programming, setProgramming] = useState([])
        // POS named programming, rerenders when useEffect() runs, default empty array
        
        useEffect(()=> {

        }, [props.input] 
        //dependency is the POS named input passed as props frmo the Search component
        )

    return (
      <div className="StationData">
            <div >Call letters: {props.input}</div>
            <div>Frequecy: {frequency}</div>
            <div>Market: {markets}</div>
            <div>Programming: {programming}</div>
        </div>
)
}
export default OneStation;
