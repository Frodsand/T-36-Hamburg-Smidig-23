import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginForm from '../components/LoginForm';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your login logic here
        console.log('Username:', username);
        console.log('Password:', password);

        // Assuming you have a login API endpoint
        // Replace 'api/login' with the actual endpoint
        fetch('http://localhost:4000/api/login/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username,
                password,
            }),
        })
            .then((response) => response.json())
            .then((data) => {
                // Assuming the API returns a user object if login is successful
                // Modify the condition based on your API response
                if (data && data.username) {
                    // Redirect to the dashboard page
                    navigate('/home');
                } else {
                    // Handle login error
                    console.log('Invalid credentials');
                }
            })
            .catch((error) => {
                console.log(error);
            });

        // Clear the form fields
        setUsername('');
        setPassword('');
    };

    return (
        <div role="alert">
            <h1>Login</h1>
            <LoginForm
                username={username}
                password={password}
                handleUsernameChange={handleUsernameChange}
                handlePasswordChange={handlePasswordChange}
                handleSubmit={handleSubmit}
            />
        </div>
    );
}

export default Login;
