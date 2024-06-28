import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import './LightDarkMode.css'

function LightDarkMode() {
    const [darkMode, setDarkMode] = useState(true)
    const handleToggleDarkMode = () => {
        const htmlSelect = document.getElementsByTagName("html")[0]
        htmlSelect.setAttribute("data-bs-theme", htmlSelect.getAttribute("data-bs-theme") === "dark" ? "light" : "dark")
        setDarkMode(!darkMode)
    }

    return (
        <>
            <img src={darkMode ? "./src/assets/dark.png" : "./src/assets/light.png"} className="moon" onClick={handleToggleDarkMode} />
        </>
    )
}

export default LightDarkMode