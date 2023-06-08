import React from 'react';
import TestRenderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import Dashboard from '../pages/dashboard';
import '@testing-library/jest-dom/extend-expect';
import Schedule from "../pages/schedule";
import { render, screen } from '@testing-library/react';

jest.mock('../components/LectureCard', () => 'LectureCard');

test('myFunction should match the snapshot', () => {
    expect(Schedule).toMatchSnapshot();
});

test('Tests if h1 contains of the text "Undervisningsplan" ', () => {

    const { container } = render(Schedule());
    const h1Element = container.querySelector('h1');
    expect(h1Element).toHaveTextContent('Undervisningsplan');
});
