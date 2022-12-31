import React from "react";
import "./Qualification.css";

const Qualification=()=>{
    return(
        <section className="qualification section">
            <h2 className="section__title"> Qualification</h2>
            <span className="section__subtitle">My personel journey</span>

            <div className="qualification__container container">
                <div className="qualification__tabs">
                    <div className="qualification__button button--flex">
                        <i className="uil uil-graduation-cap qualification__icon"></i>Education
                    </div>

                    <div className="qualification__button button--flex">
                        <i className="uil uil-briefcase-alt qualification__icon"></i>Experience
                    </div>
                </div>
                <div className="qualification__sections">
                    <div className="qualification__content">
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualifiation__title">BE-Computer Science Engineering</h3>
                                <span className="qualification__subtitle">Sanjay Ghodawat Institut, Kolhapur</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calender-alt"></i> 2015-2019
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualifiation__title">HSC</h3>
                                <span className="qualification__subtitle">Shvaji Mahavidyalya, Udgir</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calender-alt"></i> 2014-2015
                                </div>
                            </div>
                            
                        </div>

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualifiation__title">SSC</h3>
                                <span className="qualification__subtitle">Shyamlal Memorial High Schhol, Udgir</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calender-alt"></i> 2012-2013
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>
                    </div>

                    <div className="qualification__content">
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title"> Associate Skills Developer</h3>
                                <span className="qualification__subtitle">Aera Technology, Pune</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calender-alt"></i> 2019-2021
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualifiation__title">Skills Developer</h3>
                                <span className="qualification__subtitle">Aera Technology, Pune</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calender-alt"></i> 2021-current
                                </div>
                            </div>
                            
                        </div>

                    </div>

                </div>
            </div>

        </section>
    )
}

export {Qualification};