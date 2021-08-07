import Card from './Card'
import './main.css'
import data from './data'

function App() {
  return (
    <div className="container">
        <h1>Calorie Read Only</h1>
        <div className="cards">
          {data.map((item,index)=>{
            return (
              <Card key={index} food={item.food} calory={item.calory}/>
            )
          })}
        </div>
    </div>
  );
}

export default App;
