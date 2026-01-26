
sumEven = 0
productOdd = 1


for (i=1 ; i <= 50 ; i++){
    if (i%2 != 0 && i <= 10){
        productOdd *= i
    }
    else if (i%2 == 0){
        sumEven += i 
    }
    
    
}


console.log(`ผลรวมเลขคู่ 2 - 50 = ${sumEven}`)
console.log(`ผลรวมเลขคี่ 1 - 10 = ${productOdd}`)