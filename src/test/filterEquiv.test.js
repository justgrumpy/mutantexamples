import { getFaction } from '../filterEquiv'

describe('map', () => {
    it('map', () => {
        const expected = [
            {
                faction: "Empire",
                id: 8,
                name: "Ciena Ree"
            },
            {
                faction: "Empire",
                id: 40,
                name: "Iden Versio"
            }
        ];
        expect(getFaction("Empire")).toEqual(expected);
    });
});
