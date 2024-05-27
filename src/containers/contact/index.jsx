// import React from "react";
// import {BsInfoCircleFill} from 'react-icons/bs'
// import PageHeaderContent from "../../components/pageHeaderContent"
// import { Animate } from "react-simple-animate";
// import './styles.scss'
// const Contact = ()=>{
//     return(
//         <section id="contact" className="contact">
//         <PageHeaderContent
//         headerText= "My Contact"
//         icon={<BsInfoCircleFill size={40} />}
        
//         />
//         <div className="contact__content">
//         <Animate
//         play
//         duration={1}
//         delay={0}
//         start ={{
//             transform: "translateX(-200px)"
//         }}
//         end={{
//             transform: "translateX(0px)"
//         }}>
//             <h3 className="contact__content__header-text">
//                Let's Talk 
//             </h3>

//         </Animate>
//         <Animate
//         play
//         duration={1}
//         delay={0}
//         start ={{
//             transform: "translateX(200px)"
//         }}
//         end={{
//             transform: "translateX(0px)"
//         }}>
//             <div className="contact__content__form">
//                 <div className= "contact__content__form__controlswrapper">
//                     <div>
//                     <input required name="name" className= "inputName" type={'text'}/>
//                     <label htmlFor="name" className="nameLabel">Name</label>
//                     </div>

//                     <div>
//                     <input required name="email" className= "inputEmail" type={'text'}/>
//                     <label htmlFor="email" className="emailLabel">Email</label>

//                     </div>

//                     <div>
//                     <textarea required name="description" className= "inputDescription" type={'text'} rows="5"/>
//                     <label htmlFor="description" className="descriptionLabel">Description</label>

//                     </div>
//                 </div>
//                 <button>Submit</button>

//             </div>
//             </Animate>


//         </div>
//     </section>
//     )
// }
// export default Contact;
import React, { useState } from "react";
import { BsInfoCircleFill } from 'react-icons/bs';
import PageHeaderContent from "../../components/pageHeaderContent";
import { Animate } from "react-simple-animate";
import './styles.scss';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        description: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:5000/send', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            const result = await response.json();
            if (response.ok) {
                alert('Email sent successfully!');
            } else {
                alert('Failed to send email: ' + result.error);
            }
        } catch (error) {
            alert('Error: ' + error.message);
        }
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
                    <form className="contact__content__form" onSubmit={handleSubmit}>
                        <div className="contact__content__form__controlswrapper">
                            <div>
                                <input
                                    required
                                    name="name"
                                    className="inputName"
                                    type="text"
                                    value={formData.name}
                                    onChange={handleChange}
                                />
                                <label htmlFor="name" className="nameLabel">Name</label>
                            </div>
                            <div>
                                <input
                                    required
                                    name="email"
                                    className="inputEmail"
                                    type="text"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                                <label htmlFor="email" className="emailLabel">Email</label>
                            </div>
                            <div>
                                <textarea
                                    required
                                    name="description"
                                    className="inputDescription"
                                    rows="5"
                                    value={formData.description}
                                    onChange={handleChange}
                                />
                                <label htmlFor="description" className="descriptionLabel">Description</label>
                            </div>
                        </div>
                        <button type="submit">Submit</button>
                    </form>
                </Animate>
            </div>
        </section>
    );
};

export default Contact;