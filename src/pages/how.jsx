import React from 'react'
import imgBedHome from "../assets/img_bedhome.svg";
import imgSofaHome from "../assets/img_sofahome.svg";
import briefcase from "../assets/img_briefcase.svg";
import Footer from '../components/Footer.jsx';

const how = () => {
    return (
        <div className="viewport">
            <div className="section section-beige section-hero">
                <div className="section__box">
                    <h1 className="title-major">An option built just for you</h1>
                    <p className="text-main" style={{ marginTop: 20 }}>We pay you NOW to work with the best local real estate agent when you’re ready to sell your home later. No kidding. To start, all you have to do is fill out the form to see if you qualify. Easy peasy.</p>
                    <div className="section__menu" style={{ marginTop: 50 }}>
                        <button className="section__menu__button">Get Started</button>
                    </div>
                </div>
                <div className="section__box">
                    <img className="hero__image" src={imgBedHome} alt="Sofa Home" />
                </div>
            </div>

            <div className="section">
                <div className="section__boxcontainer">
                    <div className="section__box section__box-small section__box-align-bottom hidden-mobile">
                        <img className="section__box__img img-large" src={briefcase} alt="Briefcase" />
                    </div>
                    <div className="section__box section__box-large section__box-listitem">
                        <p className="title-large" style={{ marginBottom: 40 }}>Get started now</p>
                        <div className="listitem">
                            <div className="listitem__bulletcircle listitem__bulletcircle-light">1</div>
                            <div className="listitem__content">
                                <div className="title-small" style={{ marginBottom: 9 }}>Complete a short form</div>
                                <div className="text-regular">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tortor augue, tempor et bibendum in, consecte.</div>
                            </div>
                        </div>
                        <div className="listitem">
                            <div className="listitem__bulletcircle listitem__bulletcircle-light">2</div>
                            <div className="listitem__content">
                                <div className="title-small" style={{ marginBottom: 9 }}>You get the money today</div>
                                <div className="text-regular">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tortor augue, tempor et bibendum in, consecte.</div>
                            </div>
                        </div>
                        <div className="listitem" style={{ marginBottom: 0 }}>
                            <div className="listitem__bulletcircle listitem__bulletcircle-light">3</div>
                            <div className="listitem__content">
                                <div className="title-small" style={{ marginBottom: 9 }}>You sell when you are ready</div>
                                <div className="text-regular">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tortor augue, tempor et bibendum in, consecte.</div>
                            </div>
                        </div>
                    </div>
                    <div className="section__box section__box-small section__box-align-bottom hidden-desktop">
                        <img className="section__box__img img-large" src={briefcase} alt="Briefcase" />
                    </div>
                </div>
            </div>

            <div className="section section-beige">
                <div className="section__boxcontainer">
                    <div className="section__box section__box-large section__box-margin-100-right">
                        <p className="title-large" style={{ marginBottom: 40 }}>When you’re ready to sell</p>
                        <div className="listitem">
                            <div className="listitem__bulletcircle">1</div>
                            <div className="listitem__content">
                                <div className="title-small" style={{ marginBottom: 9 }}>Complete a short form</div>
                                <div className="text-regular">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tortor augue, tempor et bibendum in, consecte.</div>
                            </div>
                        </div>
                        <div className="listitem">
                            <div className="listitem__bulletcircle">2</div>
                            <div className="listitem__content">
                                <div className="title-small" style={{ marginBottom: 9 }}>You get the money today</div>
                                <div className="text-regular">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tortor augue, tempor et bibendum in, consecte.</div>
                            </div>
                        </div>
                        <div className="listitem" style={{ marginBottom: 0 }}>
                            <div className="listitem__bulletcircle">3</div>
                            <div className="listitem__content">
                                <div className="title-small" style={{ marginBottom: 9 }}>You sell when you are ready</div>
                                <div className="text-regular">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tortor augue, tempor et bibendum in, consecte.</div>
                            </div>
                        </div>
                    </div>
                    <div className="section__box section__box-small section__box-align-bottom">
                        <img className="section__box__img img-large" src={imgSofaHome} alt="Sofa Home" />
                    </div>
                </div>
            </div>

            <div className="section section-column">
                <div className="section__boxcontainer"><p className="title-large title-large-qa">Your questions answered</p></div>
                <div className="section__boxcontainer">
                    <div className="section__box section__box-left">
                        <div className="listitem__content">
                            <div className="title-small title-qa text-color-primary">What exactly does HomeOptions do?</div>
                            <div className="text-regular">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tortor augue, tempor et bibendum in, consecte. Ipsum dolor sit amet, consectetur adipiscing elit. Donec tortor augue, tempor et bibendum in, consectetur massa. </div>
                        </div>
                        <div className="listitem__content qaitem-margin">
                            <div className="title-small title-qa text-color-primary">Who can use HomeOptions?</div>
                            <div className="text-regular">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tortor augue, tempor et bibendum in, consecte. Ipsum dolor sit amet, consectetur adipiscing elit. Donec tortor augue, tempor et bibendum in, consectetur massa. </div>
                        </div>
                        <div className="listitem__content qaitem-margin">
                            <div className="title-small title-qa text-color-primary">What exactly does HomeOptions do?</div>
                            <div className="text-regular">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tortor augue, tempor et bibendum in, consecte. Ipsum dolor sit amet, consectetur adipiscing elit. Donec tortor augue, tempor et bibendum in, consectetur massa. </div>
                        </div>
                    </div>
                    <div className="section__box section__box-right">
                        <div className="listitem__content">
                            <div className="title-small title-qa text-color-primary">Who can use HomeOptions?</div>
                            <div className="text-regular">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tortor augue, tempor et bibendum in, consecte. Ipsum dolor sit amet, consectetur adipiscing elit. Donec tortor augue, tempor et bibendum in, consectetur massa. </div>
                        </div>
                        <div className="listitem__content qaitem-margin">
                            <div className="title-small title-qa text-color-primary">What exactly does HomeOptions do?</div>
                            <div className="text-regular">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tortor augue, tempor et bibendum in, consecte. Ipsum dolor sit amet, consectetur adipiscing elit. Donec tortor augue, tempor et bibendum in, consectetur massa. </div>
                        </div>
                        <div className="listitem__content qaitem-margin">
                            <div className="title-small title-qa text-color-primary">Who can use HomeOptions?</div>
                            <div className="text-regular">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tortor augue, tempor et bibendum in, consecte. Ipsum dolor sit amet, consectetur adipiscing elit. Donec tortor augue, tempor et bibendum in, consectetur massa. </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <Footer background={"beige"}/>

        </div>

    )
}

export default how
