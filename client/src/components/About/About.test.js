import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import About from './About.jsx';

test('renders content', () => {
    const component = render(<About />)
})