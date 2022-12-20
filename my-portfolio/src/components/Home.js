import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import profile from "./profile.jpg";
import React from 'react';

export function Home() {
  return (
    <div className="App-header">
      <div>
        <GitHubIcon/> <br/>
        <LinkedInIcon/>
      </div>
      <div>
        <header>Hi, I am Anuja Mukkawar <br />Full Stack Developer</header>
      </div>
      <div>
        <img src={profile} className="App-logo" alt="" />
      </div>
    </div>
  );
}
