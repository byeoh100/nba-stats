import { useState } from 'react'
import Player from './Player'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import LightDarkMode from '../../components/LightDarkMode'

function StatsFetch() {
    const [reqPlayerName, setReqPlayerName] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        setReqPlayerName(e.target[0].value)
    }

    return (
        <>
            <div className='title'>
                <h1>NBA STATS GETTER</h1>
                <LightDarkMode />
            </div>
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
                {reqPlayerName.length == 0 ? undefined : <Player playerName={reqPlayerName} />}
            </div>
        </>
    )
}

export default StatsFetch