import React from 'react'
import { useLocation } from 'react-router-dom'

const countryDetails = () => {
const {state} = useLocation();

  const currencyList =  Object.values(state.currencies).map(c => `${c.name} (${c.symbol})`).join(', ')
   

  return (
  <div className="max-w-6xl mx-auto px-4 py-10 flex flex-col lg:flex-row gap-10 items-start">
   
    <img
      src={state.flags.svg}
      alt="Country Flag"
      className="w-full max-w-md rounded-lg shadow-md object-cover"
    />

   
    <div className="flex-1">
      <h2 className="text-4xl font-bold mb-6">{state.altSpellings[1]}</h2> 

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-10 text-lg">
        <p><strong>Capital:</strong> {state.capital}</p>
        <p><strong>Region:</strong> {state.region}</p>
        <p><strong>Population:</strong>{state.population}</p>
        <p><strong>Top-Level Domain:</strong> .in</p>
        <p><strong>Currencies:</strong> {currencyList}</p>
        <p><strong>Languages:</strong>{state.languages.eng}</p>
      </div>
    </div>
  </div>
  )
}

export default countryDetails
