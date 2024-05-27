import React from "react";
import { BsInfoCircleFill } from 'react-icons/bs';
import PageHeaderContent from "../../components/pageHeaderContent";
import { Animate } from "react-simple-animate";
import './styles.scss';
import {DiApple,DiLinux} from 'react-icons/di'
import {FaDev, FaRobot} from 'react-icons/fa'

const personalDetails = [
  {
    label: "Name",
    value: "Ahmed Sabzwari",
  },
  
  {
    label: "Email",
    value: "ahmedsabzwari7@gmail.com",
  },
];

const JobSummary = "I am a third year Computer Engineering student at San Jose State University searching for summer 2024 internship in software design";

const About = () => {
  return (
    <section id="about" className="about">
      <PageHeaderContent
        headerText="About Me"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="about__content">
        <div className="about__content__personalWrapper">   
        <Animate
          play
          duration={1.5}
          delay={1}
          start={{
            transform: 'translateX(-900px)',
          }}
          end={{
            transform: 'translateX(0px)',
          }}
        >
          <h3>Software Developer</h3>
          <p>{JobSummary}</p>
        </Animate>

        <Animate
          play
          duration={1.5}
          delay={1}
          start={{
            transform: 'translateX(500px)',
          }}
          end={{
            transform: 'translateX(0px)',
          }}
        >

        <h3 className="personalInformationHeaderText">Personal Information</h3>
        <ul>
          {personalDetails.map((item, i) => (
            <li key={i}>
              <span className="title">{item.label}</span>
              <span className="value">{item.value}</span>
            </li>
          ))}
        </ul>
        </Animate>
            </div>
        <div className="about__content__servicesWrapper">
        <Animate
          play
          duration={1.5}
          delay={1}
          start={{
            transform: 'translateX(600px)',
          }}
          end={{
            transform: 'translateX(0px)',
          }}
        >
            <div className="about__content__servicesWrapper__innerContent">
            <div>
            <FaDev size={60} color="var(--yellow-theme-main-color)"/>
          </div>


          <div>
          <FaRobot size={60} color="var(--yellow-theme-main-color)"/>

          </div>

          <div>
          <DiLinux size={60} color="var(--yellow-theme-main-color)"/>

          </div>

          <div>
          <DiApple size={60} color="var(--yellow-theme-main-color)"/>
          </div>

            </div>
       </Animate>
        </div>
     
      </div>
    </section>
  );
};

export default About;

