import { useEffect, useState } from "react";
import Country from "./Country";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [visitedCountries, setVisitedCountries] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  const handleVisitedCountries = (country) => {
    console.log(country);
    const newVisitedCountries = [...visitedCountries, country];
    setVisitedCountries(newVisitedCountries);
  };

  return (
    <>
      <h1>React tour {countries.length}</h1>
      <div>
        <h3>Visited countries: {visitedCountries.length}</h3>
        <ol>
          {visitedCountries.map((visitedCountry) => (
            <li key={visitedCountry.cca3}>
              {visitedCountry.name.common}
              <div
                style={{
                  display: "inline-flex",
                  marginLeft: "15px",
                }}
                className="visited-flag"
              >
                <img className="visited-img" src={visitedCountry.flags.png} />
              </div>
            </li>
          ))}
        </ol>
      </div>
      <div className="country-container">
        {countries.map((country) => (
          <Country
            handleVisitedCountries={handleVisitedCountries}
            key={country.cca3}
            country={country}
          ></Country>
        ))}
      </div>
    </>
  );
};

export default Countries;
