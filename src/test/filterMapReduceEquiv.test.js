import { getJediScore } from '../filterMapReduceEquiv'

describe('map', () => {
    it('map', () => {
        const expected = 420;
        expect(getJediScore()).toEqual(expected);
    });
});
