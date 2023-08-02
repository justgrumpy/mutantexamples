import { getOfficerIds } from '../mapEquiv'

describe('map', () => {
    it('map', () => {
        const expected = [20, 24, 56, 88];
        expect(getOfficerIds()).toEqual(expected);
    });
});
