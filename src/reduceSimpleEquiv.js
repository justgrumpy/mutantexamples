import { pilotsYears } from "./data/data";

// Equivalent for loop
function getTotalYears() {
  let totalYears = 0;
  for (let i = 0; i < pilotsYears.length; i++) {
    totalYears += pilotsYears[i].years;
  }
  return totalYears
}

export { getTotalYears };