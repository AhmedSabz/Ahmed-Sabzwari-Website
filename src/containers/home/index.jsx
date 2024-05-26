// import React from "react";
// import {useNavigate} from 'react-router-dom';
// import {Animate} from 'react-simple-animate';
// import { FaLinkedin, FaGithub } from 'react-icons/fa';

// import './styles.scss';
// const Home = ()=>{
//     const navigate= useNavigate();
//     const handleNavigateToContactMePage=()=>{
//         navigate('/contact');
//     }
//     const handleNavigateToLinkedInPage=()=>{
//         window.open('https://www.linkedin.com/in/ahmed-sabzwari-4670b8263/', '_blank');
//     }
//     const handleNavigateToGitPage=()=>{
//         window.open('https://github.com/AhmedSabz', '_blank');
//     }
//     return(
//     <section id="home" className="home">
//         <div className="home__text-wrapper">
//         <h1>
//             Hello, I'm Ahmed Sabzwari
//             <br/>
//             Computer Engineer
//         </h1>
//         </div>
//         <Animate play
//             duration={1.5}
//             delay={1}
//             start={{
//                 transform : 'translateY(550px)'
//             }}
//             end={{
//                 transform : 'translatex(0px)'
//             }}>
            
   
//         <div className="home__contact-me-linkedIn">
//         <button onClick={handleNavigateToLinkedInPage}>
//         <FaLinkedin size={20} style={{ marginRight: '8px' }} />

//             LinkedIn</button>
//         </div>
//         <div className="home__contact-me-Git">
//         <button onClick={handleNavigateToGitPage}>
//         <FaGithub size={20} style={{ marginRight: '8px' }} />

//             GitHub</button>
//         </div>
//         </Animate>
       
//     </section>
//     )
// }
// export default Home;
import React from "react";
import { useNavigate } from 'react-router-dom';
import { Animate } from 'react-simple-animate';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import './styles.scss';

const Home = () => {
    const navigate = useNavigate();

    const handleNavigateToContactMePage = () => {
        navigate('/contact');
    };

    const handleNavigateToLinkedInPage = () => {
        window.open('https://www.linkedin.com/in/ahmed-sabzwari-4670b8263/', '_blank');
    };

    const handleNavigateToGitHubPage = () => {
        window.open('https://github.com/AhmedSabz', '_blank');
    };

    return (
        <section id="home" className="home">
            <div className="home__text-wrapper">
                <h1>
                    Hello, I'm Ahmed Sabzwari
                    <br />
                    Computer Engineer
                </h1>
            </div>
            <Animate
                play
                duration={1.5}
                delay={1}
                start={{ transform: 'translateY(550px)' }}
                end={{ transform: 'translateY(0px)' }}
            >
                <div className="home__contact-me">
                    <button onClick={handleNavigateToLinkedInPage}>
                        <FaLinkedin size={20} style={{ marginRight: '8px' }} />
                        LinkedIn
                    </button>
                    <button onClick={handleNavigateToGitHubPage}>
                        <FaGithub size={20} style={{ marginRight: '8px' }} />
                        GitHub
                    </button>
                </div>
            </Animate>
        </section>
    );
};

export default Home;
