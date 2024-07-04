import React, { useState } from 'react'
import './App.css'
import { Outlet } from 'react-router-dom'

function App() {
    const [compare, setCompare] = useState([])

    return (
        <>
            <Outlet context={{ compare, setCompare }} />
        </>
    )
}

export default App
