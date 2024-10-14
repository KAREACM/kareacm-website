import React from 'react';
import './../Faculty Coordinators/Faculties.css';
import Dean_Deepalakshmi from './../../../../Athithya/src/Assets/Faculty Coordinators/Deepalakshmi Mam.png';
import HOD_Suresh_Kumar from './../../../../Athithya/src/Assets/Faculty Coordinators/Suresh Kumar Sir.png';
import Nagaraj_Sir from './../../../../Athithya/src/Assets/Faculty Coordinators/Nagaraj Sir.png';
import Amutham_Mam from './../../../../Athithya/src/Assets/Faculty Coordinators/Amutha Mam.png';
import Officebarriers from '../Office Barriers/Officebarriers';

function Faculties() {
    const faculty_coordinators = [
        {
            id: 1,
            name: "Dr P Deepa Laskshmi ",
            position: "Dean of SOC",
            image: Dean_Deepalakshmi,
            linkedin: "https://www.linkedin.com/in/dr-p-deepalakshmi-ramkumar-32408817?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
        },
        {
            id: 2,
            name: "Dr N Suresh Kumar",
            position: "Head Of CSE Department",
            image: HOD_Suresh_Kumar,
            linkedin: "https://www.linkedin.com/in/dr-sureshkumar-nagarajan-2568901b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
        },
        {
            id: 3,
            name: "Dr P Nagaraj",
            position: "Faculty Sponser",
            image: Nagaraj_Sir,
            linkedin: "https://www.linkedin.com/in/dr-nagaraj-p-20a072183?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
        },
        {
            id: 4,
            name: "Mrs S Amutha",
            position: "Faculty Co-ordinator",
            image: Amutham_Mam,
            linkedin: "https://www.linkedin.com/in/amutha-seviappan-a272b3293?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
        }
    ];

    return (
        <div>
            <div className="faculties-container">
                <div className="faculty-coordinators-heading heading-style">
                    Faculty Coordinators
                </div>

                <div className="faculty-coordinator-pics">
                    {faculty_coordinators.map((value, index) => {
                        return (
                            <div className='box' key={value.id}>
                                <img src={value.image} alt={value.name} className='faculty-img' />
                                <div className="overlay">
                                    <div className="info">
                                        <p>{value.name}</p>
                                        <p>{value.position}</p>
                                        <a href={value.linkedin} target="_blank" rel="noopener noreferrer">
                                            <span className="linkedin-icon">
                                                <i className="fab fa-linkedin"></i>
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className="office-barriers">
                <Officebarriers />
            </div>
        </div>
    )
}

export default Faculties;
