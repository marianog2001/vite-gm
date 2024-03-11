import React from 'react'
import { Navbar } from './Components/Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import { ThemeProvider } from '@mui/material'
import { CustomTheme } from './Components/Common/Theme.tsx'

function App(): React.JSX.Element {
    return (
        <>
        <ThemeProvider theme={CustomTheme}>
            <Navbar />
            <Outlet />
        </ThemeProvider>    
        </>
    )
}

export default App
