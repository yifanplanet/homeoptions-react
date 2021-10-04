import React from 'react'
import Footer from '../components/Footer.jsx';
import imgCity from "../assets/img_city.svg";

const about = () => {
    return (

        <div className="viewport">

            <div className="section section-beige">
                <div className="section__boxcontainer section__boxcontainer-column">
                    <div className="triangle-topright" />
                    <p className="text-quote">We believe that donec tortor augue, tempor et bibendum in, consectetur ut massa. Orci varius natoque penatibus et magnis di </p>
                    <div className="triangle-bottomleft triangle-bottomleft-primary" />
                </div>
            </div>
            
            <div className="section section-story">
                <div className="section__box">
                    <img className="section__box__img img-huge" src={imgCity} alt="City Img" />
                </div>
                <div className="section__box" style={{ paddingLeft: "2vw" }}>
                    <p className="title-large" style={{ marginBottom: 20 }}>Our Story</p>
                    <p className="text-regular">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tortor augue, tempor et bibendum in, consecte. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tortor augue, tempor et bibendum in, consectetur ut massa. 
                        <br /><br />
                        Nulla luctus ligula eu nibh pellentesque. Donec tortor augue, tempor et bibendum in, consectetur ut massa. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                </div>
            </div>

            <Footer background={"beige"} />

        </div>

    )
}

export default about
