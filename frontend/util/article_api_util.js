
export const articles = () => {
  return $.ajax({
    method: 'GET',
    url: 'https://gnews.io/api/v3/top-news?token=ce9822e9acb082d751e4281f0e909034',
    data: {}
  })
}