import { CREATE_POST, FETCHED_POST, HIDE_ALERT, HIDE_LOADER, REQUEST_POST, SHOW_ALERT, SHOW_LOADER } from "./types";

export function showLoader() {
  return {
    type: SHOW_LOADER
  }
}

export function hideLoader() {
  return {
    type: HIDE_LOADER
  }
}

export function showAlert(text) {
  return dispatch => {
    dispatch({
      type: SHOW_ALERT,
      payload: text
    })

    setTimeout(() => dispatch(hideAlert()), 3000)
  }
}

export function hideAlert() {
  return {
    type: HIDE_ALERT,
    payload: null
  }
}

export function createPost(post) {
  return {
    type: CREATE_POST,
    payload: post
  }
}

export function fetchPost() {
  return {
    type: REQUEST_POST
  }
  // return async dispatch => {
  //   try {
  //     const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
  //     const json = await response.json() 
  
  //     dispatch(showLoader())
  //     setTimeout(() => {
  //       dispatch({
  //         type: FETCHED_POST,
  //         payload: json
  //       })
  //       dispatch(hideLoader())
  //     }, 1500)
  //   }
  //   catch (e) {
  //     dispatch(showAlert('Something went wrong!'))
  //     dispatch(hideLoader())
  //   }
  // }
}