import React, { useState } from 'react';
//import { useNavigate } from 'react-router-dom';
import LoginForm from '../components/LoginForm';
import '../styling/Login.css'; // Import the CSS file
import chewLogo from '../resources/images/ChewLogo2.png';
//import { useAuthContext } from '../hooks/useAuthContext';
import { useLogin } from '../hooks/useLogin';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
   // const navigate = useNavigate();
   // const {user} = useAuthContext()
    const { login, isLoading, error } = useLogin();
    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        // Add your login logic here
        console.log('Username:', username);
        console.log('Password:', password);
       
        await login(username, password)
        console.log("this is lets login")
      
            setUsername('');
            setPassword('');

        // Clear the form fields
    };

    return (
        <div role="alert" className="login-container">
            <div className="login-logo">
                <img src={chewLogo} alt="Logo" />
            </div>
            <div className="login-form-container">
            <LoginForm
                username={username}
                password={password}
                handleUsernameChange={handleUsernameChange}
                handlePasswordChange={handlePasswordChange}
                handleSubmit={handleSubmit}
            />
            </div>
            
            {error && <div className="error">{error}</div>}
        </div>
    );
}

export default Login;
