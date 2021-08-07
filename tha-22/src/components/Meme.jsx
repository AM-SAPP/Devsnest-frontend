import React,{useState} from 'react'

export default function Meme({meme,setMeme}) {
    const [form, setform] = useState({
        template_id: meme.id,
        username: "Babulalchpri",
        password:"itj8zq!!K8JewYa",
        boxes:[]
    })

    const GenerateMeme = ()=>{
        let url = `https://api.imgflip.com/caption_image?template_id=${form.template_id}&username=${form.username}&password=${form.password}`;
        for(let i=0;i<form.boxes.length;i++)
            url += `&boxes[${i}][text]=${form.boxes[i].text}`
        fetch(url)
            .then((res)=>res.json())
            .then((data)=>{
                if(data.success)
                    setMeme({...meme,url:data.data.url});
            })
    }
    return (
        <div className="meme">
            <img src={meme.url} alt=""/>
            <div>
                {
                    [...Array(meme.box_count)].map((_,index)=>(
                        <input type="text" placeholder={`Meme caption ${index+1}`} key={index} 
                            onChange={(e)=>{
                                const newBoxes = form.boxes;
                                newBoxes[index] = {text: e.target.value}
                                setform({...form, boxes: newBoxes})
                            }}

                        />
                    ))
                }
                
            </div>
            <button onClick={GenerateMeme}>Generate Meme</button>
            <button onClick={()=>setMeme(null)}>Choose Template</button>
        </div>
    )
}
