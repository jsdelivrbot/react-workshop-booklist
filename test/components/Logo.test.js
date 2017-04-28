import React from 'react';
import Logo from '../../src/components/Logo';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
    const app = renderer.create(
        <Logo />
    ).toJSON();

    expect(app).toMatchSnapshot();
});