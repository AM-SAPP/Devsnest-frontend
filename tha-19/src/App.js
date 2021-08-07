import Button from "./Button";

function App() {
  const arr = [...Array(4)];
  return (
    <div>
      <h1>Four different buttons</h1>
      {arr.map((item,index)=>{
        return (
          <Button key={index}/>
        )
      })}
    </div>
  );
}

export default App;
