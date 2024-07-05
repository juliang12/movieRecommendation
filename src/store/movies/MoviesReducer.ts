const initialState = {
    movies: []
}

export const MoviesReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case "set_movies":
            return action.payload
        default:
            return state
    }
}