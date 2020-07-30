import React from 'react';
import styles from './Card.module.css';
import Countup from 'react-countup';

export default function Card({data}){

 const lastUpdate = data.lastUpdate;
 let CopiedData = Object.assign({},data);


    return (
        <div className={styles.mainContainer}>
       {
       !data ? null: 
        Object.entries(CopiedData).map((arraydata,i) => (
        i < 3 ? ( 
        <div key={i} className={styles.container}>
           <h3>Number of {arraydata[0]} {arraydata[0]!== 'deaths'? 'cases': '\n occured'}</h3>
           <span className={styles.countup}><Countup start={0} end={arraydata[1].value} separator=","/></span>  
           <h4>Last updated</h4>
           <h3>{new Date(lastUpdate).toDateString()}</h3>
        </div>): null))

       }  
      </div>

    )
}
