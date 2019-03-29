const express = require('express')
const app = express();
const users =require('./users')
console.log(users)
function getAllUsers(){
    return users;
}

function getUser(id){
    let user = users.find(user => user.id === 
    id);
    return user;
}

function getUserByEmail(email){
    return users.find(user => user.email === email);
}

function getGmailUsers(){
    return users.filter(user => user.email.includes('google'));
}

// app.get('/api/users/:id', (request, response) => {
//     console.log(request.params)
//     let user = users.find(user => user.id === +request.params.id);
//     response.json(user);
// })

// app.get('/api/users/:email', (request, response) => {
//     console.log(request.params)
//     let user = users.find(user => user.email === request.params.email);
//     if (user) {
//         response.status(200).json(user);
//     } else {
//         response.status(404).json(user);
//     }
// })

app.get('/api/users', (request, response) => {
    if (request.query.email){
        const filteredUsers = users.filter(user => user.email.includes(request.query.email))
        response.json(filteredUsers);
    } else {
        response.json(users)
    }  
})

app.listen(3000, () => console.log('Listening on 3000'))