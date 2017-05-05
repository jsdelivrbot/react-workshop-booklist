import CurrentPageReducer from '../../src/reducers/reducer_currentpage';

describe('reducer_currentpage', ()  => {


        it('it should return [] with undefined args', () => {

            var expected = [];

            var state = CurrentPageReducer(undefined, {});
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

            var state = CurrentPageReducer(undefined, action);
            expect(state).toEqual(expected);
        });


        it('it should return payload.data because of action.type = CURRENT_PAGE ', () => {

            var expected = 3;

            var action = {
                type: 'CURRENT_PAGE',
                payload: {
                    data: 3
                }
            };

            var state = CurrentPageReducer(undefined, action);
            expect(state).toEqual(expected);
        });
});