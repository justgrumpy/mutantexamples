import { pilotsFactions } from "./data/data";

function getFaction(faction) {
    // Equivalent for loop
    let factionMembers = [];
    for (let i = 0; i < pilotsFactions.length; i++) {
        const pilot = pilotsFactions[i];
        if (pilot.faction === faction) {
            factionMembers.push(pilot);
        }
    }
    return factionMembers;
}

export { getFaction };