// this is the child of Radio
// this receives props from radio
import React, { useState }from 'react';


//const handleCallLetters = event => {setCallLetters(event.target.value)

const OneStation = (props) => {
    const [callLetters, setCallLetters] = useState('')

    return (
        <div className="OneStation">
            <div>Tell me more about:</div>
            <input type="text" onChange={(event) => setCallLetters(event.target.value)} />
            <div className="StationData">show data for selected station here</div>
            <div className="StationData">Frequency: (100.5)  Call letters: (WMSK) Market: (College)  Programming: (Alternative)</div>
        </div>
)
}
export default OneStation;
