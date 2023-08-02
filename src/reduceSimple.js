import { pilotsYears } from "./data/data";

const getTotalYears = () => {
    return pilotsYears.reduce((acc, pilot) => acc + pilot.years, 0);
}

export { getTotalYears };