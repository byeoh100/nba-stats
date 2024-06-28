import { useState } from 'react'
import './App.css'
import Player from './Player'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'

function App() {
    const [reqPlayerName, setReqPlayerName] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(e.target[0].value)
        setReqPlayerName(e.target[0].value)
    }

    return (
        <>
            <h1>NBA STATS GETTER</h1>
            <div className="main">
                <form onSubmit={handleSubmit}>
                    <InputGroup className="mb-3">
                        <Form.Control
                            placeholder="Player name"
                            aria-label="Player name"
                            aria-describedby="basic-addon2"
                        />
                        <Button variant="outline-secondary" id="button-addon2" type="submit">
                            Search
                        </Button>
                    </InputGroup>
                </form>
                <Player playerName={reqPlayerName} />
            </div>
        </>
    )
}

export default App
