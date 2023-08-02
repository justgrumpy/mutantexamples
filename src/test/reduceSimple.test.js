import { getTotalYears } from '../reduceSimple'

describe('map', () => {
    it('map', () => {
        const expected = 112;
        expect(getTotalYears()).toEqual(expected);
    });
});
