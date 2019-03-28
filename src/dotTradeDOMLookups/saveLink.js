// Navigate the DOM tree and save values of interest to build a search object
import { findLeagueTypeBase, findName, findMinMaxValues } from "./lookUp.js";

export default function searchDOM() {
  const leagueTypeBase = findLeagueTypeBase();
  const name = findName();
  const minMax = findMinMaxValues();
  console.log({ ...leagueTypeBase, ...name, ...minMax });
}
