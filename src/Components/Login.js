import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import './login.css'

const Login = () => 
{
    const navigate = useNavigate();
    const [emailValue, setEmail] = useState('');
    const [passwordValue, setPassword] = useState('');
    const [message, setMessage] = useState("");
    const users = [{ email: "admin@admin.com", password: "admin@123" }];
    function handleEmail(event) 
    {
        event.preventDefault();
        const account = users.find((user) => user.email === emailValue);
        if (account && account.password === passwordValue) {
            navigate("/MainPage");
        }
        else {
            setMessage("Wrong email or password");
        }
        let emailRegex = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
        if (!emailRegex.test(emailValue)) {
            setMessage("Error! you have entered invalid email.");
        } else {
            setMessage("");
        }
    }
        return (
            <div className="container ">
                <div className="card d-flex align-items-center justify-content-center">
                    <div className="form">
                        <div className="left-side">
                            <img src="https://imgur.com/XaTWxJX.jpg" />
                        </div>
                        <div className="right-side">
                            <div className="hello">
                                <h2>Login</h2>
                            </div>
                            <form onSubmit={handleEmail}>
                                <div className="input_text">
                                    <input className={`  ? "warning" : "" }`} id="email" value={emailValue} onChange={(e) => { setEmail(e.target.value) }} type="text" placeholder="Enter Email" name="email" />
                                    <p>{message}</p>
                                </div>
                                <div className="input_text">
                                    {/* <input className={`  ? "warning" : "" }`} value={passwordValue} onChange={(e) => { setPassword(e.target.value) }} placeholder="Enter Password" name="password" />
                                     */} <input className={`  ? "warning" : "" }`} id="email"value={passwordValue} onChange={(e) => { setPassword(e.target.value) }} type="text" placeholder="Enter Password" name="password" />
                                </div>
                                <div className="btn">
                                    <button className="btn btn-primary">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
}

export default Login;