import React from "react";
import "./About.css";
import AboutImg from "./profile.jpg";
import {Info} from "./Info";

const About=()=>{
    return(
        <section className="about section" id="about">
            <h2 className="section__title">About Me</h2>
            <span className="section__subtitle">My introduction</span>
            <div className="about__container container grid">
                <img src= {AboutImg} alt="" className="about__img"></img>
                <div className="about__data">
                    <Info/>

                    <p className="about__description">
                     I completed my graduation in computer science and enginerring in 2019. 
                     I am Full stack developer, I create web pages with UI user interface.
                     Currently,I am working as Skills Developer at Aera Technology, Pune. I have 3 years of experience in SQL.
                     Now, I want to explore new opportunities in full stack development.
                    </p>

                    <a href="https://drive.google.com/file/d/15ovWpdprf6qzZWei-3K4VCsAv_--KF-X/view?usp=sharing" className="button button--flex" target="_blank" rel="noreferrer"> Download CV  <i class="uil uil-file-download-alt"></i></a>
                </div>
            </div>
        </section>
    )
}

export {About};