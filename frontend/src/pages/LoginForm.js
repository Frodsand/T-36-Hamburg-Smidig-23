import React from 'react';
import PropTypes from 'prop-types';

function LoginForm({ username, password, handleUsernameChange, handlePasswordChange, handleSubmit }) {
return (
    <form onSubmit={handleSubmit}>
        <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input
                type="text"
                id="username"
                value={username}
                onChange={handleUsernameChange}
                data-testid="username-input"
            />
        </div>
        <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
                type="password"
                id="password"
                value={password}
                onChange={handlePasswordChange}
                data-testid="password-input"
            />
        </div>
        <button type="submit">Login</button>
    </form>
);
}

LoginForm.propTypes = {
username: PropTypes.string.isRequired,
password: PropTypes.string.isRequired,
handleUsernameChange: PropTypes.func.isRequired,
handlePasswordChange: PropTypes.func.isRequired,
handleSubmit: PropTypes.func.isRequired,
};

export default LoginForm;
