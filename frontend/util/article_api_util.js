export const articles = (source) => {
  // debugger
  return $.ajax({
    method: 'GET',
    //url: 'https://gnews.io/api/v3/top-news?token=1ac3f76a880c583e80d4d97ef26b490f',
    // url: `https://newsapi.org/v2/everything?q=${source}&apiKey=86847d711eb84d41accab719e9920a5d`
    // url: `http://newsapi.org/v2/top-headlines?sources=${source}&apiKey=86847d711eb84d41accab719e9920a5d`, //top 10 techCrunch
    // url: `http://newsapi.org/v2/everything?domains=nationalgeographic.com&apiKey=${window.newsapi}` //all WSJ from 6 months
    // url: `https://gnews.io/api/v3/top-news?token=${window.gnews}`, //gnews safe
    // url: `https://gnews.io/api/v3/search?q=${source}&max=100&token=${window.gnews}`
    // url: `https://gnews.io/api/v3/topics/${source}?token=${window.gnews}`
    // url: `'https://api.currentsapi.services/v1/search?' +
    //         'keywords=Amazon&language=en&' + 
    //         'apiKey=qq-ZiGB8Lp4sUTgRHVpOd3S71DPD_BTDEKKSO7nLipkmp875'`
    url: `https://api.breakingapi.com/news?type=headlines&source=${source}&locale=en-US&page_size=100&api_key=32ADE25102294E59A7DF47210ACE235F`
  })
}

// export const curryArticles = (sources) => {
//   let i = 1;
//   debugger
//   let res = {}
//   articles(sources[1].code)
//     .then(obj => {
//     console.log(obj)
//     debugger
//     res = obj;
//     })
//     // .catch(() => {
//     //   console.log("error")
//     // })
//   // while (sources.length !== 0) {
//   //   debugger
//   //   articles(sources.pop().code).then(obj => {
//   //     debugger
//   //     res[i] = obj;
//   //   })
//   //   i++;
//   // }
//   debugger
//   return res
// }
