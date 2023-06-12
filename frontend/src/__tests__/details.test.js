import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import DetailPage from "../pages/details";
jest.mock('../components/LecturePlan', () => 'MockedLecturesPlan');

test('Snapshot DetailPage component', () => {
    expect(DetailPage).toMatchSnapshot();
});
