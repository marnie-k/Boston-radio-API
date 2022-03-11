// This is the parent of AllStations, OneStation, and Title
// this can give props to AllStations, OneStation, and Title
import React, { useState, useEffect } from "react";
import Search from "./Search";
import axios from "axios";
import OneStation from "./OneStation";
import AllStations from "./AllStations";
const Radio = () => {
  const [callLetters, setCallLetters] = useState("");
  const [allStations, setAllStations] = useState([]);
  const [filteredStations, setFilteredStations] = useState([]);

  useEffect(() => {
    const fetchAllStations = async () => {
      const fetchedData = await axios.get("http://localhost:1337/api/stations");
      setAllStations(fetchedData.data);
    };
    fetchAllStations();
  }, []);
  /*
console.log(allStations)
console.log(allStations.map((x) => x.callLetters))
console.log(allStations.map((x) => x.frequency))

*/
  useEffect(() => {
    setFilteredStations(
      allStations.filter((station) =>
        station.callLetters.toUpperCase().includes(callLetters.toUpperCase())
      )
    );
  }, [callLetters]);

  return (
    <div>
      <h1 className="Title">Welcome to Boston Radio</h1>
      <h2 className="Header">Greater Boston area radio stations</h2>

      <div className="AllStations">
        <AllStations />
      </div>
      <div>
        <Search />
      </div>
      <div>
        {filteredStations.map((station) => {
          return (
            <div className="CallLetters">
              <u> {station.callLetters}</u> by:
              <h2 className="Frequency">{station.callLetterst}</h2>
            </div>
          );
        })}{" "}
      </div>
    </div>
  );
};

export default Radio;
