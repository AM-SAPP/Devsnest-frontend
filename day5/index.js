// Question 1

let a1 = {1: "abc"};
let a2 = [1,2,3,4];

const is_Array = (val)=>{
    return Array.isArray(val);
}
// console.log(is_Array(a1));
// console.log(is_Array(a2));


// Question 2

let a3 = [1,2,[1,3]];
const array_clone = (val)=>{
    return {...val};
}
// console.log(array_clone(a3));


// Question 3
const first = (arr,n=0)=>{
    let len = arr.length;
    if(n<0 || len===0){
        return [];
    }else if(n===0){
        return arr[0];
    }
    else if(len<=n){
        return arr;
    }else{
        return arr.slice(0,n);
    }
}

console.log(first([7, 9, 0, -2]));
console.log(first([],3));
console.log(first([7, 9, 0, -2],3));
console.log(first([7, 9, 0, -2],6));
console.log(first([7, 9, 0, -2],-3));

// Question 4
myColor = ["Red", "Green", "White", "Black"];

const ToString = (arr)=>{
    console.log(arr.toString("+")); 
}

ToString(myColor);




// Question 5
let arr1=[2, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', '2','2','2', 4, 9, 3];
const frequency = (arr)=>{
    let maxfreq = 0;
    let item = null;
    for(let i=0;i<arr.length;i++){
        let count = 1;
        for(let j=i+1;j<arr.length;j++){
            if(arr[j]===arr[i]){
                count++;
            }
        }
        if(count>maxfreq){
            maxfreq = count;
            item = arr[i];
        }
    }    
    console.log( "value = " + item + ", ( " + maxfreq + " times )");
}

// frequency(arr1);

