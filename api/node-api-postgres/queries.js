const Pool = require('pg').Pool
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'student_campus',
    password: 'Password',
    port: 5432,
})

const getCampuses = (request, response) => {
    pool.query('SELECT * FROM campuses ORDER BY id ASC', (error, results) => {
        if(error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

const getStudents = (request, response) => {
  pool.query('SELECT * FROM students ORDER BY id ASC', (error, results) => {
      if(error) {
          throw error
      }
      response.status(200).json(results.rows)
  })
}

const getStudentById = (request, response) => {
    const id = parseInt(request.params.id)
  
    pool.query('SELECT * FROM students WHERE id = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
}

const getCampusById = (request, response) => {
    const id = parseInt(request.params.id)
  
    pool.query('SELECT * FROM campuses WHERE id = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
}

const createCampus = (request, response) => {
  const { name, imageurl, address, description } = request.body

  pool.query(`INSERT INTO users (name, imageurl, address, description) VALUES ($1, $2)`, [name, imageurl, address, description], (error, results) => {
      if (error) {
          throw error
      }
      response.status(201).send(`Campus added with ID: ${results.insertId}`)
  })
}

const createStudent = (request, response) => {
  const { firstname, lastname, email, imageurl, gpa } = request.body

  pool.query(`INSERT INTO users (firstname, lastname, email, imageurl, gpa) VALUES ($1, $2)`, [firstname, lastname, email, imageurl, gpa], (error, results) => {
      if (error) {
          throw error
      }
      response.status(201).send(`Student added with ID: ${results.insertId}`)
  })
}

const addCampusToStudent = (request, response) => {
  const id = parseInt(request.params.id);
  const  {name} = request.body;
  db.query(`INSERT INTO studentscampusrelationship (studentid, campusid) VALUES ($1, (SELECT campusid FROM campus WHERE name = $2))`,  [id, name], (error, results) => {
      if(error) {
          throw error
      }
      response.status(201).send(`campus added ${results}`)
  })
}

const createUser = (request, response) => {
    const { name, email } = request.body

    pool.query(`INSERT INTO users (name, email) VALUES ($1, $2)`, [name, email], (error, results) => {
        if (error) {
            throw error
        }
        response.status(201).send(`User added with ID: ${results.insertId}`)
    })
}

const updateUser = (request, response) => {
    const id = parseInt(request.params.id)
    const { name, email } = request.body
  
    pool.query(
      'UPDATE users SET name = $1, email = $2 WHERE id = $3',
      [name, email, id],
      (error, results) => {
        if (error) {
          throw error
        }
        response.status(200).send(`User modified with ID: ${id}`)
      }
    )
}

const deleteUser = (request, response) => {
    const id = parseInt(request.params.id)
  
    pool.query('DELETE FROM users WHERE id = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`User deleted with ID: ${id}`)
    })
}

module.exports = {
    getCampuses,
    getStudents,
    getCampusById,
    getStudentById,
    createCampus,
    createStudent,
    addCampusToStudent
}