import React from 'react';
import styles from './SearchCountry.module.css';

export default function SearchCountry({countries, setSearch}) {

    return (
        <div className={styles.select}>
           <select  onChange={ e => setSearch(e.target.value)} >
            <option value='global'>global</option>
            { !countries? null :  countries.map(country => {
              return <option key={Math.random()} value={country} >{country}</option>
           }) } 
           </select> 
        </div>
    )
}
