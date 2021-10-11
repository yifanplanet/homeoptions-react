import React from 'react'
import heroHouse from "../assets/hero_house.svg";
import rectangleOC from "../assets/rectangle_options_contract.svg";
import rectangleAM from "../assets/rectangle_agent_matching.svg";
import imgTopAgents from "../assets/img_top_agents.svg";
import imgNoObligation from "../assets/img_no_obligation.svg";
import imgCreditChecks from "../assets/img_credit_checks.svg";
import avatarPerson1 from "../assets/avatar_person_1.png";
import avatarPerson2 from "../assets/avatar_person_2.png";
import Footer from '../components/Footer.jsx';
import { Link } from "react-router-dom";

const home = () => {
    return (
        <div className="viewport">

            <div className="section section-beige section-hero">
                <div className="section__box">
                    <h1 className="title-major">Let your future real estate agent pay you up to $2,000 today to select them in the future.</h1>
                    <p className="text-main" style={{ marginTop: 17 }}>Jump start your goals with our 100% free service that pays you to join. Whether funding an education, starting a business, or simply fortifying your savings, HomeOptions enables homeowners to capitalize on home ownership like never before.</p>
                    <div className="section__menu" style={{ marginTop: 47 }}>
                        <button className="section__menu__button" style={{ marginRight: 40 }}>Get Started</button>
                        <Link to="/how" className="section__menu__button-link">Learn More</Link>
                    </div>
                </div>
                <div className="section__box">
                    <img className="hero__image" src={heroHouse} alt="Hero House" />
                </div>
            </div>

            <div className="section">
                <div className="section__box section__box-left">
                    <p className="title-large">What we do</p>
                    <img className="section__box__img img-rectangle" src={rectangleOC} alt="Hero House" />
                    <div className="title-small text-color-primary" style={{ paddingBottom: 9 }}>Options Contracts</div>
                    <div className="text-regular">Get paid today for endless options in the future. HomeOptions is providing hassle free incentives to qualified homeowners across America.</div>
                </div>
                <div className="section__box section__box-right">
                    <p className="title-large title-large-empty"> </p>
                    <img className="section__box__img img-rectangle" src={rectangleAM} alt="Hero House" />
                    <div className="title-small text-color-primary" style={{ paddingBottom: 9 }}>Agent Matching</div>
                    <div className="text-regular">Get connected to the best agents in your area when you decide to sell or bring your own agent and let us handle the rest.</div>
                </div>
            </div>

            <div className="section section-beige">
                <div className="section__boxcontainer">
                    <div className="section__box section__box-small">
                        <h1 className="title-large">Our homeowners-first approach</h1>
                        <p className="text-main" style={{ marginTop: 28 }}>Our process is simple, straightforward, and transparent. We believe it so deeply we will pay you cash upfront to introduce you to the best in the business.</p>
                    </div>
                    <div className="section__box section__box-large section__box-listitem">
                        <div className="listitem">
                            <div className="listitem__bulletcircle">1</div>
                            <div className="listitem__content">
                                <div className="title-small" style={{ marginBottom: 9 }}>Get a personalized offer</div>
                                <div className="text-regular">We provide you with an on the spot cash reward offer catered towards your property.</div>
                            </div>
                        </div>
                        <div className="listitem">
                            <div className="listitem__bulletcircle">2</div>
                            <div className="listitem__content">
                                <div className="title-small" style={{ marginBottom: 9 }}>Receive cash today</div>
                                <div className="text-regular">Receive your cash reward in as little as 24 hours for whatever your needs may be.</div>
                            </div>
                        </div>
                        <div className="listitem" style={{ marginBottom: 0 }}>
                            <div className="listitem__bulletcircle">3</div>
                            <div className="listitem__content">
                                <div className="title-small" style={{ marginBottom: 9 }}>Get access to elite agents</div>
                                <div className="text-regular">You gain access to our platform of elite agents in your area free of charge for the next 20 years.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="section section-column">
                <p className="title-large" style={{ marginBottom: 30 }}>Designed for homeowners</p>
                <div className="section__boxcontainer">
                    <div className="section__box section__box-1-3">
                        <div className="section__box__imgcontainer">
                            <img className="section__box__img img-small" src={imgTopAgents} alt="Top Agents" />
                        </div>
                        <div className="title-small text-color-primary" style={{ paddingBottom: 9 }}>Top Agents</div>
                        <div className="text-regular">Get access to proven agents in your area to get the most out of your home whenever you want to sell.</div>
                    </div>
                    <div className="section__box section__box-1-3">
                        <div className="section__box__imgcontainer">
                            <img className="section__box__img img-small" style={{ height: '90%' }} src={imgNoObligation} alt="No Obligation" />
                        </div>
                        <div className="title-small text-color-primary" style={{ paddingBottom: 9 }}>No Obligation</div>
                        <div className="text-regular">Financial incentives without the financial loopholes. There are no hidden fees or costs with our service and you never have to pay us back.</div>
                    </div>
                    <div className="section__box section__box-1-3">
                        <div className="section__box__imgcontainer">
                            <img className="section__box__img img-small" style={{ maxHeight: 240 }} src={imgCreditChecks} alt="No Credit Checks" />
                        </div>
                        <div className="title-small text-color-primary" style={{ paddingBottom: 9 }}>No Credit Checks</div>
                        <div className="text-regular">We serve homeowners, not credit scores. Your incentive and eligibility will never be determined by your financial history.</div>
                    </div>
                </div>
            </div>

            <div className="section section-dark section-column">
                <div className="triangle-topright" />
                <div className="section__boxcontainer section__quotecontainer">
                    <div className="section__box section__box-left">
                        <div className="card">
                            <div className="card__person">
                                <div className="card__person__avatar">
                                    <img src={avatarPerson1} className="avatar__img" alt="Person 1 Avatar" />
                                </div>
                                <div className="listitem__content">
                                    <div className="title-small text-color-primary">Katie</div>
                                    <div className="text-main text-color-dark">Proud Homeowner</div>
                                </div>
                            </div>
                            <div className="text-regular">HomeOptions helped me avoid payday loans. I am ontrack for my bills with my incentive and I couldn’t be happier with how fast I received my cash reward. I look forward to working with you guys whenever I decide to upgrade to a new home.</div>
                        </div>
                    </div>
                    <div className="section__box section__box-right">
                        <div className="card">
                            <div className="card__person">
                                <div className="card__person__avatar">
                                    <img src={avatarPerson2} className="avatar__img" alt="Person 2 Avatar" />
                                </div>
                                <div className="listitem__content">
                                    <div className="title-small text-color-primary">Paul</div>
                                    <div className="text-main text-color-dark">Proud Homeowner</div>
                                </div>
                            </div>
                            <div className="text-regular">I can sleep easy knowing I’ve got experienced real estate agents at my request whenever I decide to move on from my house. The cash reward was the cherry on top that's going straight into our savings for a new condo downtown.</div>
                        </div>
                    </div>
                </div>
                <div className="triangle-bottomleft" />
            </div>

            <Footer />
        </div>

    )
}

export default home
