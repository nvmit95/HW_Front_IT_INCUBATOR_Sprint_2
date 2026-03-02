export type initialState = {
  themeId: number
}
const initState = {
  themeId: 1,
}

export const themeReducer = (state = initState, action: ThemeActionType): initialState => { // fix any
  switch (action.type) {
    case "SET_THEME_ID":
    return{...state, themeId: action.id }
    default:
      return state
  }
}


// type ThemeActionType = {
//   type: 'SET_THEME_ID'
//   id: number
// }
//
// export const changeThemeId = (id: number): ThemeActionType => ({type: 'SET_THEME_ID', id}) // fix any
//


export type ThemeActionType = ReturnType<typeof changeThemeId>

export const changeThemeId = (id: number) => ({
  type: 'SET_THEME_ID',
  id
} as const)