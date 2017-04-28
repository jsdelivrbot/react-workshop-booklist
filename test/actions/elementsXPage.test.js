
import { elementsXPage } from '../../src/actions/index';

describe('actions', function() {
    describe('elementsXPage', function () {

        it('should have a type of "ELEMENTS_X_PAGE"', function() {
            expect(elementsXPage().type).toEqual('ELEMENTS_X_PAGE');
        });

        it('should pass on the number of elements we pass in', function() {
            var numElements = 5;
            expect(elementsXPage(numElements).payload.data).toEqual(numElements);
        });
    });
});