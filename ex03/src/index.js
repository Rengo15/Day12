function rangeOfNumbers (startN, endN){

    var startN;
    var endN;
    

    if (startN>endN){
        return "The starting number will always be less than or equal to the ending number";


    }
    else{

        const arrRange = rangeOfNumbers(startN + 1, endN);
        arrRange.unshift();
        return arrRange;
    };

}
console.log(rangeOfNumbers(1, 7));
console.log(rangeOfNumbers(3, 10));
console.log(rangeOfNumbers(5, 5));
console.log(rangeOfNumbers(7, 5));
module.eports = rangeOfNumbers;