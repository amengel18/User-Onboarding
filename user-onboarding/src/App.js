import React, { useState, useEffect } from 'react';
import './App.css';
import UserForm from './UserForm';
import axios from 'axios';


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
  terms: ''
}

const initialUsers = []
const initialDisabled = true

function App() {
  const [users, setUsers] = useState(initialUsers)
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErros, setFormErrors] = useState(initialFormErros)
  const [disabled, setDisabled] = useState(initialDisabled)
  
  return (

  )
}

export default App;
