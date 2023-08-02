import { getTotalYears } from '../reduceSimpleEquiv'

describe('map', () => {
    it('map', () => {
        const expected = 112;
        expect(getTotalYears()).toEqual(expected);
    });
});
