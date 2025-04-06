import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const countryDetails = () => {
const {state} = useLocation();
  const currencyList =  Object.values(state.currencies).map(c => `${c.name} (${c.symbol})`).join(', ')
   const languageslist = Object.values(state.languages).join(", ")  
  return (
<div className=" bg-[#87bed2]  min-h-screen text-white py-16 px-4">
  <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12 items-start">

    {/* Flag */}
    <div className="w-full max-w-md border-[#1F1F1F] rounded-3xl border-4  p-4 backdrop-blur-md">
      <img
        src={state.flags.svg}
        alt="Country Flag"
        className="rounded-2xl object-cover w-full h-auto shadow-lg"
      />
    </div>

    {/* Info Section */}
    <div className="flex-1 rounded-3xl border-black border-4  p-8 backdrop-blur-md">
      <h2 className="text-5xl font-extrabold text-black  mb-8">
        {state.altSpellings[1]}
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-12 text-black text-lg leading-relaxed">
        <p><span className="font-medium text-black">Capital:</span > {state.capital}</p>
        <p><span className="font-medium text-black">Region:</span> {state.region}</p>
        <p><span className="font-medium text-black">Sub-region:</span> {state.subregion}</p>
        <p><span className="font-medium text-black">Continent:</span> {state.continents[0]}</p>
        <p><span className="font-medium text-black">Population:</span> {state.population.toLocaleString()}</p>
        <p><span className="font-medium text-black">Top-Level Domain:</span> {state.tld[0]}</p>
        <p><span className="font-medium text-black">Currencies:</span> {currencyList}</p>
        <p><span className="font-medium text-black">Languages:</span> {languageslist}</p>
        <div className="col-span-2 flex items-center gap-4">
          <span className="font-medium text-black">Coat of Arms:</span>
          <img className="w-24 h-auto  border-black " src={state.coatOfArms.svg} alt="Coat of Arms" />
        </div>
      </div>

      <Link
        to="/country"
        className="inline-block mt-10 px-6 py-3 rounded-xl border-2 border-black text-[black] font-semibold tracking-wide hover:bg-black hover:text-white transition duration-300 shadow-md"
      >
        ← Back
      </Link>
    </div>
  </div>
</div>

  )
}

export default countryDetails
