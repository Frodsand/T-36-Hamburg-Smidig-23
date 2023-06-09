import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import Schedule from "../pages/schedule";
import { render } from '@testing-library/react';

jest.mock('../components/LectureCard', () => 'LectureCard');

test('Schedule should match the snapshot', () => {
    expect(Schedule).toMatchSnapshot();
});

/*
test('Tests if h1 contains of the text "Undervisningsplan" ', () => {

    const { container } = render(Schedule());
    const h1Element = container.querySelector('h1');
    expect(h1Element).toHaveTextContent('Undervisningsplan');
});*/
