import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import About from './About.jsx';
import renderWithRedux from '../Test/renderWithRedux.js';

test('renders content', () => {
    const component = renderWithRedux(<About/>).container;
    expect(component).toBeInTheDocument();
})