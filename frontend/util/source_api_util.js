
export const grabSourcesFromFeeds = user => {
  // debugger
  return $.ajax({
    method: 'GET',
    url: `api/users/${user.id}/feeds`
  })
}

export const findMatchingSources = query => {
  // debugger
  return $.ajax({
    method: 'GET',
    url: 'api/sources',
    data: {query: query}
  })
}