import React, { useState, useEffect } from 'react';
import './App.css';
import UserForm from './UserForm';
import axios from 'axios';
import FormSchema from './FormSchema'
import User from './User'

const initialFormValues = {
  name: '',
  email: '',
  password: '',
  terms: false
}

const initialFormErros = {
  name: '',
  email: '',
  password: '',
}

const initialUsers = []
const initialDisabled = true

export default function App() {
  const [users, setUsers] = useState(initialUsers)
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErros, setFormErrors] = useState(initialFormErros)
  const [disabled, setDisabled] = useState(initialDisabled)
  
  const postNewUser = newUser => {
    axios.post("https://reqres.in/api/users")
      .then(res => {
        console.log(res.data)
        setUsers(res.data)
      })
  }

  const inputChange = (name, value) => {
    Yup.reach(FormSchema, name)
      .validate(value)
        .then(() => setFormErrors({...formErros, [name]: ''}))
        .catch(err => setFormErrors({...formErros, [name]: err.errors[0]}))

    setFormValues({
      ...formValues,
      [name]: value
    })
  }

  const formSubmit = () => {
    const newUser = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      password: formValues.password.trim(),
      terms: ["terms of service"].filter(terms => !!formValues[terms])
    }
    postNewUser(newUser)
  }

  useEffect(() => {
    FormSchema.isValid(formValues)
      .then(isValid => setDisabled(!isValid))
      .catch(err => console.log(err))
  }, [formValues])

  return (
    <div className='container'>
      <header><h1>User App</h1></header>

      <UserForm 
        values={formValues}
        change={inputChange}
        submit={formSubmit}
        disabled={disabled}
        errors={formErros}
      />

      {
        users.map(user => {
          return (
            <User key={user.id} details={user} />
          )
        })
      }
    </div>
  )
}


