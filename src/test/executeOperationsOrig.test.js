import { performOperations } from '../executeOperationsOrig'

describe('performOperations', () => {
    xit.each([
        { itemOfInterest: 'A', shouldBeTrue: 'item1', },
        { itemOfInterest: 'B', shouldBeTrue: 'item2', },
        { itemOfInterest: 'C', shouldBeTrue: 'item3', }
    ])('performOperations for $itemOfInterest',
        ({ itemOfInterest, shouldBeTrue }) => {
            let passedObject = {};
            performOperations(itemOfInterest, passedObject);
            const expectedObject = {
                item1: false,
                item2: false,
                item3: false
            }
            expectedObject[shouldBeTrue] = true;
            expect(passedObject).toEqual(expectedObject);
        });
})