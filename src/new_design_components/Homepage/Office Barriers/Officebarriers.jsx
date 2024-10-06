import React from 'react'
import './../Office Barriers/Officebarriers.css';
import Chair_person from './../../../../Athithya/src/Assets/Office Barriers/BHANU PRATHAP SHOURYA V.jpg';
import Vice_Chair_person from './../../../../Athithya/src/Assets/Office Barriers/B LOKESH KUMAR.jpg';
import Secretary from './../../../../Athithya/src/Assets/Office Barriers/S JASWANTH.jpg';
import Treasurer from './../../../../Athithya/src/Assets/Office Barriers/LIGORIS D.jpg';
import Web_Master from './../../../../Athithya/src/Assets/Office Barriers/YASHWANTH A.jpg';
import Membership_chair from './../../../../Athithya/src/Assets/Office Barriers/T JEYRUS JOSHUA.jpg';
import Event_Coordinator from './../../../../Athithya/src/Assets/Office Barriers/bhavan sai.jpg';

// import ACMTeams from '../../Teamspage/ACMteams';
import { NavLink } from 'react-router-dom';

function Officebarriers() {
    const office_barriers_list1 =
        [
            {
                id: 1,
                name: "V BHANU PRATHAP SHOURYA",
                position: "Chair Person",
                image: Chair_person

            },
            {
                id: 2,
                name: "B LOKESH KUMAR",
                position: "Vice Chair Person",
                image: Vice_Chair_person
            },
            {
                id: 3,
                name: "JASWANTH S",
                position: "Secretary",
                image: Secretary
            }
        ]
    const office_barriers_list2 =
        [
            {
                id: 1,
                name: "LIGORIS CABRINI DEVANANDRAJ",
                position: "Treasurer",
                image: Treasurer

            },
            {
                id: 2,
                name: "YASHWANTH A",
                position: "Web Master",
                image: Web_Master
            },
            {
                id: 3,
                name: "T JEYRUS JOSHUA",
                position: "Membership Chair",
                image: Membership_chair
            },
            {
                id: 4,
                name: "Bhavan Sai",
                position: "Event Coordinator",
                image: Event_Coordinator

            }
        ]
    return (
        <div>
            <div className="office-barriers-container">
                <div className="office-barriers-heading heading-style">
                    Office Bearers
                </div>
                <div className="office-barriers-list1-pics">
                    {office_barriers_list1.map((value, index) => {
                        return (
                            <div className='box2 ' key={value.id}>
                                <img src={value.image} alt="" className='office-barrier-img' />
                            </div>
                        )
                    })}



                </div>
                <div className="office-barriers-list2-pics">
                    {office_barriers_list2.map((value, index) => {
                        return (
                            <div className='box2 ' key={value.id}>
                                <img src={value.image} alt="" className='office-barrier-img' />
                            </div>
                        )
                    })}



                </div>
            </div>
            <div className="view-team-button">

                <button>
                    <a >
                        <span>View Team</span>
                    </a>
                </button>
            </div>
        </div>
    )
}

export default Officebarriers;