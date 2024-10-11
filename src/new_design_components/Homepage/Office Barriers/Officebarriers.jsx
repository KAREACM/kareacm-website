import React from 'react';
import './../Office Barriers/Officebarriers.css';
import Chair_person from './../../../../Athithya/src/Assets/Office Barriers/BHANU PRATHAP SHOURYA V.jpg';
import Vice_Chair_person from './../../../../Athithya/src/Assets/Office Barriers/B LOKESH KUMAR.jpg';
import Secretary from './../../../../Athithya/src/Assets/Office Barriers/S JASWANTH.jpg';
import Treasurer from './../../../../Athithya/src/Assets/Office Barriers/LIGORIS D.jpg';
import Web_Master from './../../../../Athithya/src/Assets/Office Barriers/YASHWANTH A.jpg';
import Membership_chair from './../../../../Athithya/src/Assets/Office Barriers/T JEYRUS JOSHUA.jpg';
import Event_Coordinator from './../../../../Athithya/src/Assets/Office Barriers/bhavan sai.jpg';

import { NavLink } from 'react-router-dom';

function Officebarriers() {
    const office_barriers_list1 = [
        {
            id: 1,
            name: "V BHANU PRATHAP SHOURYA",
            position: "Chair Person",
            image: Chair_person,
            linkedin: "https://www.linkedin.com/in/v-bhanu-prathap-shourya/"
        },
        {
            id: 2,
            name: "B LOKESH KUMAR",
            position: "Vice Chair Person",
            image: Vice_Chair_person,
            linkedin: "https://www.linkedin.com/in/b-lokesh-kumar/"
        },
        {
            id: 3,
            name: "JASWANTH S",
            position: "Secretary",
            image: Secretary,
            linkedin: "https://www.linkedin.com/in/jaswanth-s/"
        }
    ];

    const office_barriers_list2 = [
        {
            id: 4,
            name: "LIGORIS CABRINI DEVANANDRAJ",
            position: "Treasurer",
            image: Treasurer,
            linkedin: "https://www.linkedin.com/in/ligoris-cabrini-devanandraj/"
        },
        {
            id: 5,
            name: "YASHWANTH A",
            position: "Web Master",
            image: Web_Master,
            linkedin: "https://www.linkedin.com/in/yashwanth-a/"
        },
        {
            id: 6,
            name: "T JEYRUS JOSHUA",
            position: "Membership Chair",
            image: Membership_chair,
            linkedin: "https://www.linkedin.com/in/t-jeyrus-joshua/"
        },
        {
            id: 7,
            name: "BHAVAN SAI",
            position: "Event Coordinator",
            image: Event_Coordinator,
            linkedin: "https://www.linkedin.com/in/bhavan-sai/"
        }
    ];

    return (
        <div>
            <div className="office-barriers-container">
                <div className="office-barriers-heading heading-style">
                    Office Bearers
                </div>
                <div className="office-barriers-list1-pics">
                    {office_barriers_list1.map((value) => (
                        <div className='box2' key={value.id}>
                            <img src={value.image} alt={`${value.name}`} className='office-barrier-img' />
                            <div className="overlay">
                                <div className="info">
                                    <p>{value.name}</p>
                                    <p>{value.position}</p>
                                    <a href={value.linkedin} target="_blank" rel="noopener noreferrer">
                                        <i className="fab fa-linkedin"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="office-barriers-list2-pics">
                    {office_barriers_list2.map((value) => (
                        <div className='box2' key={value.id}>
                            <img src={value.image} alt={`${value.name}`} className='office-barrier-img' />
                            <div className="overlay">
                                <div className="info">
                                    <p>{value.name}</p>
                                    <p>{value.position}</p>
                                    <a href={value.linkedin} target="_blank" rel="noopener noreferrer">
                                        <i className="fab fa-linkedin"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="view-team-button">
                <button>
                    <NavLink to="/team">
                        <span>View Team</span>
                    </NavLink>
                </button>
            </div>
        </div>
    );
}

export default Officebarriers;
