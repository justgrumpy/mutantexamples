
const getRecordData = (recordData) => {
    return recordData?.map((record) => {
        return {
            createdDate: new Date(record.CreatedDate).getTime(),
            createdByName: record.Name,
            createdByFirst: record.FirstName,
            jobTitle: record.Job_Title,
        };
    });
}

const doStuff = (result) => {
    const aRecordData = getRecordData(result.aRecords);
    const bRecordData = getRecordData(result.bRecords);
    return [...(aRecordData ?? []), ...(bRecordData ?? [])];
}

export { doStuff };