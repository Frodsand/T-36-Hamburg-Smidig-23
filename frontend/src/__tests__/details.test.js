import React from 'react';
import TestRenderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
import DetailPage from "../pages/details";
jest.mock('../components/LecturePlan', () => 'MockedLecturesPlan');

test('Snapshot Dashboard component', () => {
    const component = TestRenderer.create(
        <MemoryRouter>
            <DetailPage />
        </MemoryRouter>
    );
    expect(component.toJSON()).toMatchSnapshot();
});
