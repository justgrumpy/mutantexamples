const doStuff = (result) => {
    let resultData = [];
    if (result.aRecords !== undefined && result.aRecords.length > 0) {
        for (let i = 0; i < result.aRecords.length; i++) {
            resultData.push({
                "createdDate": new Date(result.aRecords[i].CreatedDate).getTime(),
                "createdByName": result.aRecords[i].Name,
                "createdByFirst": result.aRecords[i].FirstName,
                "jobTitle": result.aRecords[i].Job_Title
            })
        }
    }
    if (result.bRecords !== undefined && result.bRecords.length > 0) {
        for (let i = 0; i < result.bRecords.length; i++) {
            resultData.push({
                "createdDate": new Date(result.bRecords[i].CreatedDate).getTime(),
                "createdByName": result.bRecords[i].Name,
                "createdByFirst": result.bRecords[i].FirstName,
                "jobTitle": result.bRecords[i].Job_Title
            })
        }
    }
    return resultData;
}

export { doStuff };