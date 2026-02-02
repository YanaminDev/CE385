const fetchDataFromServer1 = new Promise((resolve,reject)=> {
    setTimeout(() => {
        fetchdata = {id : "Thiraphat Prachan" , age : 21 , status : 'student' ,  email : 'thiraphat.b.yanamin'}
        error = undefined
        if(error){
            reject("cannot fetch data from server 1")
        }
        else{
            resolve(fetchdata)
        }
    },2000)
})


const fetchDataFromServer2 = new Promise((resolve,reject)=> {
    setTimeout(() => {
        fetchdata = {id : "Gussuke" , age : 20 , status : 'student' ,  email : 'Gussuke76.student'}
        error = true
        if(error){
            reject("cannot fetch data from server 2")
        }
        else{
            resolve(fetchdata)
        }
    },1000)
})


const fetchDataFromServer3 = new Promise((resolve,reject)=> {
    setTimeout(() => {
        fetchdata = {id : "Title" , age : 19 , status : 'student' ,  email : 'Title.Suppawit'}
        error = undefined
        if(error){
            reject("cannot fetch data from server 3")
        }
        else{
            resolve(fetchdata)
        }
    },3000)
})


Promise.any([fetchDataFromServer1,fetchDataFromServer2,fetchDataFromServer3])
    .then((data) => {
        console.log(data)
    })
    .catch((error) => {
        console.log(error)
    })


Promise.allSettled([fetchDataFromServer1,fetchDataFromServer2,fetchDataFromServer3])
    .then((data) => {
        console.log(data)
        console.log("All data fetched successfully")
    })
    .catch((error) => {
        console.log(error)
        console.log(data)
        console.log("Failed to fetch all data") 
    })