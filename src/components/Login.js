import {db} from "../base"
import React from 'react'
import "./Login.css"
const Login = () => {

    const SendData=(e)=>{
        e.preventDefault()
        const{fname,email,pass}=e.target.elements

        // console.log(fname.value)
        // console.log(email.value)
        // console.log(pass.value)
        try{

            db.collection("users").add(
                {
                    name:fname.value,
                    email:email.value,
                    password:pass.value

                }

            )
            console.log("data stored successfully")
        }catch
            (error){console.log(error)}
        
        
        alert("Login Successful!")
        e.target.reset()
    }
    return (
        <div className="reg">
        <form action="submit" className="form" onSubmit={SendData}>
           <h1> sign up</h1>
           <input type="text"name="fname"placeholder="Full name"className="input"/>
           <input type="email"name="email"placeholder="Enter email"className="input"/>
           <input type="password"name="pass"placeholder="Enter password"className="input"/>
           <button className="press" >
               submit</button>
        </form>

        
        </div>
    )
}

export default Login

