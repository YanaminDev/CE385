const fetchDataWithCallback = (callback) => {
    setTimeout(() => {
        const data = {id : "Thiraphat Prachan" , age : 21 , status : 'student' ,  email : 'thiraphat.b.yanamin'}
        const error = undefined
        result = callbackfunction(error , data)
        console.log(result)
        
    },2000);
    
}


const callbackfunction = (error , data) => {
    if(error){
        return "Cannot fetch data"
    }
    else{
        return data
    }
}




const fetchDataWithPromise = () => {
        return new  Promise((resolve,reject)=>{
            setInterval(() => {
                const data = {id : "Thiraphat Prachan" , age : 21 , status : 'student' ,  email : 'thiraphat.b.yanamin'}
                const success= true
                if(success){
                    resolve(data)
                }
                else{
                    
                    reject("Cannot fetch data")
                }
            },2000)
            
        })


}

fetchDataWithCallback()
fetchDataWithPromise()
    .then((data) => {
        console.log(data)
    })
    .catch((error) => {
        console.log(error)
    })

    