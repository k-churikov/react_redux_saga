import { showAlert } from "./actions"
import { CREATE_POST } from "./types"

const forbidden = ['fuck', 'spam', 'kill']

export function forbiddenWordsMiddleware({ dispatch }) {
  return function(next) {
    return function(action) {
      if (action.type === CREATE_POST) {
        const found = forbidden.filter(word => action.payload.title.includes(word))

        if (found.length) {
          return dispatch(showAlert('This is spam!'))
        }
      }
      return next(action)
    }
  }
}