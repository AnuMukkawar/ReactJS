import React from 'react';
import "./Contact.css"
const Contact=()=>{
    return(
        <section className='contact section' id='contact'>
            <h2 className='section__title'>Get in touch</h2>
            <span className='section__subtitle'>Contact Me</span>

            <div className='contact__container container grid'>
                <div className='contact__content'>
                        <div className='contact__card'>
                            <i className='bx bx-mail-send contact__card-icon'></i>
                            <h3 className='contact__card-title'>Email</h3>
                            <span className='contact__card-data'>anumukkawar10@gmail.com</span>
                            <br />
                            <a href='mailto:anumukkawar10@gmail.com' className='contact__button'>Write me
                            <i className='bx bx-right-arrow-alt contact'></i></a>
                        </div>
                    </div>
                        <div className='contact__content'>
                        <div className='contact__card'>
                            <i className='uil uil-phone-alt contact__card-icon'></i>
                            <h3 className='contact__card-title'>Call Me</h3>
                            <span className='contact__card-data'>8830352223</span>
                   </div>
                </div>
            </div>
        </section>
    )
}

export {Contact};