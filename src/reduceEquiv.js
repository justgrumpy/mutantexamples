import { pilotsYears } from "./data/data";

// Equivalent for loop
function getMostExpPilot() {
  let mostExpPilot = {};
  for (let i = 0; i < pilotsYears.length; i++) {
    const pilot = pilotsYears[i];
    if (!mostExpPilot.years || mostExpPilot.years <= pilot.years) {
      mostExpPilot = pilot;
    }
  }
  return mostExpPilot
}

export { getMostExpPilot };