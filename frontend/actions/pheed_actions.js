import * as APIUtil from '../util/pheed_api_util'

export const RECEIVE_PHEEDS = 'RECEIVE_PHEEDS';

export const receivePheeds = pheeds => {
  //debugger
  return ({
    type: RECEIVE_PHEEDS,
    pheeds
  })
}

export const addPheedsToState = pheeds => dispatch => {
  // debugger
  dispatch(receivePheeds(pheeds))
  localStorage.setItem('pheeds', JSON.stringify(pheeds))
  // debugger
  // if (!Boolean(localStorage.articles)) dispatch(curryArticles(pheeds))
}

// export const addPheedsToState = user => dispatch => {
//   //debugger
//   return (
//     APIUtil.grabPheeds(user).then(obj => {
//       // debugger
//       dispatch(receivePheeds(obj))
//       localStorage.setItem('pheeds', JSON.stringify(obj))
//       if (!Boolean(localArts)) dispatch(curryArticles(obj))
//     }
//     )
//   )
// }