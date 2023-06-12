import React from 'react';
import Dashboard from '../pages/dashboard';
import { render  } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

jest.mock('../components/Nav_bar', () => 'MockedNavigationBar');
jest.mock('../components/header', () => 'MockedHeader');
jest.mock('../components/LectureCard', () => 'MockedLectureCard');


test('Dashboard should match the snapshot', () => {
        expect(Dashboard).toMatchSnapshot();
});


test('check heading content', () => {
    const { getByText } = render(<Dashboard />);
    const headingElement = getByText('Min årsplan');

    expect(headingElement).toBeInTheDocument();
});


