import {FilterBook} from '../../src/components/FilterBook';
import React from 'react';
import renderer from 'react-test-renderer';
import _ from 'lodash';

var initialCase = {};

describe('FilterBook component', () => {

    beforeAll(() => {
        initialCase = {

        }
    });

    beforeEach(() => {
        initialCase.filterBooks = jest.fn();
        initialCase.currentPage = jest.fn();
    });

    it('It should render an initial filterbook', () => {

        let tree = renderer.create(
            <FilterBook {...initialCase} />
        ).toJSON();

        expect(tree).toMatchSnapshot();
    });

    it('It should run the filter on click the button', () => {

        let tree = renderer.create(
            <FilterBook {...initialCase} />
        ).toJSON();

        let inputValue = {
            target: {
                value: 'Clean'
            }
        };

        let inputFilter = tree.children[0];
        inputFilter.props.onChange(inputValue);

        let submitButton = tree.children[1].children[0];
        submitButton.props.onClick();


        expect(_.flattenDeep(initialCase.filterBooks.mock.calls))
            .toEqual(['Clean']);


        expect(_.flattenDeep(initialCase.currentPage.mock.calls))
            .toEqual([1]);
    });

    it('It should run the keyPressEnter if the key is the enter', () => {

        let tree = renderer.create(
            <FilterBook {...initialCase} />
        ).toJSON();

        let inputValue = {
            target: {
                value: 'TextToSend'
            }
        };

        let inputFilter = tree.children[0];
        inputFilter.props.onChange(inputValue);

        inputFilter.props.onKeyPress({key: 'Enter'});

        expect(_.flattenDeep(initialCase.filterBooks.mock.calls))
            .toEqual(['TextToSend']);

        expect(_.flattenDeep(initialCase.currentPage.mock.calls))
            .toEqual([1]);
    });


    it('It should not run the keyPressEnter if the key is not the enter', () => {

        let tree = renderer.create(
            <FilterBook {...initialCase} />
        ).toJSON();

        let inputValue = {
            target: {
                value: 'TextToSend'
            }
        };

        let inputFilter = tree.children[0];
        inputFilter.props.onChange(inputValue);

        inputFilter.props.onKeyPress({key: 'AnyKeyButNotAnEnter'});

        expect(initialCase.filterBooks.mock.calls.length).toBe(0);

        expect(initialCase.currentPage.mock.calls.length).toBe(0);
    });

    it('It should run the keyPressBackSpace if the key is the backspace and term.length < 2', () => {

        let tree = renderer.create(
            <FilterBook {...initialCase} />
        ).toJSON();

        let inputValue = {
            target: {
                value: 'T'
            }
        };

        let inputFilter = tree.children[0];
        inputFilter.props.onChange(inputValue);

        inputFilter.props.onKeyDown({key: 'Backspace'});

        expect(_.flattenDeep(initialCase.filterBooks.mock.calls))
            .toEqual(['']);

        expect(_.flattenDeep(initialCase.currentPage.mock.calls))
            .toEqual([1]);
    });


    it('It should not run the keyPressBackSpace if the key is not the backspace and term.length < 2', () => {

        let tree = renderer.create(
            <FilterBook {...initialCase} />
        ).toJSON();

        let inputValue = {
            target: {
                value: 'T'
            }
        };

        let inputFilter = tree.children[0];
        inputFilter.props.onChange(inputValue);

        inputFilter.props.onKeyDown({key: 'NotBackspaceKey'});

        expect(initialCase.filterBooks.mock.calls.length).toBe(0);

        expect(initialCase.currentPage.mock.calls.length).toBe(0);
    });

    it('It should not run the keyPressBackSpace if the key is the backspace and term.length > 1', () => {

        let tree = renderer.create(
            <FilterBook {...initialCase} />
        ).toJSON();

        let inputValue = {
            target: {
                value: 'TA'
            }
        };

        let inputFilter = tree.children[0];
        inputFilter.props.onChange(inputValue);

        inputFilter.props.onKeyDown({key: 'Backspace'});

        expect(initialCase.filterBooks.mock.calls.length).toBe(0);

        expect(initialCase.currentPage.mock.calls.length).toBe(0);
    });

});