import axios from 'axios';
import {useReducer, useEffect} from 'react';

const globalDataURL = `https://covid19.mathdro.id/api`;

const ACTION = {
    MAKE_REQUEST: 'make-request',
    GET_DATA: 'get-global-data',
    GET_DAILY_DATA: 'get-daily-data',
    GET_COUNTRY_NAME: 'get-country-name',
    ERROR: 'error'
} 


function reducer(state, action){
    switch(action.type){
        case ACTION.MAKE_REQUEST:
            return {...state, loading: true};
        case ACTION.GET_DATA:
            return {...state, loading: false, data: action.payload.data };
        case ACTION.GET_DAILY_DATA:
                return {...state, loading: false, dailyData: action.payload.dailyData};   
        case ACTION.GET_COUNTRY_NAME:
            return {...state, loading: false, countries: action.payload.countryData};          
        case ACTION.ERROR:
             return {...state, data: [],loading : true}; 
         default :
            return state;     
    }
}

export default function ApiReducer(search = 'global') {

    const [state,dispatch] = useReducer(reducer, {loading: true, data: [], dailyData: [], countryData: {}});

    useEffect(() => {
        
        dispatch({type: ACTION.MAKE_REQUEST});
        axios
        .get(search === 'global'?`${globalDataURL}`: `${globalDataURL}/countries/${search}`)
        .then( res => {
           return dispatch({type: ACTION.GET_DATA, payload:{data: res.data}})
        } )
        .catch( err => {
            console.log(err)
            return dispatch({type: ACTION.ERROR});
        })


        axios
        .get(`${globalDataURL}/daily`)
        .then( res => {
           return dispatch({type: ACTION.GET_DAILY_DATA, payload:{dailyData: res.data}})
        } )
        .catch( err => {
            console.log(err)
            return dispatch({type: ACTION.ERROR});
        })
     
        axios
        .get(`${globalDataURL}/countries`)
        .then( res => {
          const countryName = res.data.countries.map((country) => country.name);
           return dispatch({type: ACTION.GET_COUNTRY_NAME, payload:{countryData: countryName}})
        } )
        .catch( err => {
            console.log(err)
            return dispatch({type: ACTION.ERROR});
        })
    }, [search]);

    return state;

}