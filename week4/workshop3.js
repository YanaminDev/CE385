const simulateAsyncOperation = (time) => {
    return new  Promise((resolve,reject )=>{
        setTimeout(() => {
            const data = {id : "Thiraphat Prachan" , age : 21 , status : 'student' ,  email : 'thiraphat.b.yanamin'}
            error = undefined
            if (error || time < 1000){
                reject("cannot fetch data or less than 1 second")
            }
            else{
                resolve(data)
            }
        },time)

    })
}


const performAsyncTask  = async () => {
    try{
        const result = await simulateAsyncOperation(1500) 
        console.log(result)
    }
    catch(error){
        console.log(error)
    }
}

performAsyncTask()