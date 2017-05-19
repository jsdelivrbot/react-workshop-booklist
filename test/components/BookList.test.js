import {BookList} from '../../src/components/BookList';
import React from 'react';
import renderer from 'react-test-renderer';
import _ from 'lodash';

var initialCase = {};

describe('BookList component', () => {

    beforeAll(() => {
        initialCase = {
            books: [],
            filter_book: '',
            elements_x_page: 10,
            current_page: 1
        }
    });

    beforeEach(() => {
        initialCase.fetchBooks = jest.fn();
        initialCase.totalBooks = jest.fn();
        initialCase.elementsXPage = jest.fn();
        initialCase.currentPage = jest.fn();
    });

    it('It should render an initial booklist', () => {

        let tree = renderer.create(
            <BookList {...initialCase} />
        ).toJSON();

        expect(tree).toMatchSnapshot();
    });

    it('It should call fetchBooks once', () => {

        let tree = renderer.create(
            <BookList {...initialCase} />
        ).toJSON();

        expect(initialCase.fetchBooks.mock.calls.length).toBe(1);
    });

    it('It should show as books as elements per page', () => {

        let currentCase = {...initialCase,
            books: [{
                id: 1,
                title: 'title 1',
                author: 'author 1',
                pages: 100,
                publisher: 'publisher 1',
                isbn: 234567890
            },{
                id: 2,
                title: 'title 2',
                author: 'author 2',
                pages: 100,
                publisher: 'publisher 2',
                isbn: 234567891
            },{
                id: 3,
                title: 'title 3',
                author: 'author 3',
                pages: 100,
                publisher: 'publisher 3',
                isbn: 234567893
            }
            ],
            elements_x_page: 2
        };

        let tree = renderer.create(
            <BookList {...currentCase} />
        ).toJSON();

        expect(tree.children[1].children.length).toBe(2);

        //TODO Pending change by a component Book.
        let bookDivTitle1 = tree.children[1].children[0].children[0];
        let bookDivTitle2 = tree.children[1].children[1].children[0];
        expect(bookDivTitle1).toEqual('title 1');
        expect(bookDivTitle2).toEqual('title 2');
    });

    //TODO pending tests ...
    // - filter book list correct
    // - filter book list incorrect
    // - current_page different 1

});