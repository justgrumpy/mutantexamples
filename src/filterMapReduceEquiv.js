import { personnel } from "./data/data";

function getJediScore() {
    // Equivalent code using for loops
    let totalJediScore = 0;
    for (let i = 0; i < personnel.length; i++) {
        const person = personnel[i];
        if (person.isForceUser) {
            totalJediScore += person.pilotingScore + person.shootingScore;
        }
    }
    return totalJediScore
}

export { getJediScore };