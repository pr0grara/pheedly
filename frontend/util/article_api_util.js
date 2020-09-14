export const articles = (source) => {
  return $.ajax({
    method: 'GET',
    url: `https://api.breakingapi.com/news?type=headlines&source=${source}&locale=en-US&page_size=50&api_key=${window.breaking}`
    // url: `https://api.breakingapi.com/news?type=everything&sources=${source}&locale=en-US&time_period=last_day&page=50&api_key=${window.breaking}`
  })
}

// export const newsRiver = (source) => {
//   //debugger
//   return $.ajax({
//     method: 'GET',
//     url: `https://api.newsriver.io/v2/search?query=website.domainName%3Avice.com&sortBy=discoverDate&sortOrder=DESC&limit=15`,
//     headers: {
//       'Authorization': "sBBqsGXiYgF0Db5OV5tAw8NMNsCnDjmSxlV6AFSDMGGM1n2pHZrSf1gT2PUujH1YaQA"
//     }
//   }
//   )
//   .fail(function (xhr, status, error) {
//     //Ajax request failed.
//     var errorMessage = xhr.status + ': ' + xhr.statusText
//     alert('Error - ' + errorMessage);
//     //debugger
//   })
//   .done(res => {
//     localStorage.setItem('newsRiver', "poop")
//     console.log(res)
//     //debugger
//   })
//   .always(() => {
//   })
// }

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