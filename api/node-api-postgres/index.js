const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const db = require('./queries')
const port = 3000


app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
)

app.get('/', (request, response) => {
    response.json({ info: 'Node.js, Express, and Postgres API' })
})

app.get('/students', db.getStudents)
app.get('/campuses', db.getCampuses)
app.get('/students/:id', db.getStudentById)
app.get('/campuses/:id', db.getCampusById)
app.post('/student/:id', bodyParser.json(),db.addCampusToStudent)
app.post('/students', db.createStudent)
app.post('/campuses', db.createCampus)
// app.put('/users/:id', db.updateUser)
// app.delete('/users/:id', db.deleteUser)

app.listen(port, () => {
    console.log(`App running on port ${port}.`)
})



