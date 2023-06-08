import React from 'react';
import TestRenderer from 'react-test-renderer';
import { render, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Login from '../pages/login';


test('Snapshot login page', () => {

    const component = TestRenderer.create(
        <MemoryRouter>
            <Login />
        </MemoryRouter>
    );

    expect(component.toJSON()).toMatchSnapshot();
});


describe('Login Component', () => {

    //Verifies that when the value of the username input field changes, the corresponding state variable (username) is updated accordingly.
    test('handleUsernameChange updates the username state', () => {
        const { getByLabelText } = render(
            <MemoryRouter>
                <Login />
            </MemoryRouter>
        );
        const usernameInput = getByLabelText('Username:'); // Update label text if necessary

        fireEvent.change(usernameInput, { target: { value: 'testUser' } });

        expect(usernameInput.value).toBe('testUser');
    });

    //verifies that when the value of the password input field changes, the corresponding state variable (password) is updated correctly.
    test('handlePasswordChange updates the password state', () => {
        const { getByLabelText } = render(
            <MemoryRouter>
                <Login />
            </MemoryRouter>
        );
        const passwordInput = getByLabelText('Password:'); // Update label text if necessary

        fireEvent.change(passwordInput, { target: { value: 'testPassword' } });

        expect(passwordInput.value).toBe('testPassword');
    });
});

