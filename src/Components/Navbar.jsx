import React, { useContext } from 'react'
import { AuthContext } from '../Contexts/Auth'
import Login from './Login'
import LoginDetails from './LoginDetails'

const Navbar = () => {

  const { flag } = useContext(AuthContext)


  return (
    <div>
      { flag ?  <Login /> : <LoginDetails /> }
    </div>
  )
}

export default Navbar