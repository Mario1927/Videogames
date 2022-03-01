import React from 'react';
import { render } from '@testing-library/react';
import store from '../../store/index'
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

export default function renderWithRedux(component){

    return {
        ...render(<Provider store={store}><BrowserRouter>{component}</BrowserRouter></Provider>)
    }
}