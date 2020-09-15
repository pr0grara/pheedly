import * as APIUtil from '../util/pheed_api_util'

export const RECEIVE_PHEEDS = 'RECEIVE_PHEEDS';

export const receivePheeds = pheeds => {
  //debugger
  return ({
    type: RECEIVE_PHEEDS,
    pheeds
  })
}

export const addPheedsToState = user => dispatch => {
  //debugger
  return (
    APIUtil.grabPheeds(user).then(obj => {
      //debugger
      // let localArts = localStorage.articles;
      dispatch(receivePheeds(obj))
      localStorage.setItem('pheeds', JSON.stringify(obj))
      if (!Boolean(localArts)) dispatch(curryArticles(obj))
    }
    )
  )
}