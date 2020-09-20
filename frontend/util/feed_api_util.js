export const grabFeeds = user => {
  return $.ajax({
    method: 'GET',
    url: `api/users/${user.id}/feeds`
  })
}

export const newFeed = (user, source, pheed) => {
  debugger
  return $.ajax({
    method: 'POST',
    url: `api/users/${user.id}/feeds`,
    data: { source, pheed }
  })
}