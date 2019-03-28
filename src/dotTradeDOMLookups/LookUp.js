const searchForm = document.getElementById("search");
//"useless-crap" houses everything except league, type, and base
const uselessCrap = searchForm.querySelector(".useless-crap");

export function getLeagueTypeBase(ltb) {
  // ltb will be defined when loading a link.  Else, we're saving
  const searchObj = {};
  const order = ["league", "type", "base"];
  const firstRowContainer = searchForm.querySelector(".large-12");

  firstRowContainer
    .querySelectorAll("a.chosen-single > span")
    .forEach((ele, i) => {
      ltb !== undefined
        ? _loadLeagueTypeBase(ele, i)
        : _saveLeagueTypeBase(ele, i);
    });
  if (ltb === undefined) {
    return searchObj;
  }

  function _loadLeagueTypeBase(ele, i) {
    // If given arguments, update the form with them
    if (loadParams[order[i]] !== undefined) {
      ele.textContent = loadParams[order[i]];
    }
  }
  function _saveLeagueTypeBase(ele, i) {
    // If no arguments, save values to searchObj
    searchObj[order[i]] = ele.textContent
      .split(" ")
      .filter(char => char.length)
      .join(" ");
  }
}

export function getName(name) {
  let input = uselessCrap.querySelector("#name");
  if (!name) {
    return { name: input.value };
  } else {
    input.value = name;
  }
}

export function getStats(stats) {
  const searchObj = {};

  // Get parent container, iterate over children
  uselessCrap.querySelector(".large-8.column").childNodes.forEach(ele => {
    if (ele.classList) {
      const inputs = ele.querySelectorAll("input[name]");
      // Filter out unwanted elements
      if (inputs.length) {
        inputs.forEach(ele => {
          stats ? _loadStats(ele) : _saveStats(ele);
        });
      }
    }
  });
  if (!stats) return searchObj;

  function _saveStats(ele) {
    const [category, minMax] = ele.getAttribute("name").split("_");
    // ele = <input name="dmg_min" /> -->
    // [category, minMax] = ["dmg", "min"] --> searchObj = { dmg: { min: 0, max: 1000 } }
    searchObj.hasOwnProperty(category)
      ? (searchObj[category][minMax] = ele.value)
      : (searchObj[category] = { [minMax]: ele.value });
  }
  function _loadStats(ele) {
    const [category, minMax] = ele.getAttribute("name").split("_");
    if (stats[category] && stats[category][minMax]) {
      ele.value = stats[category][minMax];
    }
  }
}

export function getSockets(loadParams) {}
