import { doStuff } from '../stuff'

const recordsIn = {
    aRecords: [
        {
            CreatedDate: 'December 17, 1995 03:24:00',
            Name: 'John Doe',
            FirstName: 'John',
            Job_Title: 'Janitor'
        }
    ],
    bRecords: [
        {
            CreatedDate: 'December 19, 1995 06:11:00',
            Name: 'Bob Jones',
            FirstName: 'Bob',
            Job_Title: 'Manager'
        }
    ]
}

describe('doStuff', () => {
    it('no records', () => {
        const expected = [];
        expect(doStuff({})).toEqual(expected);
    });

    it('all records', () => {
        const expected = [
            { createdByName: "John Doe" },
            { createdByName: "Bob Jones" }
        ];
        expect(doStuff(recordsIn)).toEqual(expected);
    })
});
