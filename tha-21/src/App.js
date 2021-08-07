import { useState } from "react";
import Card from "./Card";
import './main.css'
function App() {
  const [items,setItems] = useState([]);
  const [item,setItem] = useState("");
  const [cal,setCal] = useState("");
  const addItem = ()=>{
     if(item!==null && cal!==null){
       const x = {
         item,
         cal
       }
        setItems([...items,x])
     }
     setItem("");
     setCal("");
  }

  const getCal = (e)=>{
    setCal(e.target.value);
  }

  const getItem = (e)=>{
    setItem(e.target.value)
  }

  const DeleteItem = (e)=>{
    const targetId = Number(e.target.parentElement.parentElement.id);
    const newItems = items.filter((item,index)=>{
      return targetId !== index
    })

    setItems(newItems)
  }

  const EditItem = (id,food)=>{
    const newItems = items.map((item,index)=>{
          if(index!==id){
             return food;
          }else{
            return item;
          }
    })
    console.log(newItems);
    setItems(newItems);
  }

  return (
    <div className="container">
      <div className="inputs">
        <input name="Item" placeholder="Item name" type="text" value={item} onChange={getItem}/>
        <input name="calorie" placeholder="Calorie amount" type="number" value={cal} onChange={getCal}/>
      </div>
      <div className="add">
        <button onClick={addItem}>ADD ITEM</button>
      </div>
      <div className="cards">
      {
        items.length > 0 ? 
        items.map((food,index)=>{
          return (
            <Card name={food.item} cal={food.cal} key={index} DeleteItem={DeleteItem} EditItem={EditItem} id={index}/>
          )
        }) : <h1>Start Adding Items</h1>
      }
      </div>
    </div>
  );
}

export default App;
