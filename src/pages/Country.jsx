import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import axios from "axios";
import Loader from './Loader';
import { Link, NavLink } from 'react-router-dom';
import countryDetails from './countryDetails';

const Country = () => {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");
  // console.log(countries);
  

  const handleInputChange = (event) => {
    setSearch(event.target.value);
  };

  const handleSelectChange = (event) => {
    setFilter(event.target.value);
  };

 
  const fetchCountries = async () => {
    try {
      const response = await axios.get("https://restcountries.com/v3.1/all");
      // console.log(response.data[0].currencies);

      // for(const obj in response.data[0].currencies ){
      //   console.log(obj);
      // }
      
      setCountries(response.data);
    } catch (error) {
      console.error("Error fetching country data:", error);
    }
  };

  useEffect(() => {
    fetchCountries();
  }, []);

  if (countries.length === 0) return <Loader />;

  return (
    <div>
      <Navbar />

      <div className="w-full p-4 flex justify-around">
        <input
          type="search"
          value={search}
          onChange={handleInputChange}
          placeholder="Search here..."
          className="p-2 border-2 outline-none rounded"
        />

        <select
          value={filter}
          onChange={handleSelectChange}
          className="border-2 px-4 py-1 rounded font-semibold"
        >
          <option value="all">All</option>
          <option value="Africa">Africa</option>
          <option value="Americas">Americas</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>

      <div className="w-full min-h-screen bg-[#98D3E8] flex flex-wrap gap-6 px-8 py-6 justify-center">
        {countries.map((country, idx) => (
          <div key={idx} className="bg-[#1F1F1F] rounded-lg shadow-lg p-6 w-60 text-white">
            <img
              className="w-40 h-24 object-cover rounded-md mx-auto hover:scale-125 transition-transform duration-300"
              src={country.flags.svg}
              alt={country.flags.alt || "Country flag"}
            />
            <h1 className="text-xl font-bold text-center mt-4">{country.name.common}</h1>
            <h2 className="text-lg font-semibold mt-1">
              Capital: <span className="font-normal">{country.capital?.[0] || "N/A"}</span>
            </h2>
            <h2 className="text-lg font-semibold">
              Population: <span className="font-normal">{country.population.toLocaleString()}</span>
            </h2>
            <h2 className="text-lg font-semibold mb-4">
              Continent: <span className="font-normal">{country.continents?.[0] || "Unknown"}</span>
            </h2>
            <Link to={`/country/${country.name.common}`} state={country}  className="border-2 border-white px-2 py-1 rounded-full  hover:bg-white hover:text-black font-semibold">
              Read more
            </Link>
          </div>
        ))}
      </div>
   
    

    </div>
  );
};

export default Country;
