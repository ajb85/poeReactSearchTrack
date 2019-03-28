const searchForm = document.getElementById("search");
//"useless-crap" houses everything except league, type, and base
const uselessCrap = searchForm.querySelector(".useless-crap");

export function findLeagueTypeBase(searchParams) {
  // searchParams will be defined when loading a link.  Else, we're saving
  const searchObj = {};
  const order = ["league", "type", "base"];
  const firstRowContainer = searchForm.querySelector(".large-12");

  firstRowContainer
    .querySelectorAll("a.chosen-single > span")
    .forEach((ele, i) => {
      searchParams !== undefined
        ? _loadLeagueTypeBase(ele, i)
        : _saveLeagueTypeBase(ele, i);
    });
  if (searchParams === undefined) {
    return searchObj;
  }

  function _loadLeagueTypeBase(ele, i) {
    // If given arguments, update the form with them
    if (searchParams[order[i]] !== undefined) {
      ele.textContent = searchParams[order[i]];
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

export function findName(searchParams) {
  let input = uselessCrap.querySelector("#name");
  if (!searchParams) {
    return { name: input.value };
  } else {
    if (searchParams.name) {
      input.value = searchParams.name;
    }
  }
}

export function findMinMaxValues(searchParams) {
  const searchObj = {};

  ["min", "max"].forEach(minOrMax =>
    uselessCrap
      .querySelectorAll(`input.num[name][placeholder=${minOrMax}]`)
      .forEach(ele => {
        const name = ele.getAttribute("name").split("_");
        if (name[0] !== "group" && name[0] !== "mod") {
          name.length > 2 ? _abyssSockets(ele, name) : _minMax(ele, name);
        } else if (name[0] === "mod") {
          _mods(ele, name, searchObj);
        }
      })
  );

  return searchObj;

  function _abyssSockets(ele, [_, __, minMax]) {
    //console.log("Abyss: ", _, __, minMax);
    if (searchParams) {
      // If the abyss socket min/max doesn't exist, the 'try' will result in
      // an error, triggering the catch, which will do nothing.  Or it will succeed
      // and 'ele' gets a new value
      try {
        ele.value = searchParams.sockets.abyss[minMax];
      } catch (err) {}
    } else {
      if (searchObj.sockets) {
        searchObj.sockets.abyss
          ? (searchObj.sockets.abyss[minMax] = ele.value)
          : (searchObj.sockets.abyss = { [minMax]: ele.value });
      } else {
        searchObj.sockets = { abyss: { [minMax]: ele.value } };
      }
    }
  }

  function _minMax(ele, [dotName, minMax]) {
    //console.log("minMax: ", dotName, minMax);
    if (searchParams) {
      // load code
    } else {
      const conversions = { crit: "critChance", link: "links", q: "quality" };
      // dot trade has some var names I don't like, converting here
      // *** still need to re-write 'requirements' to be more sensical
      const name = conversions[dotName] ? conversions[dotName] : dotName;
      searchObj[name]
        ? (searchObj[name][minMax] = ele.value)
        : (searchObj[name] = { [minMax]: ele.value });
    }
  }
  function _requirements() {}
  function _mods(ele, name) {}
}

//Internal helper functions

/*

Old Code:

export function getStats(stats) {
  const searchObj = {};

  // Get parent container, iterate over children
  uselessCrap.querySelector("div.large-8.column").childNodes.forEach(ele => {
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


export function getSockets(sockets) {
  // uselessCrap.querySelectorAll("div.large-4.columns").forEach(div=>{
  //   const currentLabel = ""
  //   div.childNodes.forEach(ele=>{
  //     if(ele.classList){
  //       const label = ele.querySelector("label.inline.right");
  //       const input = ele.querySelector("")
  //       if(label){
  //         currentLabel = label.textContent;
  //       } else {
  //         sockets ? _loadSockets : _saveSockets
  //       }
  //     }
  //   });
  // });

}

*/
