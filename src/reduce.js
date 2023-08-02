import { pilotsYears } from "./data/data";

const getMostExpPilot = () => {
    return pilotsYears.reduce((oldest, pilot) => {
        return (oldest.years || 0) > pilot.years ? oldest : pilot;
    }, {});
}

export { getMostExpPilot };