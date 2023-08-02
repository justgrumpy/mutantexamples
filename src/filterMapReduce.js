import { personnel } from "./data/data";

const getJediScore = () => {
    return personnel
        .filter(person => person.isForceUser)
        .map(jedi => jedi.pilotingScore + jedi.shootingScore)
        .reduce((acc, score) => acc + score, 0);
}

export { getJediScore };