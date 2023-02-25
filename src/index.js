import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import DogNames from './components/SearchBar.js'
import './index.css'
const App = () =>{
    const [dogData, setDogData] = useState([]);
    async function fetchdogData() {
      try{
          const giveData = await fetch ('https://fsa-puppy-bowl.herokuapp.com/api/2301-ftb-mt-ft/players');
          const newData = await giveData.json();
          console.log(newData);
          const finalData = newData.data.players;
          setDogData(finalData);

      } catch (error) {
          console.log (error) ;
      }
    }
    useEffect(() => {
      try {fetchdogData()}
      catch (error) {
        console.log(error);
      }
    }, [])

    return (
        <div>
            <p className="header">Puppy Bowl Database</p>
            <DogNames dogData ={dogData}/>
 
        </div>
    )
}
ReactDOM.render(
    <App />

    
    ,document.getElementById('app')
)