import React, { useState } from 'react'
import './App.css'
import { Outlet } from 'react-router-dom'
import NavSearch from './components/NavSearch'
// import ResponsiveNavBar from './components/ResponsiveNavBar'

function App() {
    const [compare, setCompare] = useState([])

    return (
        <>
            {/* <ResponsiveNavBar /> */}
            <NavSearch />
            <Outlet context={{ compare, setCompare }} />
        </>
    )
}

export default App
