
export const articles = () => {
  return $.ajax({
    method: 'GET',
    //url: 'https://gnews.io/api/v3/top-news?token=1ac3f76a880c583e80d4d97ef26b490f',
    //url: 'http://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=86847d711eb84d41accab719e9920a5d', //top 10 techCrunch
    url: 'http://newsapi.org/v2/everything?domains=wsj.com&apiKey=86847d711eb84d41accab719e9920a5d' //all WSJ from 6 months
  })
}