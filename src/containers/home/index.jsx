import React from "react";
import { useNavigate } from 'react-router-dom';
import { Animate } from 'react-simple-animate';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import './styles.scss';
import ImageSeven from '../../images/image7.png'


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
    const handleNavigateToResume = () => {
        window.open('https://docs.google.com/document/d/1my4jou_826jtM-ytUY76hiQ8ofx6J9m_nLjSvj1JnTg/preview', '_blank');
    };
    const handleNavigateToLeetCode = () => {
        window.open('https://leetcode.com/u/AhmedSabz/', '_blank');
    };

    
    return (
        <section id="home" className="home">
            <div className="home__image">
              <img src={ImageSeven}></img>   

            </div>
            <div className="home__text-wrapper">
                <h1>
                    Hello, I'm Ahmed Sabzwari
                    <br />
                    Computer Engineer
                    <br />
                    <h3>
                I am proficient in C++, C, as well as embedded programming on the arduino microcontroller.
                <br />
                Please feel free to look at my LinkedIn page as well as my technical projects on my Github below
                < br/>
                Thank You
                    </h3>
                </h1>
            </div>
            <Animate
                play
                duration={1.5}
                delay={0}
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
                    <button onClick={handleNavigateToResume}>
                        Resume
                    </button>
                    <button onClick={handleNavigateToLeetCode}>
                        <FaCode size={20} style={{ marginRight: '8px' }} />
                        LeetCode
                    </button>
                </div>
            </Animate>
        </section>
    );
};

export default Home;
