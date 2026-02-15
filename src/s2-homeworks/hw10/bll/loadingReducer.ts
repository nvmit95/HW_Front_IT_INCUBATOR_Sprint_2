export type initialState = {
  isLoading: boolean,
}

const initState: initialState = {
  isLoading: false,
}

export const loadingReducer = (state = initState, action: LoadingActionType): initialState => { // fix any
  switch (action.type) {
    // пишет студент  // need to fix
    case 'CHANGE_LOADING': {
      return {...state, isLoading: action.isLoading}
    }

    default:
      return state
  }
}

// type AppActions =
//   | LoadingActionType
//   | ThemeActionType

type LoadingActionType = {
  type: 'CHANGE_LOADING'
  isLoading: boolean
}

export const loadingAC = (isLoading: boolean): LoadingActionType => ({
  type: 'CHANGE_LOADING',
  isLoading,
})
