function calculateBMI(weight, height){
    data = {
        bmi : 0,
        category : undefined
    }
    dataweight = weight / (height*height)
    data.bmi= dataweight.toFixed(2)
    if (data.bmi < 18.5){
        data.category = 'ผอม'
    }
    else if (data.bmi >= 18.5 && data.bmi <= 25){
        data.category = 'ปกติ'
    }
    else if (data.bmi >= 25 && data.bmi <= 35){
        data.category = 'อ้วน'
    }
    else if (data.bmi > 35){
        data.category = 'อ้วนมาก'
    }
    
    console.log(data.category)
    return data
}

result = calculateBMI(70, 1.75)
console.log(`bmi : ${result.bmi} , category : ${result.category}`)


result = calculateBMI(50, 1.65)
console.log(`bmi : ${result.bmi} , category : ${result.category}`)


result = calculateBMI(90, 1.70)
console.log(`bmi : ${result.bmi} , category : ${result.category}`)