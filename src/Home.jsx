import React from 'react';
import web from "../src/images/img1.jpg";
import Common from "./Common";

const Home = () => {
    return (
        <>
            <Common
                name="Search your favourite recipes at "
                subname="Also find ingredients for preparation and calorie intake for them"
                imgsrc={web}
                visit="/service"
                btname="Get Started"
            />
        </>
    );
};

export default Home;