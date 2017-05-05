import MainReducer from '../../src/reducers/index';

describe('reducers', () => {

    describe('MainReducer', () => {

        it('should return the initial state', () => {
            var expected = {
                "books": [],
                "filter_book": [],
                "total_books": [],
                "current_page": [],
                "elements_x_page": []
            };
            var state = MainReducer(undefined, {});
            expect(state).toEqual(expected);
        });

        it('should return state when action is not on reducer', () => {
            var expected = {
                "books": [],
                "filter_book": [],
                "total_books": [],
                "current_page": [],
                "elements_x_page": []
            };
            var action = {
                type: 'RANDOM_ACTION'
            };
            var state = MainReducer(undefined, action);
            expect(state).toEqual(expected);
        });

        it('should list of books in reducer', () => {
            var book = {
                id: 1,
                title: 'title',
                author: 'author',
                pages: 100,
                publisher: 'publisher',
                isbn: 123456789
            };
            var action = {
                type: 'FETCH_BOOKS',
                payload: {
                    data: [book]
                }
            };
            var state = MainReducer(undefined, action);
            expect(state.books).toEqual(action.payload.data);
        });

        it('should add new filter in reducer', () => {
            var action = {
                type: 'FILTER_BOOKS',
                payload: {
                    data: 'ddd'
                }
            };
            var state = MainReducer(undefined, action);
            expect(state.filter_book).toEqual(action.payload.data);
        });

        it('should add total books of the list in reducer', () => {
            var action = {
                type: 'TOTAL_BOOKS',
                payload: {
                    data: 100
                }
            };
            var state = MainReducer(undefined, action);
            expect(state.total_books).toEqual(action.payload.data);
        });

        it('should add current page in reducer', () => {
            var action = {
                type: 'CURRENT_PAGE',
                payload: {
                    data: 4
                }
            };
            var state = MainReducer(undefined, action);
            expect(state.current_page).toEqual(action.payload.data);
        });

        it('should add elements per page in reducer', () => {
            var action = {
                type: 'ELEMENTS_X_PAGE',
                payload: {
                    data: 10
                }
            };
            var state = MainReducer(undefined, action);
            expect(state.elements_x_page).toEqual(action.payload.data);
        });
    });
});