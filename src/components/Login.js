import React, {use, useState} from 'react';

function Login({setIsLogin}) {
    const [email,setEmail]=useState("");
    const [pass,setPass]=useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Login Details: ", { email, pass });
      };


  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <form onSubmit={handleSubmit} className='bg-white p-8 rounded-lg shadow-lg w-full max-w-sm'>
            <h2 className='text-2xl font-bold mb-6 text-center'>Login</h2>
            <input type='email' placeholder='Email' value={email} onChange={(e)=>setEmail(e.target.value)} className="w-full p-2 mb-4 border rounded"></input>
            <input type='password' placeholder='Password' value={pass} onChange={(e)=>setPass(e.target.value)} className="w-full p-2 mb-4 border rounded"></input>
            <button type="submit" className="w-full py-2 bg-blue-500 text-white rounded">Login</button>
            <button onClick={() => setIsLogin(false)} className="mt-4 text-blue-500 underline focus:outline-none"> Don't have an account? Register </button>
            </form>
    </div>

  );
};

export default Login