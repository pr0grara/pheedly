import * as APIUtil from '../util/pheed_api_util'

export const RECEIVE_PHEEDS = 'RECEIVE_PHEEDS';
export const UPDATE_PHEEDS = 'UPDATE_PHEEDS';

export const receivePheeds = pheeds => {
  //debugger
  return ({
    type: RECEIVE_PHEEDS,
    pheeds
  })
}

export const updatePheeds = pheeds => {

  return ({
    type: UPDATE_PHEEDS,
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

export const addNewPheedToState = pheeds => dispatch => {
  dispatch(updatePheeds(pheeds))
  localStorage.pheeds = JSON.stringify(pheeds);
}

