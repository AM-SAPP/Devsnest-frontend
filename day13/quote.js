const url = 'https://api.quotable.io/random';
const heading = document.querySelector("h1");

const getQuote = async ()=>{
    const res = await fetch(url);
    const Quote = res.json().then((quote)=>{
        console.log(quote.content);
        heading.innerHTML = quote.content;
    })
    .catch((err)=>{
        console.log(err);
    });
}

getQuote();