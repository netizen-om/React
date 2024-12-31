/* eslint-disable no-unused-vars */
import React,{useState ,useContext} from 'react'
import UserContext from '../context/userContext'

function Login() {

    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')

    const {setUser} = useContext(UserContext)

    const handelSubmit = (e) => {
        e.preventDefault()
        setUser({username,password})
    }
  return (
    <div>
        <h2>Login</h2>
        <input 
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder='username'
        type="text"/>
        <input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder='password'
        type="password"/>
        <button onClick={handelSubmit}>Submit</button>

    </div>
  )
}

export default Login