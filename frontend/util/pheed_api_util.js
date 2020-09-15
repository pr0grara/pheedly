export const grabPheeds = user => {
  //debugger
  return $.ajax({
    method: 'GET',
    url: `api/users/${user.id}/pheeds`
  })
}