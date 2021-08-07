const url = 'https://meme-api.herokuapp.com/gimme';
const img = document.querySelector("img");
const getMeme = async ()=>{
    const res = await fetch(url);
    const meme = res.json().then((meme)=>{
        // img.setAttribute("src",meme.url);
        img.src = meme.url;
        console.log(img);
        console.log(meme.url);
    });
}

getMeme();