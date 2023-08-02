import { isPositive, doSomething } from '../simpleExample'

describe('stuff', () => {
    it('isPositive should return true if the number is positive', () => {
        expect(isPositive(5)).toBe(true);
        // more tests
        // expect(isPositive(-3)).toBe(false);
        // expect(isPositive(0)).toBe(false);
    });

    it('doSomething should do something', () => {
        doSomething();
        // better test
        // const spy = jest.spyOn(console, 'log');
        // doSomething();
        // expect(spy).toHaveBeenCalledWith('Something done.');
    });
});
