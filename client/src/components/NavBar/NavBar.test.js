import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { fireEvent, prettyDOM, cleanup } from '@testing-library/react';
import NavBar from './NavBar.jsx';
import renderWithRedux from '../Test/renderWithRedux.js';
import { useParams } from 'react-router-dom';

describe('<NavBar />', () => {
    let component;

    beforeEach(() => {
        component = renderWithRedux(<NavBar location={() => useParams()}/>)
    });

    afterEach(() => {
        cleanup();
    })

    test('should render content', () => {
        expect(component.container).toBeInTheDocument();
    });

    test('should render four buttons', () => {
        const el = component.container.querySelectorAll('button');
        expect(el.length).toEqual(4);
    });

    test('should render a search form', () => {
        const el = component.getByPlaceholderText('Search games by name...');
        expect(el).toBeInTheDocument();        
    });
})




