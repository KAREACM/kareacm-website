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
            linkedin: "https://www.linkedin.com/in/vshourya?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
        },
        {
            id: 2,
            name: "B LOKESH KUMAR",
            position: "Vice Chair Person",
            image: Vice_Chair_person,
            linkedin: "https://www.linkedin.com/in/lokesh-kumar-bhatlapenumarthy-b8a66b268?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
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
            linkedin: "https://www.linkedin.com/in/ligorisan-3333ba261?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
        },
        {
            id: 5,
            name: "YASHWANTH A",
            position: "Web Master",
            image: Web_Master,
            linkedin: "https://www.linkedin.com/in/yashwantharavind/"
        },
        {
            id: 6,
            name: "T JEYRUS JOSHUA",
            position: "Membership Chair",
            image: Membership_chair,
            linkedin: "https://www.linkedin.com/in/thiruthuvam-jeyrus-joshua-66150531b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
        },
        {
            id: 7,
            name: "BHAVAN SAI",
            position: "Event Coordinator",
            image: Event_Coordinator,
            linkedin: "https://www.linkedin.com/in/pynamudi-bhavan-sai-9386a0268?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
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
                    <NavLink to="/teams">
                        <span>View Team</span>
                    </NavLink>
                </button>
            </div>
        </div>
    );
}

export default Officebarriers;
