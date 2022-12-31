import React ,{useState}from "react";
import "./Projects.css";

const Projects=()=>{
    const [toggelState, setToggleState]=useState(0);

    const toggleTab=(index)=>{
        setToggleState(index);
    }
    return(
        <section className="projects section" id="projects">
            <h2 className="section__title"> Personal Projects</h2>
            <span className="section__subtitle">what I build on my own</span>

            <div className="projects__container container grid">
                <div className="projects__content">
                    <div>
                        <i class="uil uil-money-bill-stack projects__icon"></i> 
                        <h3 className="projects__title"> Money Manager App</h3>
                    </div>
                    <span className="projects__button" onClick={()=>toggleTab(1)}>View More <i className="uil uil-arrow-right projects__button-icon"></i></span>

                    <div className={toggelState===1 ? "projects__modal active-modal" : "projects__modal"}>
                        <div className="projects__modal-content">
                            <i onClick={()=>toggleTab(0)} className="uil uil-times projects__modal-close"></i>

                            <h3 className="projetcs__modal-title">Money Manager App</h3>
                            <p className="projects__modal-decription">
                                This app is having functionality to add expences and income. It having option to delete the expences as per our convinence.
                            </p>
                            <ul className="projects__modal-projects grid">
                                <li className="projects__modal-projects">
                                    <i className="uil uil-check-circle projects__modal-icon"></i>
                                    <p className="projects__modal-info">
                                        Frontend deployed url- https://sage-praline-e25abd.netlify.app/
                                    </p>
                                </li>
                                <li className="projects__modal-projects">
                                    <i className="uil uil-check-circle projects__modal-icon"></i>
                                    <p className="projects__modal-info">
                                        Backend deployed url- https://money-manager-nqfx.onrender.com/
                                    </p>
                                </li>
                            
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="projects__content">
                    <div>
                        <i class="uil uil-film projects__icon"></i>
                        <h3 className="projects__title">Movie Flix App</h3>
                    </div>
                    <span className="projects__button" onClick={()=>toggleTab(2)}>View More <i className="uil uil-arrow-right projects__button-icon"></i></span>

                    <div className={toggelState===2 ? "projects__modal active-modal" : "projects__modal"}>
                        <div className="projects__modal-content">
                            <i onClick={()=>toggleTab(0)} className="uil uil-times projects__modal-close"></i>

                            <h3 className="projetcs__modal-title">Movie Flix App</h3>
                            <p className="projects__modal-decription">
                                This app is for showing the movies list. We can add/delete movies.
                            </p>
                            <ul className="projects__modal-projects grid">
                                
                                <li className="projects__modal-projects">
                                    <i className="uil uil-check-circle projects__modal-icon"></i>
                                    <p className="projects__modal-info">
                                        Frontend source code- ReactJS/tree/master/movie-app/
                                    </p>
                                </li>
                                <li className="projects__modal-projects">
                                    <i className="uil uil-check-circle projects__modal-icon"></i>
                                    <p className="projects__modal-info">
                                        Backend source code- Backend-MovieApp/
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>       
    )
}

export {Projects};