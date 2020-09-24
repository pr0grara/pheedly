import * as APIUtil from '../util/pheed_api_util'

export const RECEIVE_PHEEDS = 'RECEIVE_PHEEDS';
export const UPDATE_PHEEDS = 'UPDATE_PHEEDS';

export const receivePheeds = pheeds => {
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
  dispatch(receivePheeds(pheeds))
  localStorage.setItem('pheeds', JSON.stringify(pheeds))
}

export const addNewPheedToState = pheeds => dispatch => {
  dispatch(updatePheeds(pheeds))
  localStorage.pheeds = JSON.stringify(pheeds);
}

