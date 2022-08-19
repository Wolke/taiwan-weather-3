const fetch = require(`node-fetch`);
module.exports = async (key, city) => {
  // key 值就是 授權碼, city 則是要查那個城市，只能用中央氣象局的格式，例如：臺北市，詳資料擷取API線上說明文件的 locatonNam
  let url = `https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=${key}&locationName=${encodeURI(
    city
  )}`; //用 encodeURI 將中文編碼
  let response = await fetch(url);
  let data = await response.json();
  let { weatherElement } = data.records.location[0];
  let [Wx, PoP, MinT, CI, MaxT] = weatherElement.map((i) => {
    return i.time[0].parameter.parameterName;
  });
  return {
    city,
    degree: {
      min: MinT,
      max: MaxT
    },
    weather: Wx,
    feeling: CI,
    chance: PoP
  };
};
