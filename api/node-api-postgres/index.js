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
app.post('/students/:id', bodyParser.json(),db.addCampusToStudent)
app.post('/campuses/:id', bodyParser.json(),db.addStudenttoCampus)
app.post('/students', db.createStudent)
app.post('/campuses', db.createCampus)
app.delete('/students/:id', db.deleteStudent)
app.delete('/campuses/:id', db.deleteCampus)
app.put('/students/:id', db.updateStudent)
app.put('/campuses/:id', db.updateCampus)

app.listen(port, () => {
    console.log(`App running on port ${port}.`)
})



