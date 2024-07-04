import React, { useState } from 'react'
import './App.css'
import { Outlet } from 'react-router-dom'
import NavSearch from './components/NavSearch'

function App() {
    const [compare, setCompare] = useState([])

    return (
        <>
            <NavSearch />
            <Outlet context={{ compare, setCompare }} />
        </>
    )
}

export default App
