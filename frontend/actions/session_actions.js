import * as APIUtil from '../util/session_api_util'
import { addSourcesToState } from '../actions/source_actions'
import { addFeedsToState } from '../actions/feed_actions'
import { addPheedsToState } from '../actions/pheed_actions'
import { curryArticles } from '../actions/article_actions'

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const CLEAR_SESSION_ERRORS = 'CLEAR_SESSION_ERRORS';

export const receiveCurrentUser = currentUser => {
  return {
    type: RECEIVE_CURRENT_USER,
    currentUser
  }
};

export const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER,
});

export const receiveErrors = errors => {
  return {
  type: RECEIVE_SESSION_ERRORS,
  errors
  }
};

export const clearErrors = () => {
  return {
    type: CLEAR_SESSION_ERRORS,
    errors: []
  }
}

export const signup = user => dispatch => (
  APIUtil.signup(user).then(user => (
    dispatch(receiveCurrentUser(user))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);

// const uniq = (arr) => {
//   var res = [...arr]
//   res.forEach((ele, idx) => {
//     let count = 0;
//     for (let i = res.length - 1; i > 0; i--) {
//       if (res[i].name === res[idx].name) count++;
//       if (count > 1) {
//         res = res.slice(0, i).concat(res.slice(i + 1));
//         debugger
//         i--
//         count--;
//       }
//     }
//   });
//   debugger
//   return res
// }

const  uniq = arr => {
  var res = {};
  arr.forEach(ele => {
    // debugger
    res[ele.name] = ele;
  })
  return Object.values(res)
}


// const uniq = (arr) => {
  //   var res = [...arr]
  //   arr.forEach((ele, idx) => {
    //     debugger
    //     let count = 0;
    //     for (let i = 0; i < arr.length; i++) {
      //       if (arr[i].name === arr[idx].name) count++;
      //       if (count > 1) {
        //         res = res.slice(0, idx).concat(res.slice(idx + 1));
        //         count--;
        //       }
        //     }
        //   });
        //   debugger
        //   return res
        // }
        
        export const login = user => dispatch => {
          if (Boolean(localStorage.articles) && Date.now() - JSON.parse(localStorage.articles).time > 1800000) {
            localStorage.removeItem('articles')
          }
          return (  
            APIUtil.login(user)
            .then(user => {
              dispatch(receiveCurrentUser(user))
              // debugger
              dispatch(addFeedsToState(user))
              .then(res => {
                var feeds = res.feeds
                var sources = uniq(feeds.map(feed => feed.source))
                var pheeds = uniq(feeds.map(feed => feed.pheed))
                // sources = sources.filter((x, i, a) => a.indexOf(x) == i);
                // pheeds = pheeds.filter((x, i, a) => a.indexOf(x) == i);
                // debugger
                
                // const sources = uniq(feeds.map(feed => feed.source))
                // const pheeds = uniq(feeds.map(feed => feed.pheed))
                // debugger
                
                // pheeds.forEach((pheed, idx) => { //because javascript sucks at simple enumerables...in this case ruby.uniq
                //   let count = 0
                //   for (let i = 0; i < pheeds.length; i++) {
                  //     if (pheeds[i].name === pheed.name) count++
                  //     if (count === 2) {
                    //       pheeds = pheeds.slice(0, idx).concat(pheeds.slice(idx+1))
                    //       count--
                    //     }
                    //   }
                    // })
          // debugger
          debugger
          dispatch(addSourcesToState(sources))
          dispatch(addPheedsToState(pheeds))
        })
        // debugger
        // dispatch(addSourcesToState(user))
        // dispatch(addPheedsToState(user))
      }, err => (dispatch(receiveErrors(err.responseJSON))))
    //   .then(() => {
    //     debugger
    // })
  )
};

export const logout = () => dispatch => (
  APIUtil.logout().then(user => {
    localStorage.removeItem('sources')
    localStorage.removeItem('pheeds')
    localStorage.removeItem('feeds')
    if (Date.now() - JSON.parse(localStorage.articles).time > 60000) {
     localStorage.removeItem('articles')
    }
    dispatch(logoutCurrentUser())
  })
);
