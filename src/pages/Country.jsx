import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import axios from "axios";
import Loader from './Loader';
import { Link } from 'react-router-dom';

const Country = () => {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");

  const handleInputChange = (event) => {
    setSearch(event.target.value);
  };

  const handleSelectChange = (event) => {
    setFilter(event.target.value);
  };

  const fetchCountries = async () => {
    try {
      const response = await axios.get("https://restcountries.com/v3.1/all");
      setCountries(response.data);
    } catch (error) {
      console.error("Error fetching country data:", error);
    }
  };

  useEffect(() => {
    fetchCountries();
  }, []);

  if (countries.length === 0) return <Loader />;

  const filteredCountries = countries.filter((country) => {
    const nameMatch = country.name.common.toLowerCase().includes(search.toLowerCase());
    const continentMatch = country.continents[0].toLowerCase().includes(search.toLowerCase());
    const regionMatch = filter === "all" || country.region === filter;

    return (nameMatch || continentMatch) && regionMatch;
  });

  return (
    <div className="min-h-screen bg-[#98D3E8]">
      <Navbar />

      {/* Search and Filter Bar */}
      <div className="w-full max-w-6xl mx-auto px-4 py-6 flex flex-col sm:flex-row gap-4 sm:gap-8 items-center justify-between">
        <input
          type="search"
          value={search}
          onChange={handleInputChange}
          placeholder="Search by name or continent..."
          className="w-full sm:w-1/2 px-4 py-2 rounded-md  border-black text-black border-3 outline-none focus:ring-[#1F1F1F]"
        />

        <select
          value={filter}
          onChange={handleSelectChange}
          className="w-full sm:w-[240px] px-4 py-2 rounded-md  border-black text-black border-3 outline-none focus:ring-[#1F1F1F]"
        >
          <option value="all">All Regions</option>
          <option value="Africa">Africa</option>
          <option value="Americas">Americas</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>

      {/* Country Cards Grid */}
      <div className="w-full max-w-7xl mx-auto px-4 py-8 grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {filteredCountries.map((country, idx) => (
          <div
            key={idx}
            className="bg-[#1F1F1F] text-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between"
          >
            <img
              className="w-full h-36 object-cover rounded-lg mb-4 hover:scale-105 transition-transform duration-300"
              src={country.flags.svg}
              alt={country.flags.alt || "Country flag"}
            />
            <h1 className="text-xl font-bold text-center mb-2">{country.name.common}</h1>

            <div className="text-sm space-y-1">
              <p><strong>Capital:</strong> {country.capital?.[0] || "N/A"}</p>
              <p><strong>Population:</strong> {country.population.toLocaleString()}</p>
              <p><strong>Continent:</strong> {country.continents?.[0] || "Unknown"}</p>
            </div>

            <Link
              to={`/country/${country.name.common}`}
              state={country}
              className="mt-4 inline-block text-center px-4 py-2 border-2 border-white rounded-full font-semibold hover:bg-white hover:text-black transition-colors duration-300"
            >
              Read More
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Country;
