import React, { useState, useRef } from "react";
import { BsInfoCircleFill } from 'react-icons/bs';
import PageHeaderContent from "../../components/pageHeaderContent";
import { Animate } from "react-simple-animate";
import './styles.scss';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();
    const [formData, setFormData] = useState({
        from_name: '',
        from_email: '',
        message: '',
        to_name: 'EmailJS team' // You can set this to a fixed value or make it dynamic
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_yed3hte', 'template_zbv6z01', form.current, 'ooCBL0f1Tyy0xDBH0')
          .then(
            (result) => {
              console.log('SUCCESS!', result.text);
              alert('Email sent successfully!');
            },
            (error) => {
              console.log('FAILED...', error.text);
              alert('Failed to send email: ' + error.text);
            }
          );
    };

    return (
        <section id="contact" className="contact">
            <PageHeaderContent
                headerText="My Contact"
                icon={<BsInfoCircleFill size={40} />}
            />
            <div className="contact__content">
                <Animate
                    play
                    duration={1}
                    delay={0}
                    start={{
                        transform: "translateX(-200px)"
                    }}
                    end={{
                        transform: "translateX(0px)"
                    }}>
                    <h3 className="contact__content__header-text">
                        Let's Talk
                    </h3>
                </Animate>
                <Animate
                    play
                    duration={1}
                    delay={0}
                    start={{
                        transform: "translateX(200px)"
                    }}
                    end={{
                        transform: "translateX(0px)"
                    }}>
                    <form className="contact__content__form" ref={form} onSubmit={sendEmail}>
                        <div className="contact__content__form__controlswrapper">
                            <div>
                                <input
                                    required
                                    name="from_name"
                                    className="inputName"
                                    type="text"
                                    value={formData.from_name}
                                    onChange={handleChange}
                                />
                                <label htmlFor="from_name" className="nameLabel">Name</label>
                            </div>
                            <div>
                                <input
                                    required
                                    name="from_email"
                                    className="inputEmail"
                                    type="text"
                                    value={formData.from_email}
                                    onChange={handleChange}
                                />
                                <label htmlFor="from_email" className="emailLabel">Email</label>
                            </div>
                            <div>
                                <textarea
                                    required
                                    name="message"
                                    className="inputDescription"
                                    rows="5"
                                    value={formData.message}
                                    onChange={handleChange}
                                />
                                <label htmlFor="message" className="descriptionLabel">Description</label>
                            </div>
                            <input
                                type="hidden"
                                name="to_name"
                                value={formData.to_name}
                            />
                        </div>
                        <button type="submit">Submit</button>
                    </form>
                </Animate>
            </div>
        </section>
    );
};

export default Contact;
