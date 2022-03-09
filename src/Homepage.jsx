import React from 'react'
import { Link } from 'react-router-dom'
import './Homepage.css';

function Homepage() {
    return (
        <div className='homepage'>

            <div className='navigate'>

                <div>
                    <Link to="/jobPortal">Jobs & Oppurtunitiees</Link>
                </div>
                <div>
                    <Link to="/campusEvents">Ongoing and upcoming events</Link>
                </div>
                <div>
                    <Link to="/firstyearit">First IT</Link>
                </div>
                <div>
                    <Link to="/firstyearcse">First Cse</Link>
                </div>
                <div>
                    <Link to="/secondyearit">.............</Link>
                </div>
            </div>
        </div>
    )
}

export default Homepage