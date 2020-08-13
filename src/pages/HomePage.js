import React from 'react';
import {Link} from 'react-router-dom';

const HomePage = () => (
    <section>
        <h1>HomePage</h1>
        <span style={{color:"white"}}>
            <Link to="/users" className="button">
                View Users
            </Link>
        </span>
    </section>
)

export default HomePage;