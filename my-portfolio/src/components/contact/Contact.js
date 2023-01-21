import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "./Contact.css"
const Contact=()=>{
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_pomrghd', 'template_sd0wo3m', form.current, 'a0mcgQe3STRTbhtO8')
       e.target.reset();
    };
    return(
        <section className='contact section' id='contact'>
            <h2 className='section__title'>Get in touch</h2>
            <span className='section__subtitle'>Contact Me</span>

            <div className='contact__container container grid'>
                <div className='contact__content'>
                <h3 className='contact__title contact__content_'>Talk to me</h3>
                        <div className='contact__card'>
                            <i className='bx bx-mail-send contact__card-icon'></i>
                            <h3 className='contact__card-title'>Email</h3>
                            <span className='contact__card-data'>anumukkawar10@gmail.com</span>
                            <br />
                            <a href='mailto:anumukkawar10@gmail.com' className='contact__button'>Write me
                            <i className='bx bx-right-arrow-alt contact'></i></a>
                        </div>
                    
                        <div className='contact__card'>
                            <i className='uil uil-phone-alt contact__card-icon'></i>
                            <h3 className='contact__card-title'>Call Me</h3>
                            <span className='contact__card-data'>8830352223</span>
                   </div>
                </div>
                
                <div className='contact__content'>
                    <h3 className='contact__title contact__content_'>Write me your message</h3>

                    <form ref={form} onSubmit={sendEmail} className='contact__form'>
                        <div className='contact__form-div'>
                            <label className='contact__form-tag'>Name</label>
                            <input type="text" name='name' className='contact__form-input' placeholder='Enter your name '/>
                        </div>

                        <div className='contact__form-div'>
                            <label className='contact__form-tag'>Email</label>
                            <input type="email" name='email' className='contact__form-input' placeholder='Enter your email '/>
                        </div>

                        <div className='contact__form-div contact__form-area'>
                            <label className='contact__form-tag'>message</label>
                            <textarea name="message" cols="30" rows="10" className="contact__form-input" placeholder='Enter your message '></textarea>
                            
                        </div>
                        <button className='contact__button button button-flex'>Send Message</button>
                    </form>
                    </div>
                </div>
            
        </section>
    )
}

export {Contact};