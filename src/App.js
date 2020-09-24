import React, {useState} from 'react';
import axios from 'axios'
import Header from './components/Header'
import Results from './components/Results'
import 'antd/dist/antd.css';

import './App.css';

function App() {
  const[data, setData] = useState(null)

  const fetchData = async (value)=>{
    const urlApp = "http://www.omdbapi.com/"
    const apiKey = "7534e539"

    const response = await axios.get(`${urlApp}?s=${value}&apikey=${apiKey}`)
   

    setData(response.data.Search)
    console.log(response)
     
  }
  
  return (
    <div className="container">
    <Header fetch={fetchData}/>
    <Results data={data}/>
    </div>
  );
}

export default App;