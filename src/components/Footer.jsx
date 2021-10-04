import React from 'react'
import logoWhite from "../assets/ho_logo_white.svg";
import { Link } from "react-router-dom";

const Footer = props => {

    return (
        <div className="viewport viewport-footer">
            <div className={`section section-column ${props.background === "beige" ? "section-beige" : ""}`}>
                <p className="title-large" style={{ marginBottom: 20 }}>Join HomeOptions Today</p>
                <p className="text-main text-footerparagraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tortor augue, tempor et bibendum in, consectetur ut massa.</p>
                <div className="section__menu section__menu-column" style={{ marginTop: 35 }}>
                    <button className="section__menu__button">Get Started</button>
                    <Link to="/how" className="section__menu__button-link">Learn More</Link>
                </div>
            </div>

            <div className="section section-black section-column ">
                <div className="section__boxcontainer section__boxcontainer-footer">
                    <div className="section__box section__box-footer">
                        <img src={logoWhite} alt="White Logo" />
                    </div>
                    <div className="section__box section__box-footer section__box-footer-half">
                        <p className="text-footer">Our Markets</p>
                        <p className="text-regular">Nevada<br />California<br />Colorado<br />Washington<br />Georgia<br />Virginia</p>
                    </div>
                    <div className="section__box section__box-footer section__box-footer-half">
                        <p className="text-footer">About</p>
                        <Link to="/how" className="text-link text-regular">How It Works</Link>
                        <Link to="/about" className="text-link text-regular">About Us</Link>
                    </div>
                    <div className="section__box section__box-footer section__box-footer-half">
                        <p className="text-footer">Legal</p>
                        <Link to="/" className="text-link text-regular">Privacy Policy</Link>
                        <Link to="/" className="text-link text-regular">Terms and Conditions</Link>
                    </div>
                    <div className="section__box section__box-footer section__box-footer-half">
                        <p className="text-footer">Contact Us</p>
                        <p className="text-regular">213-336-5089<br />contact@homeoptions.ai</p>
                    </div>
                </div>
                <hr />
                <div className="section__box section__box-footer">
                    <p className="text-copyright">
                        Illustrations by Vijay Verma from Ouch!<br />
                        Copyright © 2021 HomeOptions, Inc. All Rights Reserved. DRE License #01738265.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Footer
