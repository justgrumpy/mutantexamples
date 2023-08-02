import { pilotsFactions } from "./data/data";

const getFaction = (faction) => {
    return pilotsFactions.filter(pilot => pilot.faction === faction);
}

export { getFaction };