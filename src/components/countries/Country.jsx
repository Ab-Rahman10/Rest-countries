/* eslint-disable react/prop-types */
import { useState } from "react";
import "./country.css";

const Country = ({ country, handleVisitedCountries }) => {
  const { name, flags, population, area } = country;

  const [visited, setVisited] = useState(false);

  const handleVisited = () => {
    setVisited(!visited);
    handleVisitedCountries(country);
  };

  return (
    <div className={`country ${visited && "visited"}`}>
      <h2>{name.common}</h2>
      <div className="img-div">
        <img className="img" src={flags.png} />
      </div>
      <p>Population: {population}</p>
      <p>Area: {area}</p>
      <button onClick={handleVisited}>{visited ? "Visited" : "Visit"}</button>
    </div>
  );
};

export default Country;
