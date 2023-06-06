import React from 'react';
import TestRenderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import LoginForm from '../pages/LoginForm';

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
