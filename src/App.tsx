import React from 'react'
import { Navbar } from './Components/Navbar/Navbar'

function App (): React.JSX.Element {
    return (
        // eslint-disable-next-line react/react-in-jsx-scope
        <div className='App'>
            <Navbar />
            <h1>Hola bros</h1>
        </div>
    )
}

export default App
