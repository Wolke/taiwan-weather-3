# taiwan-weather-2 //: 套件名稱

## Installation //: 安裝方式

```bash
npm install --save taiwan-weather-xxx
```

##​​ Requirements
首先申請中央氣象局 open data 的帳號並得授權碼

## Sample Code

```js
const TaiwanWeather = require(`xxx`);
(async () => {
  let data = await TaiwanWeather(授權碼, `新北市`); //`新北市` 可以換成其他中央氣象局授受的城市名稱

  console.log(data);
})();
```

# License

The MIT license
