export const grabFeeds = user => {
  // debugger
  return $.ajax({
    method: 'GET',
    url: `api/users/${user.id}/feeds`
  })
}
//   .then((res) => {
//     console.log(res)
//   })
// }