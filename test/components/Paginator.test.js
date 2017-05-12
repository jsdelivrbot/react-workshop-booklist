import {Paginator} from '../../src/components/Paginator';
import React from 'react';
import renderer from 'react-test-renderer';
import _ from 'lodash';

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

    it('It should render change next page correctly', () => {

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

        let moveToNextPage = tree.children[4];
        moveToNextPage.props.onClick();

        expect(_.flattenDeep(props.currentPage.mock.calls))
            .toEqual([2]);
    });

    it('It should render change previous page correctly', () => {

        let props = {
            total_books: 300,
            current_page: 4,
            elements_x_page: 10,
            totalBooks: jest.fn(),
            currentPage: jest.fn(),
            elementsXPage: jest.fn()
        };

        let tree = renderer.create(
            <Paginator {...props} />
        ).toJSON();

        let moveToPreviousPage = tree.children[2];
        moveToPreviousPage.props.onClick();

        expect(_.flattenDeep(props.currentPage.mock.calls))
            .toEqual([3]);
    });

    it('It should render change first page correctly', () => {

        let props = {
            total_books: 300,
            current_page: 29,
            elements_x_page: 10,
            totalBooks: jest.fn(),
            currentPage: jest.fn(),
            elementsXPage: jest.fn()
        };

        let tree = renderer.create(
            <Paginator {...props} />
        ).toJSON();

        let moveToFirstPage = tree.children[1];
        moveToFirstPage.props.onClick();

        expect(_.flattenDeep(props.currentPage.mock.calls))
            .toEqual([1]);
    });

    it('It should render change last page correctly', () => {

        let props = {
            total_books: 300,
            current_page: 5,
            elements_x_page: 10,
            totalBooks: jest.fn(),
            currentPage: jest.fn(),
            elementsXPage: jest.fn()
        };

        let tree = renderer.create(
            <Paginator {...props} />
        ).toJSON();

        let moveToLastPage = tree.children[5];
        moveToLastPage.props.onClick();

        expect(_.flattenDeep(props.currentPage.mock.calls))
            .toEqual([30]);
    });
});