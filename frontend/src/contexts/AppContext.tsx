import { createContext, useState } from "react";
import { Backdrop, CircularProgress } from '@mui/material'
import { Ripple } from 'react-preloaders'

export const AppContext = createContext({});

export const AppProvider = ({ children }) => {
    const [loading, setLoading] = useState(false)
    return (
        <AppContext.Provider value={{ setLoading }}>
            {children}
        </AppContext.Provider>
    )
}