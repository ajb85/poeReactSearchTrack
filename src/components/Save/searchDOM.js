// Navigate the DOM tree and save values of interest to build a search object

const conversion = {
  league: "league",
  type: "category",
  base: "base",
  name: "name"
};
const searchObj = {};

// First Row

const searchForm = document.getElementById("search");
const firstRowContainer = searchForm.querySelector(".large-12");

let currentLabel = "";
firstRowContainer.childNodes.forEach(div => {
  // Find labels and associated values for league, type, base
  if (div.classList && div.classList.contains("large-1")) {
    currentLabel = div.querySelector("label.right").getAttribute("for");
  } else if (div.classList && div.classList.contains("large-3")) {
    const key = conversion[currentLabel];
    const value = div.querySelector("a.chosen-single span").textContent;
    searchObj[key] = value
      .split("")
      .filter(char => char !== " ")
      .join(" ");
  }
});
1 3 4 6
// "useless-crap" houses the remainder of the form.
const uselessCrap = searchForm.querySelector(".useless-crap");
// Get the name
searchObj.name = uselessCrap.querySelector("#name").value;

console.log(searchObj);
