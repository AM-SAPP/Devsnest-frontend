import { useState, useEffect } from 'react';
import Template from './components/Template';
import Meme from './components/Meme';
import './main.css';


function App() {
  const [templates,setTemplates] = useState([]);
  const [meme,setMeme] = useState(null);
  useEffect(()=>{
    fetch("https://api.imgflip.com/get_memes")
      .then((res)=> res.json())
      .then((data)=>{
        setTemplates(data.data.memes);
      })
  },[])
  return (
    <div className="container">
        <h1>Meme Generator</h1>
        {meme !== null ? <Meme meme={meme} setMeme={setMeme}/> : <Template templates={templates} setMeme={setMeme}/>}
    </div>
  );
}

export default App;
