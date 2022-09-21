import React from 'react';
import './Country.css';
const Country = (props) => {
   // console.log(props.country);

   const { area, region, capital, population, name, flags } = props.country;
   return (
      <div className="country">
         <h2> {name.common}</h2>
         <img src={flags.png} alt="" />
         <p>Population: {population}</p>
         <p>Area: {area}</p>
         <p>Region: {region}</p>
         <p>Capital: {capital}</p>
      </div>
   );
};

export default Country;
