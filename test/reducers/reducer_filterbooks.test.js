import FilterBooksReducer from '../../src/reducers/reducer_filterbooks';

describe('reducer_filterbooks', ()  => {


        it('it should return [] with undefined args', () => {

            var expected = [];

            var state = FilterBooksReducer(undefined, {});
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

            var state = FilterBooksReducer(undefined, action);
            expect(state).toEqual(expected);
        });


        it('it should return payload.data because of action.type = FILTER_BOOKS ', () => {

            var expected = 'dev';

            var action = {
                type: 'FILTER_BOOKS',
                payload: {
                    data: 'dev'
                }
            };

            var state = FilterBooksReducer(undefined, action);
            expect(state).toEqual(expected);
        });
});