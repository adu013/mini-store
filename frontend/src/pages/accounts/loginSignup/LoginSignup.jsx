import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginSignup.css';
import axios from 'axios';
import { AiOutlineMail, AiOutlineKey } from 'react-icons/ai';

const LoginSignup = () => {

    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [action] = useState("Login");

    const login = () => {

        axios({
            method: 'post',
            url: 'http://localhost:8000/api/accounts/login/',
            headers: {
                'content-type': 'application/json',
                'accept': 'application/json'
            },
            data: {
                "username": email,
                "password": password
            }
        })
            .then((response) => {
                const token = response.data["token"]
                console.log(token)
                localStorage.setItem("token", token);
                navigate("/admin")
            }, (error) => {
                console.log(error);
            })
    }

    useEffect(() => {
        if (localStorage.getItem('user-token')) {
            console.log(localStorage.getItem('user-token'));
        }
    })
    return (
        <div className='container'>
            <div className='header'>
                <div className='text'>{action}</div>
                <div className='underline'></div>
            </div>

            <div className='inputs'>
                <div className='input'>
                    <img src={AiOutlineMail} alt="Email: " />
                    <input
                        type="email"
                        placeholder='Email Id'
                        onChange={(event) => setEmail(event.target.value)}
                    />
                </div>
                <div className='input'>
                    <img src={AiOutlineKey} alt="Password: " />
                    <input
                        type="password"
                        placeholder='Password'
                        onChange={(event) => setPassword(event.target.value)}
                    />
                </div>

                <div className='forgot-password'>Forgot Password? <span>Reset it Here!</span></div>
                <div className='submit-container'>
                    <div
                        className='submit'
                        onClick={login}
                    >Login</div>
                </div>
            </div>
        </div>
    )
}

export default LoginSignup;
