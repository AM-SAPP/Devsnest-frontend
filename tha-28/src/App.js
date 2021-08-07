import key from './Api';
import {useState,useEffect} from 'react';
import './main.css'
function App() {

  const [city,setCity] = useState('');

  function handleInput(e){
    setCity(e.target.value);
  }

  function handleSubmit(e){
    if(city.trim() && city.trim().length){
      console.log(city);
    }
    setCity('')
    e.preventDefault();
  }
  useEffect(()=>{
    const link = `https://api.weatherapi.com/v1/current.json?key=${key}&q=London&aqi=no`
    fetch(link)
    .then((data)=>{
      return data.json();
    })
    .then((data)=>{
      console.log(data);
    })
    .catch((err)=>{
      console.log(err);
    })
  },[]);

  return (
    <div>
      <div className="container d-flex justify-content-center mt-3">
        <div className="row">
          <div className="col-12 form-group d-flex">
            <input className="form-control m-1" type="text" name="search" placeholder="City Name" value={city} onChange={handleInput}/>
            <button className="btn btn-primary m-1" onClick={handleSubmit}>SEARCH</button>
          </div>
        </div>
        <div className="row">
          <div className="col-12 d-flex">
            <div className="card">
              <h3>placeholder not found</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
