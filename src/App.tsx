import React from 'react'
import { Navbar } from './Components/Navbar/Navbar'
import { Outlet } from 'react-router-dom'

function App(): React.JSX.Element {
    return (
        // eslint-disable-next-line react/react-in-jsx-scope
        <>
            <Navbar />
            <Outlet />
        </>
    )
}

export default App
