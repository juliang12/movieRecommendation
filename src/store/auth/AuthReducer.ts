const initialState = {
    user: [],
    currentUser: {}
}

export const AuthReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case "set_auth":
            return {
                ...state,
                user: action.payload
            }
            case "set_current_user":
            return {
                ...state,
                currentUser: action.payload
            }
        default:
            return state
    }
}