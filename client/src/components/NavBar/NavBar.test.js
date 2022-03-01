import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { fireEvent, prettyDOM } from '@testing-library/react';
import { render } from '@testing-library/react';
import NavBar from './NavBar.jsx';
import store from '../../store/index'
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

function renderWithRedux(component){

    return {
        ...render(<Provider store={store}><BrowserRouter>{component}</BrowserRouter></Provider>)
    }
}

test('renders content', () => {
    const component = renderWithRedux(<NavBar/>).container;
    expect(component).toBeInTheDocument();
})

test('to render four buttons', () => {
    const component = renderWithRedux(<NavBar/>);
    const el = component.container.querySelectorAll('button');
    expect(el.length).toEqual(4);
})
