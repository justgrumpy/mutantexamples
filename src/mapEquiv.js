import { officers } from "./data/data";

function getOfficerIds() {
    // Equivalent code using for loop
    let officersIds = [];
    for (let i = 0; i < officers.length; i++) {
        officersIds.push(officers[i].id);
    }
    return officersIds;
}

export { getOfficerIds };