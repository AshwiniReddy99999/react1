import React, {Component, useState} from "react";


const SignUp = () => {
const [data,setData]=useState({name:'',email:"",gender:'',phoneNumber:'',password:''})
const [msg,setmsg]=useState("");

const verify=(e)=>{
   var isAlphanumeric='0123456789';
    e.preventDefault();
    let flag=false;
    for(let i=0;i<data.name.length;i++){
      if(isAlphanumeric.includes(data.name[i])){
        flag=true;
      }
    }
    if(data.name=="" || data.email=="" || data.phoneNumber==""|| data.password==""){
       setmsg("All fields are required")
    }else if(flag){
       setmsg('Name is not alphanumeric')
    }else if(!data.email.includes("@")){
      setmsg('email must contain @')
    }else if(isNaN(data.phoneNumber)){
      setmsg('Phone number must contain only numbers')
    }else if(data.password.length<6){
      setmsg('password must contain atleast 6 letters');
    }else {
      setmsg(`Hello ${data.email.split("@")[0]}`)
    }
    
}


  return (
    <div className="container">
        <form className="form">
            <label htmlFor="name">Name</label>
            <input type="text" data-testid='name' onChange={(e)=>{setData({...data,name:e.target.value})}}></input>
            <label htmlFor="email">Email</label>
            <input type="email" data-testid='email' onChange={(e)=>{setData({...data,email:e.target.value})}}></input>
            <label htmlFor="gender">Gender</label>
            <select name="cars" id="cars">
            <option value="male" onChange={(e)=>{setData({...data,gender:`${e.target.value}`})}}>Male</option>
            <option value="female" onChange={(e)=>{setData({...data,gender:e.target.value})}}>Female</option>
            <option value="female" onChange={(e)=>{setData({...data,gender:e.target.value})}}>Other</option>
            </select>

            <label htmlFor="phoneNumber">Phone Number</label>
            <input type="text" data-testid='phoneNumber' onChange={(e)=>{setData({...data,phoneNumber:e.target.value})}}></input>

            <label htmlFor="password">Password</label>
            <input type="password" data-testid='password' onChange={(e)=>{setData({...data,password:e.target.value})}}></input>
           
            <input type="submit" id="submit" data-testid='submit' onClick={verify}></input>
          
           {msg &&
           <div id="msg">{msg}</div>
           }


        </form>
    </div>
  )
}


export default SignUp;