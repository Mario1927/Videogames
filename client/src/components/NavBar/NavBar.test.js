import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { fireEvent, prettyDOM } from '@testing-library/react';
import NavBar from './NavBar.jsx';
import renderWithRedux from '../Test/renderWithRedux.js';

test('renders content', () => {
    const component = renderWithRedux(<NavBar/>).container;
    expect(component).toBeInTheDocument();
})

test('to render four buttons', () => {
    const component = renderWithRedux(<NavBar/>);
    const el = component.container.querySelectorAll('button');
    expect(el.length).toEqual(4);
})
