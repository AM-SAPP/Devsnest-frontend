// const seats = [...document.getElementsByClassName("box")];
const container = document.querySelector(".container");

const box = `
    <div class="box"></div>
`;

let boxes = 40;
for(let i=0;i<boxes;i++){
    container.innerHTML += box;
}

const seats = document.querySelectorAll(".box");
console.log(seats);


var booked = document.querySelector("#booked");
let remaining = document.querySelector("#remaining");
var remainingSeat = boxes;
let bookedSeat = 0;
remaining.innerHTML = boxes;

seats.forEach((seat,index)=>{
    
    seat.addEventListener("click",()=>{
        if(seat.classList.contains("boxClicked")){
            seat.classList.remove("boxClicked");
            booked.innerHTML = --bookedSeat;
            remaining.innerHTML = ++remainingSeat;
            
        }else{
            seat.classList.add("boxClicked");
            booked.innerHTML = ++bookedSeat;
            remaining.innerHTML = --remainingSeat;
        }
    })
})