import React from 'react';
import { Line , Bar } from 'react-chartjs-2';
import styles from './Chart.module.css';

export default function Chart({search, data, dailyData }) {


    const ArrayDailyData = Object.entries(dailyData);
    const reportDate = ArrayDailyData.map((data) => data[1].reportDate);
    const confirmedDaily = ArrayDailyData.map((data) => data[1].confirmed.total);
    const deathsDaily = ArrayDailyData.map((data) => data[1].deaths.total);

    const ArrayData = Object.entries(data).map((data,i)=>{
        return i < 3 && data[1].value });

    const LineData = {
        labels: reportDate,

        datasets: [
            {
                label: "Infected",
                data: confirmedDaily,
                fill: true,
                backgroundColor: "rgba(75,192,192,0.2)",
                borderColor: "rgba(75,192,192,1)"
            },
            {
                label: "Deaths",
                data: deathsDaily,
                fill: false,
                borderColor: 'rgba(255, 0 , 0 , 0.5)'
            },

        ]
    }

    const BarData = {
        labels: ['Infected', 'Recovered', 'Deaths'],

        datasets: [
            {
                label: "People",
                fill: true,
                backgroundColor: ["rgba(75,192,192,0.2)",
               "rgba(75,192,0,0.2)",
               "rgba(255, 0 , 0 , 0.5",],
               data: ArrayData
            },

        ]
    }

  
    
    return (

        <div className={styles.ChartContainer} >
         { search==='global'? <Line data={LineData} /> : <Bar data={BarData}/>}     
        </div>
    )
}
