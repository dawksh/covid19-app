import React, {useState} from 'react';
import './App.css';
import Card from './Components/Card';
import ApiReducer from './Components/Api';
import Chart from './Components/Chart';
import SearchCountry from './Components/SearchCountry';
import covid19 from './Components/images/covid19.jpg';
import ClipLoader from "react-spinners/ClipLoader";

function App() {

const [search, setSearch] = useState('global');

const {loading, data, dailyData, countries} = ApiReducer(search);

  return (
    <div className="App">
     <img src={covid19} alt="COVID-19"/>
    {loading && <ClipLoader size={ 50 } color={"#123abc"} margin={'auto'} />}
    {  !loading && ( <div>
      <h2>{search} data</h2>
      <Card data={data} />
    <SearchCountry countries={countries} setSearch={setSearch}/>
    <Chart search={search} data={data} dailyData={dailyData}/></div>
    )

    }
    </div>
  );
}

export default App;
