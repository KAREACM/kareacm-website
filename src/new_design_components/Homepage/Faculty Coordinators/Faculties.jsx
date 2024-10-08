import React from 'react';
import './../Faculty Coordinators/Faculties.css';
import image1 from './../../../assets/Images/Shrouya_Roy/Img1.jpeg';
import image2 from './../../../assets/Images/Shrouya_Roy/Img2.jpeg';
import image3 from './../../../assets/Images/Shrouya_Roy/Img3.jpeg';
import image4 from './../../../assets/Images/Shrouya_Roy/Img4.jpeg';
import Officebarriers from '../Office Barriers/Officebarriers';

function Faculties() {
    const faculty_coordinators = [
        {
            id: 1,
            name: "Shrouya Roy",
            position: "Faculty Coordinator",
            image: image1,
            linkedin: "https://www.linkedin.com/in/shrouya-roy/"
        },
        {
            id: 2,
            name: "Person 2",
            position: "Faculty Coordinator",
            image: image2,
            linkedin: "https://www.linkedin.com/in/person-2/"
        },
        {
            id: 3,
            name: "Person 3",
            position: "Faculty Coordinator",
            image: image3,
            linkedin: "https://www.linkedin.com/in/person-3/"
        },
        {
            id: 4,
            name: "Person 4",
            position: "Faculty Coordinator",
            image: image4,
            linkedin: "https://www.linkedin.com/in/person-4/"
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
