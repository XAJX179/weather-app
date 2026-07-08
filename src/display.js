export const Display = (() => {
  const form = document.querySelector("form");
  const display = document.querySelector("ul.display");
  const message = document.querySelector("p.message");

  let minTempItem = document.createElement("li");
  let minTempItemP = document.createElement("p");
  let maxTempItem = document.createElement("li");
  let maxTempItemP = document.createElement("p");
  let tempItem = document.createElement("li");
  let tempItemP = document.createElement("p");
  display.append(minTempItem);
  minTempItem.append(minTempItemP);
  display.append(maxTempItem);
  maxTempItem.append(maxTempItemP);
  display.append(tempItem);
  tempItem.append(tempItemP);

  function weatherReport(result) {
    let minTemp = result.days[0].tempmin;
    let maxTemp = result.days[0].tempmax;
    let temp = result.days[0].temp;

    minTempItemP.textContent = "Minimum : " + minTemp;
    maxTempItemP.textContent = "Maximum : " + maxTemp;
    tempItemP.textContent = "Average: " + temp;
    message.textContent = "";
  }
  function getForm() {
    return form;
  }

  function addLoader() {
    message.textContent = "Loading...";
  }

  return { weatherReport, addLoader, getForm };
})();
