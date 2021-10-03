import React from 'react';
import Navbar from './components/Navbar';
import Section from './components/Section';
import heroHouse from "./assets/hero_house.svg";
import rectangleOC from "./assets/rectangle_options_contract.svg";
import rectangleAM from "./assets/rectangle_agent_matching.svg";
import imgTopAgents from "./assets/img_top_agents.svg";
import imgNoObligation from "./assets/img_no_obligation.svg";
import imgCreditChecks from "./assets/img_credit_checks.svg";
import avatarPerson1 from "./assets/avatar_person_1.png";
import avatarPerson2 from "./assets/avatar_person_2.png";

const App = () => {
    return (
        <div>
            <Navbar />
            <div className="viewport">

                <div className="section section-beige section-hero" style={{ paddingRight: 0 }}>
                    <div className="section__box">
                        <h1 className="title-major">Get cash today for letting us sell your home in the future</h1>
                        <p className="text-main" style={{ marginTop: 17 }}>We offer you cash upfront for the right to sell your home in the future. When you decide to sell, we will introduce you to the best real estate agent in your area and get you top dollar for your home.</p>
                        <div className="section__menu" style={{ marginTop: 47 }}>
                            <button className="section__menu__button" style={{ marginRight: 40 }}>Get Started</button>
                            <button className="section__menu__button-link">Learn More</button>
                        </div>
                    </div>
                    <div className="section__box" style={{ paddingLeft: 36 }}>
                        <img className="Hero__House" src={heroHouse} alt="Hero House" />
                    </div>
                </div>
                <div className="section">
                    <div className="section__box" style={{ paddingRight: 20 }}>
                        <p className="title-large">What we do</p>
                        <img className="section__box__img img-rectangle" src={rectangleOC} alt="Hero House" />
                        <div className="title-small text-color-primary" style={{ paddingBottom: 9 }}>Options Contracts</div>
                        <div className="text-regular">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tortor augue, tempor et bibendum in, consecte.</div>
                    </div>
                    <div className="section__box" style={{ paddingLeft: 20 }}>
                        <p className="title-large title-large-empty"> </p>
                        <img className="section__box__img img-rectangle" src={rectangleAM} alt="Hero House" />
                        <div className="title-small text-color-primary" style={{ paddingBottom: 9 }}>Agent Matching</div>
                        <div className="text-regular">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tortor augue, tempor et bibendum in, consecte.</div>
                    </div>
                </div>
                <div className="section section-beige">
                    <div className="section__box section__box-small">
                        <h1 className="title-large">Our homeowner-first approach</h1>
                        <p className="text-main" style={{ marginTop: 28 }}>Our process is simple, straightforward, and transparent. We believe so deeply in it that we will pay you cash upfront to introduce you to the best in the business.</p>
                    </div>
                    <div className="section__box section__box-large" style={{ paddingLeft: 96 }}>
                        <div className="listitem">
                            <div className="listitem__bulletcircle">1</div>
                            <div className="listitem__content">
                                <div className="title-small">Complete a short form</div>
                                <div className="text-regular">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tortor augue, tempor et bibendum in, consecte.</div>
                            </div>
                        </div>
                        <div className="listitem">
                            <div className="listitem__bulletcircle">2</div>
                            <div className="listitem__content">
                                <div className="title-small">Complete a short form</div>
                                <div className="text-regular">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tortor augue, tempor et bibendum in, consecte.</div>
                            </div>
                        </div>
                        <div className="listitem" style={{ marginBottom: 0 }}>
                            <div className="listitem__bulletcircle">3</div>
                            <div className="listitem__content">
                                <div className="title-small">Complete a short form</div>
                                <div className="text-regular">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tortor augue, tempor et bibendum in, consecte.</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section section-column">
                    <p className="title-large" style={{ marginBottom: 30 }}>Designed just for you</p>
                    <div className="section__boxcontainer">
                        <div className="section__box section__box-1-3">
                            <div className="section__box__imgcontainer">
                                <img className="section__box__img img-small" src={imgTopAgents} alt="Top Agents" />
                            </div>
                            <div className="title-small text-color-primary" style={{ paddingBottom: 9 }}>Options Contracts</div>
                            <div className="text-regular">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tortor augue, tempor et bibendum in, consecte.</div>
                        </div>
                        <div className="section__box section__box-1-3">
                            <div className="section__box__imgcontainer">
                                <img className="section__box__img img-small" style={{ height: '90%' }} src={imgNoObligation} alt="No Obligation" />
                            </div>
                            <div className="title-small text-color-primary" style={{ paddingBottom: 9 }}>Agent Matching</div>
                            <div className="text-regular">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tortor augue, tempor et bibendum in, consecte.</div>
                        </div>
                        <div className="section__box section__box-1-3">
                            <div className="section__box__imgcontainer">
                                <img className="section__box__img img-small" style={{ maxHeight: 240 }} src={imgCreditChecks} alt="No Credit Checks" />
                            </div>
                            <div className="title-small text-color-primary" style={{ paddingBottom: 9 }}>Agent Matching</div>
                            <div className="text-regular">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tortor augue, tempor et bibendum in, consecte.</div>
                        </div>
                    </div>
                </div>
                <div className="section section-dark section-column">
                    <div className="triangle-topright"></div>
                    <div className="section__boxcontainer" style={{ padding: 35 }}>
                        <div className="section__box" style={{ paddingRight: 20 }}>
                            <div className="card">
                                <div className="card__person">
                                    <div className="card__person__avatar">
                                        <img src={avatarPerson1} alt="Person 1 Avatar" />
                                    </div>
                                    <div className="listitem__content">
                                        <div className="title-small text-color-primary">Katie</div>
                                        <div className="text-main text-color-dark">Proud Homeowner</div>
                                    </div>
                                </div>
                                <div className="text-regular">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tortor augue, tempor et bibendum in, consectetur ut massa. Orci varius natoque penatibus et magnis dis parturient.</div>
                            </div>
                        </div>
                        <div className="section__box" style={{ paddingLeft: 20 }}>
                            <div className="card">
                                <div className="card__person">
                                    <div className="card__person__avatar">
                                        <img src={avatarPerson2} alt="Person 2 Avatar" />
                                    </div>
                                    <div className="listitem__content">
                                        <div className="title-small text-color-primary">Paul</div>
                                        <div className="text-main text-color-dark">Proud Homeowner</div>
                                    </div>
                                </div>
                                <div className="text-regular">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tortor augue, tempor et bibendum in, consectetur ut massa. Orci varius natoque penatibus et magnis dis parturient.</div>
                            </div>
                        </div>
                    </div>
                    <div className="triangle-bottomleft"></div>
                </div>
            </div>
        </div>
    )
}

export default App
