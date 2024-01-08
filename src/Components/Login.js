import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => 
{
    const navigate = useNavigate();
    const [emailValue, setEmail] = useState('');
    const [passwordValue,setPassword]=useState('');
    const [message, setMessage] = useState("");
    const users = [{ email: "admin@admin.com", password: "admin@123" }];
    function handleEmail(event) 
    {
        event.preventDefault();
        const account = users.find((user) => user.email === emailValue);
        if (account && account.password === passwordValue) {
            navigate("/MainPage");
        }
        else{
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
        <div>
            <form onSubmit={handleEmail}>
                <div class="form-group">
                    <label for="InputEmail">Email address</label>
                    <input type="email"  class="form-control" id="email" value={emailValue} onChange={(e) => { setEmail(e.target.value) }} placeholder="Enter email"/>
                    <small id="emailHelp" class="form-text text-muted">{message}</small>
                </div>
                <div class="form-group">
                    <label for="InputPassword">Password</label>
                    <input type="password" value={passwordValue} onChange={(e) => { setPassword(e.target.value) }} class="form-control" id="password1" placeholder="Password"/>
                </div>
                <button  class="btn btn-primary">Submit</button>
            </form>
        </div>
    );
}

export default Login;