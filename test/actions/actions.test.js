import {
    elementsXPage,
    currentPage,
    totalBooks,
    filterBooks,
    fetchBooks
} from '../../src/actions/index';

describe('actions', () => {

    describe('elementsXPage', () => {
        it('should have a type of "ELEMENTS_X_PAGE"', () => {
            expect(elementsXPage().type).toEqual('ELEMENTS_X_PAGE');
        });

        it('should pass on the number of elements we pass in', () => {
            var numElements = 5;
            expect(elementsXPage(numElements).payload.data).toEqual(numElements);
        });
    });

    describe('currentPage', () => {
        it('should have a type of "CURRENT_PAGE', () => {
            expect(currentPage().type).toEqual('CURRENT_PAGE');
        });

        it('should pass on the number of page we pass in', () => {
            var numPage = 2;
            expect(currentPage(numPage).payload.data).toEqual(numPage);
        });
    });

    describe('totalBooks', () => {
       it('should have a type of "TOTAL_BOOKS', () => {
           expect(totalBooks().type).toEqual('TOTAL_BOOKS');
       });

       it('should pass on the total of books we pass in', () => {
           var books = 125;
           expect(totalBooks(books).payload.data).toEqual(books);
       });
    });

    describe('filterBooks', () => {
        it('should have a type of "FILTER_BOOKS', () => {
            expect(filterBooks().type).toEqual('FILTER_BOOKS');
        });

        it('should pass on the filter of the book we pass in', () => {
            var filter = 'DDD';
            expect(filterBooks(filter).payload.data).toEqual(filter);
        });
    });

    describe('fetchBooks', () => {

        var book = {
            id: 1,
            title: 'title',
            author: 'author',
            pages: 121,
            publisher: 'publisher',
            isbn: 123456789
        };

        var book2 = {
            id: 2,
            title: 'title 2',
            author: 'author 2',
            pages: 100,
            publisher: 'publisher 2',
            isbn: 234567890
        };

        var listBook = [book, book2];

        var fetchBooks = jest.fn();
        fetchBooks.mockReturnValue({
           type: "FETCH_BOOKS",
           payload: listBook
        });

        it('should have a type of "FETCH_BOOKS', () => {
           expect(fetchBooks().type).toEqual('FETCH_BOOKS');
        });

        it('should pass on the list of books we pass in', () => {
           expect(fetchBooks().payload).toEqual(listBook);
        });
    });
});