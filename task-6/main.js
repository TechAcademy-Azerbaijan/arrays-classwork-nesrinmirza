let max = 0;
let min = arr[0];
let a = 0;
for (let i = 0; i < arr.length; i++) {
    a = arr.length-1;
    if (arr[i]>max) {
        max = arr[i];
    }
    else if (arr[i]<min) {
        min = arr[i];
    }
    
    }
    if (a>=2) {
        console.log(min);
        console.log(max);
     }
     else if (a<2) {
        console.log("Ooops!");
     }
