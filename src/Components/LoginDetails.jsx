import React, { useContext } from 'react'
import { AuthContext } from '../Contexts/Auth'

const LoginDetails = () => {

  const {flag , setFlag ,isAuth} = useContext(AuthContext)

  return (
    <div>

        {"Token is :" + localStorage.getItem("isLogin")}
        <button onClick={() => setFlag(!flag)}>Logout</button>
    </div>
  )
}

export default LoginDetails