function performOperations(operationName, someObject) {
    if (operationName === 'A') {
        someObject.item1 = true;
        someObject.item2 = false;
        someObject.item3 = false;
    } else if (operationName === 'B') {
        someObject.item1 = false;
        someObject.item2 = true;
        someObject.item3 = false;
    } else if (operationName === 'C') {
        someObject.item1 = false;
        someObject.item2 = false;
        someObject.item3 = true;
    }
}

export { performOperations };
