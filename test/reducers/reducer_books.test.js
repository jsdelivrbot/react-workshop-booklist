import BooksReducer from '../../src/reducers/reducer_books';

describe('reducer_books', ()  => {


        it('it should return [] with undefined args', () => {

            var expected = [];

            var state = BooksReducer(undefined, {});
            expect(state).toEqual(expected);
        });

        it('it should return [] because of ACTION_UNKOWN ', () => {

            var expected = [];

            var action = {
                type: 'ACTION_UNKNOWN',
                payload: {
                    data: 3
                }
            };

            var state = BooksReducer(undefined, action);
            expect(state).toEqual(expected);
        });


        it('it should return payload.data because of action.type = FETCH_BOOKS ', () => {

            var expected = [
                {
                    id: 2,
                    title: 'title 2',
                    author: 'author 2',
                    pages: 100,
                    publisher: 'publisher 2',
                    isbn: 234567890
                }
            ];

            var action = {
                type: 'FETCH_BOOKS',
                payload: {
                    data: [
                        {
                            id: 2,
                            title: 'title 2',
                            author: 'author 2',
                            pages: 100,
                            publisher: 'publisher 2',
                            isbn: 234567890
                        }
                    ]
                }
            };

            var state = BooksReducer(undefined, action);
            expect(state).toEqual(expected);
        });
});