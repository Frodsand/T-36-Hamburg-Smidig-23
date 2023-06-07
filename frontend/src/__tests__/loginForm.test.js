import React from 'react';
import TestRenderer from 'react-test-renderer';
import { render, fireEvent, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import LoginForm from '../components/LoginForm';
import { act } from 'react-dom/test-utils';
import '@testing-library/jest-dom/extend-expect';

test('LoginForm matches snapshot', () => {
    const component = TestRenderer.create(
        <MemoryRouter>
            <LoginForm
                username="testUser"
                password="testPassword"
                handleUsernameChange={() => {}}
                handlePasswordChange={() => {}}
                handleSubmit={() => {}}
            />
        </MemoryRouter>
    );

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});

describe('LoginForm', () => {
    it('Testing if input equal output', () => {
        const handleUsernameChange = jest.fn();
        const handlePasswordChange = jest.fn();
        const handleSubmit = jest.fn();

        render(
            <LoginForm
                username="testUser"
                password="testPassword"
                handleUsernameChange={handleUsernameChange}
                handlePasswordChange={handlePasswordChange}
                handleSubmit={handleSubmit}
            />
        );

        const usernameInput = screen.getByTestId('username-input');
        const passwordInput = screen.getByTestId('password-input');

        act(() => {
            fireEvent.change(usernameInput, { target: { value: 'testUser' } });
            fireEvent.change(passwordInput, { target: { value: 'testPassword' } });
        });

        expect(usernameInput.value).toBe('testUser');
        expect(passwordInput.value).toBe('testPassword');
    });
});
