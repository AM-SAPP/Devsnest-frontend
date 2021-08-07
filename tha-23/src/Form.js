import React from 'react'
import useField from './useField'
export default function Form() {
    const username = useField('email');
    const pass = useField('password');

    function handleSubmit(e){
        e.preventDefault();
        console.log(username,pass);
    }
    return (
        <div className="container">
                    <div>
                        <label htmlFor="email">
                            <h3>Email</h3>
                            <input type={username.type} value={username.value} id="email"onChange={username.onChange}/>
                        </label>
                        <br></br>
                        <label htmlFor="pass">
                        <h3>Password</h3>
                            <input type={pass.type} id="pass" value={pass.value} onChange={pass.onChange}/>
                        </label>
                    </div>
                    <button onClick={handleSubmit}>Login</button>
        </div>
    )
}
