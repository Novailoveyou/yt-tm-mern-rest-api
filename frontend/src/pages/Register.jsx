import { useState, useEffect } from 'react'
import { FaUser } from 'react-icons/fa'

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: ''
  })

  const { name, email, password, password2 } = formData

  const onChange = e => {
    setFormData(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }

  const onSubmit = async e => {
    e.preventDefault()
  }

  const inputs = [
    {
      type: 'text',
      id: 'name',
      name: 'name',
      value: name,
      placeholder: 'Enter your name'
    },
    {
      type: 'email',
      id: 'email',
      name: 'email',
      value: email,
      placeholder: 'Enter your email'
    },
    {
      type: 'password',
      id: 'password',
      name: 'password',
      value: password,
      placeholder: 'Enter password'
    },
    {
      type: 'password',
      id: 'password2',
      name: 'password2',
      value: password2,
      placeholder: 'Confirm password'
    }
  ]

  return (
    <>
      <section className='heading'>
        <h1>
          <FaUser /> Register
        </h1>
        <p>Please create an account</p>
      </section>
      <section className='form'>
        <form onSubmit={onSubmit}>
          {inputs.map(({ type, id, name, value, placeholder }) => (
            <div className='form-group' key={id}>
              <input
                type={type}
                className='form-control'
                id={id}
                name={name}
                value={value}
                placeholder={placeholder}
                onChange={onChange}
              />
            </div>
          ))}
          <div className='form-group'>
            <button type='submit' className='btn btn-block'>
              Submit
            </button>
          </div>
        </form>
      </section>
    </>
  )
}

export default Register
