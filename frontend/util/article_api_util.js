
export const articles = () => {
  return $.ajax({
    method: 'GET',
    url: 'https://gnews.io/api/v3/top-news?token=1ac3f76a880c583e80d4d97ef26b490f',
    data: {}
  })
}