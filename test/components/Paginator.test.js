import {Paginator} from '../../src/components/Paginator';
import React from 'react';
import renderer from 'react-test-renderer';
import _ from 'lodash';

var initialCase = {};

describe('Paginator component', () => {

    beforeAll(() => {
        initialCase = {
            total_books: 300,
            current_page: 1,
            elements_x_page: 10
        }
    });

    beforeEach(() => {
        initialCase.currentPage = jest.fn();
    });

    it('It should render an initial paginator', () => {

        let tree = renderer.create(
            <Paginator {...initialCase} />
        ).toJSON();

        expect(tree).toMatchSnapshot();
    });

    it('It should render change next page correctly', () => {

        let tree = renderer.create(
            <Paginator {...initialCase} />
        ).toJSON();

        let moveToNextPage = tree.children[4];
        moveToNextPage.props.onClick();

        expect(_.flattenDeep(initialCase.currentPage.mock.calls))
            .toEqual([2]);
    });

    it('It should render change previous page correctly', () => {

        let currentCase = {...initialCase, current_page: 4};

        let tree = renderer.create(
            <Paginator {...currentCase} />
        ).toJSON();

        let moveToPreviousPage = tree.children[2];
        moveToPreviousPage.props.onClick();

        expect(_.flattenDeep(currentCase.currentPage.mock.calls))
            .toEqual([3]);
    });

    it('It should render change first page correctly', () => {

        let currentCase = {...initialCase, current_page: 29};

        let tree = renderer.create(
            <Paginator {...currentCase} />
        ).toJSON();

        let moveToFirstPage = tree.children[1];
        moveToFirstPage.props.onClick();

        expect(_.flattenDeep(currentCase.currentPage.mock.calls))
            .toEqual([1]);
    });

    it('It should render change last page correctly', () => {

        let currentCase = {...initialCase, current_page: 5};

        let tree = renderer.create(
            <Paginator {...currentCase} />
        ).toJSON();

        let moveToLastPage = tree.children[5];
        moveToLastPage.props.onClick();

        expect(_.flattenDeep(currentCase.currentPage.mock.calls))
            .toEqual([30]);
    });
});