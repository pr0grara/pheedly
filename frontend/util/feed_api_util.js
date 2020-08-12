export const grabFeeds = user => {
  return $.ajax({
    method: 'GET',
    url: `api/users/${user.id}/feeds`
  })
}
//   .then((res) => {
//     console.log(res)
//   })
// }