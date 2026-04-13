import React, { useState } from 'react';

const Forms = () => {
    const [username,setUsername] = useState('');
    const [age,setAge] = useState(null);
    const [message,setMessage] = useState('');

  let header = null;
  let span = null;
  if (username !== "" && age && Number(age) && message) {
    header = <h1>Hello {username} your age is {age}, {message}</h1>;
  }
  if(age && !Number(age)){
    span=<span>Your age must be a number</span>;
  }
  
  const mySubmitHandler = (e) =>{
    e.stopPropagation();
    e.preventDefault();
    if(!Number(age))
    {
        alert(`Your age must be a number`);
    }
    if(username)
        alert(`You are submiting ${username}`);
  }

    return (
        <div className='m-2'>
             {header}
            <form action="" onSubmit={mySubmitHandler}>
                <div className='m-2'>
                    <label>Enter your name: </label>
                    <input type="text" name="username" id="username" onChange={(e)=>setUsername(e.target.value)} className='bg-white rounded-md p-1'/>
                </div>
                <div className='m-2'>
                    <label>Enter your Age: </label>
                    <input type="text" name="age" id="age" onChange={(e)=>setAge(e.target.value)} className='bg-white rounded-md p-1'/> {span}
                </div>
                <div className='flex justify-center gap-2'>
                    <label>Message: </label>
                    <textarea  onChange = {(e)=>setMessage(e.target.value)} className='bg-white rounded-md p-1'></textarea>
                </div>
                <div className='flex justify-center gap-2'>
                    <label>Options: </label>
                    <select>
                        <option></option>
                    </select>
                </div>
                <button className='bg-white p-1 rounded-md m-2'>Submit</button>
            </form>
        </div>
    );
}

export default Forms;
