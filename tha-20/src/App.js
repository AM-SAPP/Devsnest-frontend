import React, {useState} from 'react';
import Card from './Card'
import './main.css'



function App() {
  const [Dishes,setDishes] = useState([
    {
        "food":"Pizza",
        "calory":"56"
    },
    {
        "food":"Burger",
        "calory":"69"
    },
    {
        "food":"Coke",
        "calory":"500"
    },
    {
        "food":"Browne",
        "calory":"180"
    },
    {
        "food":"Fried Rice",
        "calory":"90"
    }
  ]);
  return (
    <div className="container">
        <h1>Calorie Read Only</h1>
        <div className="cards">

          {Dishes.length > 0 ? Dishes.map((item,index)=>{
            return (
              <Card key={index} food={item.food} calory={item.calory} setDishes={setDishes} Dishes={Dishes}/>
            )
          }) : 
            <h1>No entry</h1>
          }
        </div>
    </div>
  );
}

export default App;
