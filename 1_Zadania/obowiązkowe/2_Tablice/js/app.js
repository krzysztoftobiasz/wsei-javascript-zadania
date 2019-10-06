function distFromAverage(numberArray){
    var average = 0;
    numberArray.forEach(element =>{
        averege += element;
    });
    average = average / numberArray.length;
    console.log(average);
    var returnArray = [];
    numberArray.forEach (element => {
        returnArray.push (element - average);

    });
    console.log(returnArray);
    return returnArray;
}
distFromAverage([1,2,3,4,5,6,7])

//zad1

let fruits = ['apple', 'orange', 'banana', 'peach', 'pear'];
console.log(fruits[0]);
console.log(fruits[fruits.length -1]);
for(let count = 0; count < fruits.length; count++){
    console.log(fruits[count]);
}