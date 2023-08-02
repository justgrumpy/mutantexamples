const doStuff = (result) => {
    let resultData = [];
    if (result.aRecords !== undefined && result.aRecords.length > 0) {
        for (let i = 0; i < result.aRecords.length; i++) {
            resultData.push({ "createdByName": result.aRecords[i].Name })
        }
    }
    if (result.bRecords !== undefined && result.bRecords.length > 0) {
        for (let i = 0; i < result.bRecords.length; i++) {
            resultData.push({ "createdByName": result.bRecords[i].Name })
        }
    }
    return resultData;
}

export { doStuff };