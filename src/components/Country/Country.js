import React from 'react';
import './Country.css';
const Country = (props) => {
    const {name, population, area, flags} = props.country;
    console.log(props);
    return (
        <div className='country'>
            <h2>Name:{name.common}</h2>
            <p>Population:{population}</p>
            <p>Area:{area}</p>   
            <img src={flags.png} alt="" className='img' />      
        </div>
 );
};

export default Country;                                    