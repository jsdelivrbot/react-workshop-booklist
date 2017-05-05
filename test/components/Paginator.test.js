import {Paginator} from '../../src/components/Paginator';
import React from 'react';
import renderer from 'react-test-renderer';

describe('Paginator component', () => {

    it('It should render an initial paginator', () => {

        let props = {
            total_books: 300,
            current_page: 1,
            elements_x_page: 10,
            totalBooks: jest.fn(),
            currentPage: jest.fn(),
            elementsXPage: jest.fn()
        };


        let tree = renderer.create(
            <Paginator {...props} />
        ).toJSON();

        expect(tree).toMatchSnapshot();
    });

});