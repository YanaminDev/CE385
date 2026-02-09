const express = require('express')
const app = express()

app.use(express.json())

app.use(express.urlencoded({extended: true}))

const students = [
    {id:1 , name: "node" , age: 20},
    {id:2 , name: "express" , age: 25},
    {id:3 , name: "javascript" , age: 30}
]

const validateStudent = (req,res,next) => {
    const {name , age} = req.body
    if(!name || !age){
        return res.status(400).send('Invalid data')
    }
    next()
}

// const validateStudentUpdate = (req,res,next) => {
//     const {name , age} = req.body
//     if(!name && !age){
//         return res.status(400).send('Invalid data')
//     }
//     next()
// }

app.get('/students' , (req,res) => {
    res.send(students);
})

app.get('/students/:id' , (req,res) => {
    const id = parseInt(req.params.id)
    const student = students.find(s => s.id === id)
    if(student){
        res.send(student)
    }
    else{
        return res.status(404).send('Error404 : Student not found')
    }
})

app.post('/students' , validateStudent, (req,res) => {
    const {name , age} = req.body
    const newid = students.length+1
    const newStudent = {id:newid ,name:name,age:age}
    students.push(newStudent)
    res.send(students)
})

app.put('/students/:id' , validateStudent , (req,res) => {
    const id = parseInt(req.params.id) - 1
    const {name , age} = req.body
    const student = students.find(s => s.id === id)
    if(student){
        students[id].name = name
        students[id].age = age
        res.send(students[id])
    }
    return res.status(404).send('Error404 : Student not found ')
} )

app.delete('/students/:id' , (req,res) => {
    const id = parseInt(req.params.id) - 1
    const student = students.find(s => s.id === id)
    console.log(student)
    if(student){
        students.pop(student)
        res.send(students)
    }
    return res.status(404).send('Error404 : Student not found')
})




app.listen(3000,() => {
    console.log('Server is running on http://localhost:3000');
})


// app.post('/data' , (req,res) => {
//     console.log(req.body)
//     res.send('Data received')
// })




// const validateStudent = (req ,res , next) =>{
//     const {name,age} = req.query
//     if(!name || !age){
//         return res.status(400).send('Invalid data')
//     }
//     next()
// }

// app.get('/search' , validateStudent , (req,res) => {
//     const name = req.query.name
//     const age = req.query.age
//     res.send(`Searching for student: ${name} , ${age}`)
// })




// const students = [
//     {id:1 ,name: 'Butcher' ,age : 25},
//     {id:2 ,name: 'Homelander' ,age : 30},
//     {id:3 ,name: 'Jane Doe' ,age : 20},
// ]

// app.get('/api/students' , (req,res) => {
//     res.send(students)
// })

// app.get('/api/students/:id' , (req,res) => {
//     const id = parseInt(req.params.id)
//     const student = students.find(s => s.id === id)
//     if(student){
//         res.send(student)
//     }   
//     else{
//         return res.status(404).send('Error404 : Student not found');

//     }   
// })