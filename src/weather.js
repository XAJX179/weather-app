export const Weather = (() => {
  const apiKey = "4CBNJB7UGJTXMMSEDF9QMBRAL";
  const defaultLocation = "delhi";

  async function getData(location = defaultLocation) {
    let url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/\
${location}/today?unitGroup=metric&elements=datetime%2Ctemp%2Ctempmax%2Ctempmin%2Ctzoffset\
&include=current&key=${apiKey}&contentType=json`;

    let response = await fetch(url);
    let data = await response.json();

    return data;
  }

  return { getData };
})();
