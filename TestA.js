
function findOppsiteNumber(n,inputNumber){

    if (inputNumber<n/2){
        let oppositeNumber = inputNumber+(n/2);
        alert(`Đối số của ${inputNumber} là ${oppositeNumber} `)
    }
    else if(inputNumber>=(n/2)){
        let oppositeNumber = inputNumber-(n/2);
        alert(`Đối số của ${inputNumber} là ${oppositeNumber} `)
    }
}

console.log(findOppsiteNumber(20,3));


