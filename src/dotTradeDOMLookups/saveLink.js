// Navigate the DOM tree and save values of interest to build a search object
import { getLeagueTypeBase, getName, getStats } from "./lookUp.js";

export default function searchDOM() {
  const leagueTypeBase = getLeagueTypeBase();
  const name = getName();
  const stats = getStats();
  console.log({ ...leagueTypeBase, ...name, ...stats });
}
