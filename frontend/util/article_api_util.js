
export const articles = () => {
  return $.ajax({
    method: 'GET',
    url: 'https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=86847d711eb84d41accab719e9920a5d',
    data: {}
  })
}