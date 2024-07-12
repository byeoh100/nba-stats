import './Homepage.css';
import logo from './assets/nba-logo.png';
import { useNavigate } from 'react-router-dom';




function Homepage() {

    
    let History = useNavigate();
    
    const handleClick = () => {
        History ("/get-stats");
    }


    return (
        <div className="home-page">
            <div className="header">
                <img src={logo} alt="NBA Logo" className="logo" />
                <h1>NBA Stats Tracker</h1>
            </div>
            <div className="description">
                <p>Welcome to the ultimate NBA Stats Tracker. Keep up with your favorite teams and players, track live game stats, and dive deep into historical data.</p>
            </div>
            <div className="call-to-action">
                <button  onClick={handleClick}>Get Started</button>
            </div>
        </div>
    );
}

export default Homepage;