export const articles = (source) => {
  return $.ajax({
    method: 'GET',
    url: `https://api.breakingapi.com/news?type=headlines&source=${source}&locale=en-US&page_size=50&api_key=${window.breaking}`
    // url: `https://api.breakingapi.com/news?type=everything&sources=${source}&locale=en-US&time_period=last_day&page=50&api_key=${window.breaking}`
  })
}

var setings = (source) => {
  return {
  "async": true,
  "crossDomain": true,
    "url": `https://api.cognitive.microsoft.com/bing/v7.0/news/search?q=site:${source}&cnn.com&freshness=day&count=200&mkt=en-us`,
  "method": "GET",
  "headers": {
    "Ocp-Apim-Subscription-Key": `${window.bing}`
  }
  }
}

export const bing = (source) => {
  return (
  $.ajax(setings(source))
  .done(res => {
    console.log(res);
  })
  .fail(err => {
    console.log(err.responseText)
  })
  )
}