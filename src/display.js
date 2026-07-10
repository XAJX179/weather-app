export const Display = (() => {
  const form = document.querySelector("form");
  const display = document.querySelector("ul.display");
  const message = document.querySelector("p.message");
  const locationName = document.querySelector("p.location");
  let minTemp;
  let maxTemp;
  let temp;
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

  let toggleScaleBtn = document.createElement("button");
  toggleScaleBtn.classList.add("toggle-scale");
  toggleScaleBtn.textContent = "Show in Fahrenheit (F°)";
  toggleScaleBtn.dataset.scale = "C";
  toggleScaleBtn.style.display = "none";
  display.append(toggleScaleBtn);

  toggleScaleBtn.addEventListener("click", toggleScale);

  function toggleScale(e) {
    if (e.target.dataset.scale == "F") {
      minTempItemP.textContent = "Minimum : " + minTemp + " C°";
      maxTempItemP.textContent = "Maximum : " + maxTemp + " C°";
      tempItemP.textContent = "Average: " + temp + " C°";
      toggleScaleBtn.dataset.scale = "C";
      toggleScaleBtn.textContent = "Show in Fahrenheit (F°)";
    } else {
      minTempItemP.textContent =
        "Minimum : " + (minTemp * 1.8 + 32).toFixed(2) + " F°";
      maxTempItemP.textContent =
        "Maximum : " + (maxTemp * 1.8 + 32).toFixed(2) + " F°";
      tempItemP.textContent =
        "Average: " + (temp * 1.8 + 32).toFixed(2) + " F°";
      toggleScaleBtn.dataset.scale = "F";
      toggleScaleBtn.textContent = "Show in Celsius (C°)";
    }
  }

  function weatherReport(result) {
    minTemp = result.days[0].tempmin;
    maxTemp = result.days[0].tempmax;
    temp = result.days[0].temp;

    minTempItemP.textContent = "Minimum : " + minTemp;
    maxTempItemP.textContent = "Maximum : " + maxTemp;
    tempItemP.textContent = "Average: " + temp;
    sendMessage("");
    locationName.textContent = result.resolvedAddress;
    toggleScaleBtn.style.display = "initial";
  }
  function getForm() {
    return form;
  }

  function addLoader() {
    sendMessage("Loading...");
  }

  function sendMessage(str) {
    message.textContent = str;
  }

  return { weatherReport, addLoader, getForm, sendMessage };
})();
