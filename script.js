const n = Number(prompt ("Введите желаемое число массива"));
const array = new Array(n);

for (let i=0; i < n; i++) {
    array[i] = i + 1;
}

function mas(){
    for(let j = array.length - 1; j > 0; j--){
          const randIndex = Math.floor(Math.random() * (j - 1));
          let newArr = array[randIndex];
          array[randIndex] = array[j];
          array[j] = newArr;
    }
    return(array);
    } 

mas();
array.forEach(el => document.querySelector("div").innerHTML += `${el} `);

ы