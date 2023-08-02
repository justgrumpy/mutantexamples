function performOperations(operationName, someObject) {
    someObject.item1 = false;
    someObject.item2 = false;
    someObject.item3 = false;
    const operations = {
        A: () => { someObject.item1 = true },
        B: () => { someObject.item2 = true },
        C: () => { someObject.item3 = true }
    }
    operations[operationName]();
}

export { performOperations };
