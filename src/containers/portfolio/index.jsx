// import React from "react";
// import {BsInfoCircleFill} from 'react-icons/bs'
// import PageHeaderContent from "../../components/pageHeaderContent"
// import ImageOne from '../../images/image1.jpg'
// import ImageTwo from '../../images/image2.png'
// import ImageThree from '../../images/image3.png'
// import "./styles.scss"
// import { useState } from "react";
// const portfolioData =[
//     {
//         id: 3,
//         name: "Robotics",
//         image: ImageOne
//     },
//     {
//         id: 2,
//         name: "SJSU",
//         image: ImageTwo
//     },
//     {
//         id: 2,
//         name: "Web",
//         image: ImageThree
//     },
// ]
// const filterData = [
//     {
//         filterId: 1 ,
//         label: 'All'
//     },
//     {
//         filterId: 2 ,
//         label: 'Software Development'
//     },
//     {
//         filterId: 3 ,
//         label: 'Embedded Design'
//     },
    
// ]
// const Portfolio = ()=>{

//     const[filterdvalue,setFilteredValue]=useState(1)
//     function handleFilter(currentId){
//         setFilteredValue(currentId)
//     };
//     const fileteredItems= filteredvalue === 1 ? portfolioData : portfolioData.filter(item=>item.id === filteredValue)

//     return(
//         <section id="portfolio" className="portfolio">
//         <PageHeaderContent
//         headerText= "My Portfolio"
//         icon={<BsInfoCircleFill size={40} />}
//         />
//         <div className="portfolio__content">
//             <ul className="portfolio__content__filter">
//                 {
//                     filterData.map(item=>(
//                         <li onClick={()=>handleFilter(item.fiterId)} key={item.filterId}>
//                                 {
//                                     item.label
//                                 }
//                         </li>
//                     ))
//                 }
//             </ul>
//                 <div className="portfolio__content__cards">
//                     {
//                         filteredItems.map((item)=>(
//                             <div className="portfolio__content__cards__item" key={`cardItem${item.name.trim()}`}>
//                                 <div className="portfolio__content__cards__item__img-wrapper">
//                                     <a>
//                                         <img alt="dummy data" src={item.image}/>

                                        
//                                     </a>
//                                 </div>
//                             </div>
//                         ))
//                     }

//                 </div>
//         </div>
//     </section>
//     )
// }
// export default Portfolio;
import React, { useState } from "react";
import { BsInfoCircleFill } from 'react-icons/bs';
import PageHeaderContent from "../../components/pageHeaderContent";
import ImageOne from '../../images/image1.jpg';
import ImageTwo from '../../images/image2.png';
import ImageThree from '../../images/image3.png';
import ImageFour from '../../images/image4.jpg';
import ImageFive from '../../images/image5.png';
import ImageSix from '../../images/image6.jpg'

import "./styles.scss";

const portfolioData = [
    {
        id: 3,
        name: "Dynamic Motor Control with MPU 6050",
        image: ImageOne,
        link: 'https://github.com/AhmedSabz/ControlsTrialsProjectArduinoUno'
    },
    {
        id:2,
        name: "Car Dealership Simulation",
        image: ImageSix,
        link: 'https://github.com/AhmedSabz/Car-Dealership'
    },
    {
        id: 2,
        name: "SJSU Club Navigator",
        image: ImageTwo,
        link: 'https://github.com/AhmedSabz/CMPE-131-Design-Project'
    },
    {
        id: 2,
        name: "Ahmed Sabzwari's Website",
        image: ImageThree,
        link: ''
    },
    {
        id: 2,
        name: "HangMan",
        image: ImageFour,
        link: 'https://github.com/AhmedSabz/HangmanGame'
    },
    {
        id:3,
        name: "Sustainable Solar LED Lightbulb",
        image: ImageFive,
        link: 'https://github.com/AhmedSabz/SolarLEDProject'
    }
];

const filterData = [
    {
        filterId: 1,
        label: 'All'
    },
    {
        filterId: 2,
        label: 'Software Development'
    },
    {
        filterId: 3,
        label: 'Embedded Design'
    },
];

const Portfolio = () => {
    const [filteredValue, setFilteredValue] = useState(1);
const [hoveredValue,setHoveredValue] = useState(null)
    const handleFilter = (currentId) => {
        setFilteredValue(currentId);
    };
    function handleHover(index){
        setHoveredValue(index)
    }
    const filteredItems = filteredValue === 1 ? portfolioData : portfolioData.filter(item => item.id === filteredValue);

    return (
        <section id="portfolio" className="portfolio">
            <PageHeaderContent
                headerText="My Projects"
                icon={<BsInfoCircleFill size={40} />}
            />
            <div className="portfolio__content">
                <ul className="portfolio__content__filter">
                    {filterData.map(item => (
                        <li className={item.filterId === filteredValue ? 'active' : ''} onClick={() => handleFilter(item.filterId)} key={item.filterId}>
                            {item.label}
                        </li>
                    ))}
                </ul>
                <div className="portfolio__content__cards">
                    {filteredItems.map((item,index) => (
                        <div className="portfolio__content__cards__item" key={`cardItem${item.name.trim()}`}
                        onMouseEnter={()=>handleHover(index)}
                        onMouseLeave={()=>handleHover(null)}
                        >
                            <div className="portfolio__content__cards__item__img-wrapper">
                            <a href={item.link} target="_blank" rel="noopener noreferrer">

                                    <img alt={item.name} src={item.image} />
                                </a>
                            </div>
                            <div className="overlay">
                                {
                                    index === hoveredValue && (
                                        <div>
                                            <p>{item.name}</p>
                                            <a href={item.link} target="_blank" rel="noopener noreferrer">

                                            <button>Visit</button>
                                            </a>
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
