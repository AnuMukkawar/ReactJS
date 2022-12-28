// import GitHubIcon from '@mui/icons-material/GitHub';
// import LinkedInIcon from '@mui/icons-material/LinkedIn';
// import profile from "./profile.jpg";
import React from 'react';
import './Home.css';
import { Social } from './Social';
import {Data} from './Data.js'
export function Home() {
  return (
    <section className="home section" id="home">
      <div className="home__container container grid">
        <div className="home__content grid">
        <Social/>
        <div className="home__img"></div>
        <div>
          <Data/>
        </div>
        </div>
      </div>
    </section>
  );
}
