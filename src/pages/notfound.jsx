import React from 'react'
import { Link } from "react-router-dom";
import Footer from '../components/Footer.jsx';

const notfound = () => {
    return (

        <div className="viewport">

            <div className="section section-beige">
                <div className="section__boxcontainer section__boxcontainer-column">
                    <p className="title-large">404 - Page Not Found</p>
                    <div className="section__menu section__menu-column" style={{ marginTop: 50 }}>
                        <Link to="/" className="section__menu__button">Home Page</Link>
                    </div>
                </div>
            </div>

            <Footer />

        </div>

    )
}

export default notfound
