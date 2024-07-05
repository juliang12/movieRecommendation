"use client"
import { Provider } from "react-redux"
import { store } from "../store"


interface MoviesProviderProps {
    children: React.ReactNode
}

export const MoviesProvider = ({children}: MoviesProviderProps ) => {
    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}