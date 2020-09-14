export const grabFeeds = user => {
  return $.ajax({
    method: 'GET',
    url: `api/users/${user.id}/feeds`
  })
}

export const newFeed = (user, source) => {
  //debugger
  return $.ajax({
    method: 'POST',
    url: `api/users/${user.id}/feeds`,
    data: { source }
  })
}

export const grabPheeds = user => {
  //debugger
  return $.ajax({
    method: 'GET',
    url: `api/users/${user.id}/pheeds`
  })
}