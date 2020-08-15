export const articles = (source) => {
  return $.ajax({
    method: 'GET',
    url: `https://api.breakingapi.com/news?type=headlines&source=${source}&locale=en-US&page_size=100&api_key=${window.breaking}`
  })
}

