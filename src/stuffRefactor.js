const getRecordData = (recordData) => {
    return recordData?.map((record) => {
        return { createdByName: record.Name };
    });
}

const doStuff = (result) => {
    const aRecordData = getRecordData(result.aRecords);
    const bRecordData = getRecordData(result.bRecords);
    return [...(aRecordData ?? []), ...(bRecordData ?? [])];
}

export { doStuff };