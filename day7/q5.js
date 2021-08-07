
const digit = (num)=>{
    let count = 0;
    while(num>0){
        count++;
        num = parseInt(num/10);
    }
    return count;
}

const volume = (radius,height)=>{
    let V = Math.PI * radius * radius * height;
    let total_digit = digit(parseInt(V)) + 4;
    return Number(V.toPrecision(total_digit));
}
console.log(volume(100,170));