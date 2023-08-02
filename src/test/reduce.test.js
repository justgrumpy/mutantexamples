import { getMostExpPilot } from '../reduce'

describe('map', () => {
    it('map', () => {
        const expected = {
            id: 5,
            name: "Salacious B. Crumb",
            years: 30
        };
        expect(getMostExpPilot()).toEqual(expected);
    });
});
