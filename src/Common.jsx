import React from 'react';
import { NavLink } from 'react-router-dom';
import './index.css'

const Common = (props) => {
    return (
        <>
            <section id="header" className="d-flex align-items-center">
                <div className="container-fluid nav bg">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="row">
                                <div className="col-md-6 pt-5 pt-lg-0 order-lg-1 d-flex justify-content-center flex-column">
                                    <h1>{props.name} <strong className="brand-name" >ChefHub</strong> ! </h1>
                                    <h2 className="my-3">
                                        {props.subname}
                                    </h2>
                                    <div className="mt-3 align-center">
                                        <NavLink to={props.visit} className="btn btn-primary my-2 my-sm-0 pa-5 bgB">{props.btname}</NavLink>
                                    </div>
                                </div>
                                <div className="col-lg-6 order-1 order-lg-2 header-img pv4">
                                    <img src={props.imgsrc} className="img-fluid animated" alt="home img" />
                                </div>
                                <div className="pr">
                                    <p className="footerB">
                                        Created by <a href="https://github.com/nsp456"><i>Nishant Pal</i></a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Common;
