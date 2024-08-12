import './Homepage.css';
import logo from './assets/nba-logo.png';
import { useNavigate } from 'react-router-dom';
import SearchBar from './components/SearchBar';
import SampleDashboard from './components/SampleDashboard';
import CommunityInsightsSample from './components/CommunityInsightsSample';
import Footer from './components/Footer';

function Homepage() {


    let History = useNavigate();

    const handleClick = () => {
        History("/get-stats");
    }


    return (
        <div className="home-page">
            <div>
                <SearchBar />
            </div>
            <div className="call-to-action">
                {/* <button  onClick={handleClick}>Get Started</button> */}
            </div>
            <div>
                <SampleDashboard />
            </div>
            <div>
                <CommunityInsightsSample />
            </div>
            <div>
                <Footer />
            </div>
        </div>
    );
}

export default Homepage;