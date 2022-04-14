import { useState, useEffect } from 'react'
import { FaSignInAlt } from 'react-icons/fa'

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const { email, password } = formData

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
    }
  ]

  return (
    <>
      <section className='heading'>
        <h1>
          <FaSignInAlt /> Login
        </h1>
        <p>Login and start setting goals</p>
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

export default Login
