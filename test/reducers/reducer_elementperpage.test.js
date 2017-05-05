import ElementPerPageReducer from '../../src/reducers/reducer_elementperpage';

describe('reducer_elementperpage', ()  => {


        it('it should return [] with undefined args', () => {

            var expected = [];

            var state = ElementPerPageReducer(undefined, {});
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

            var state = ElementPerPageReducer(undefined, action);
            expect(state).toEqual(expected);
        });


        it('it should return payload.data because of action.type = ELEMENTS_X_PAGE ', () => {

            var expected = 3;

            var action = {
                type: 'ELEMENTS_X_PAGE',
                payload: {
                    data: 3
                }
            };

            var state = ElementPerPageReducer(undefined, action);
            expect(state).toEqual(expected);
        });
});