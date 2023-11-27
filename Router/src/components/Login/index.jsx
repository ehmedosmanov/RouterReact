import React from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const  navigate = useNavigate()
    const handleClick = () => {
        navigate('/About')
    }
  return (
    <>
    <h1>sala</h1>
    <button onClick={handleClick}>Button</button>
    </>
    )
}

export default Login