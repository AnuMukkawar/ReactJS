import React ,{useState} from "react";
import {Link} from "react-router-dom";

 const Header = () => {
    const [sidebar,setSidebar]=useState(false);
    return (
        <>
            <header className="header">
                <div className="container-flex">
                    <div className="nav">
                        <ul className={sidebar ? 'nav-links-sidebar' : "nav-links"} onClick={()=>setSidebar(false)}>
                            <li><Link to="/">Home</Link></li>
                            <li> <Link to="/about">About</Link></li>
                            <li> <Link to="/skills">Skills</Link> </li>
                            <li><Link to="/projects">Projects</Link></li>
                        </ul>
                    </div>
                </div>
            </header>
        </>
    )
}
export {Header};