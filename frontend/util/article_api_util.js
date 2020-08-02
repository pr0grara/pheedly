
export const articles = () => {
  return $.ajax({
    method: 'GET',
    //url: 'https://gnews.io/api/v3/top-news?token=1ac3f76a880c583e80d4d97ef26b490f',
    //url: 'http://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=86847d711eb84d41accab719e9920a5d', //top 10 techCrunch
    // url: `http://newsapi.org/v2/everything?domains=nationalgeographic.com&apiKey=${window.newsapi}` //all WSJ from 6 months
    url: `https://gnews.io/api/v3/top-news?token=${window.gnews}` //gnews safe
  })
}
var settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://lexper.p.rapidapi.com/v1.1/extract?media=1&url=https%253A%252F%252Fwww.newsbtc.com%252F2020%252F07%252F02%252Fthe-last-time-this-metric-was-this-low-bitcoin-bottomed-at-3200%252F",
  "method": "GET",
  "headers": {
    "x-rapidapi-host": "lexper.p.rapidapi.com",
    "x-rapidapi-key": ""
  }
}

export const fetch = () => {
  return $.ajax(settings).done(function (response) {
      console.log(response);
    });
}
