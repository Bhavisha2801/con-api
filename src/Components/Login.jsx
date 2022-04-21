import {React , useContext, useState} from 'react'
import { AuthContext } from '../Contexts/Auth'


let initdata = {
    email: "",
    password: "",
  }

const Login = () => {


    const {isAuth , flag , setFlag} = useContext(AuthContext)
    console.log(isAuth , flag)

    const [data, setData] = useState(initdata)


    const toggleAuth = () => {
      localStorage.getItem("isLogin") === undefined ? setFlag(flag) : setFlag(!flag)
    }

  const login = () => {
    fetch("https://reqres.in/api/login", {
      method: "post",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(res => {
          localStorage.setItem("isLogin",JSON.stringify(res.token))
          toggleAuth()
          console.log(flag)
      })
      .catch((err) => console.log(err))
  }

  console.log(localStorage.getItem("isLogin"))

  const handleInput = (e) => {
    const { name, value } = e.target;
    setData({...data, [name] : value})
    console.log(data);
  }



  return (
    <div>
      <input type="text" placeholder='password' name='password' onChange={handleInput} required />
      <input type="text" placeholder='email' name='email' onChange={handleInput} required />
      <button onClick={() => login()} >Login</button>
    </div>
  )

}

export default Login