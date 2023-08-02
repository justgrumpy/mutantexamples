import { officers } from "./data/data";

const getOfficerIds = () => {
    return officers.map(officer => officer.id);
}

export { getOfficerIds };