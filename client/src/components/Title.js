// this is the child of Radio
// this receives props from radio
import React from 'react';

const Title = (props) => {
    return (
    <div>
    <h1>Welcome to Boston Radio</h1>
    <h2>A listing of radio Stations in the Greater Boston Area</h2>
    <div>Put table here listing Name, Call letters, and frequency of all stations</div>
    <h2>Currently listening to: {props.callLetters}</h2>
    </div>
)
}
export default Title;
