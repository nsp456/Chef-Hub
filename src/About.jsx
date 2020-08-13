import React from 'react';
import web from "../src/images/about.jpg";
import Common from "./Common";
import './index.css'

const About = () => {
    return (
        <div className="pt4">
            <Common
                name="Welcome to About Page"
                subname="Click below button to contact us"
                imgsrc={web}
                visit="/contact"
                btname="Contact Now"
            />
        </div>
    );
};

export default About;