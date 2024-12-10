import React from 'react';
import './../Faculty Coordinators/Faculties.css';
import Dean_Deepalakshmi from './../../../../Athithya/src/Assets/Faculty Coordinators/Deepalakshmi Mam.png';
import HOD_Suresh_Kumar from './../../../../Athithya/src/Assets/Faculty Coordinators/Suresh Kumar Sir.png';
import Nagaraj_Sir from './../../../../Athithya/src/Assets/Faculty Coordinators/Nagaraj Sir.png';
import Amutham_Mam from './../../../../Athithya/src/Assets/Faculty Coordinators/Amutha Mam.png';
import Shanmugapriya from './../../../../Athithya/src/Assets/Faculty Coordinators/Shanmugapriya.jpg';
import Anitha from './../../../../Athithya/src/Assets/Faculty Coordinators/Anitha.jpg';
import Parivazhagan from './../../../../Athithya/src/Assets/Faculty Coordinators/Dr A Parivazhagan.jpeg';
import Reshni from './../../../../Athithya/src/Assets/Faculty Coordinators/Reshni.jpg';
import Nagarajan from './../../../../Athithya/src/Assets/Faculty Coordinators/M K Nagarajan.jpeg';
import Lavanya from './../../../../Athithya/src/Assets/Faculty Coordinators/Lavanya.jpg';
import Krithika from './../../../../Athithya/src/Assets/Faculty Coordinators/Krithika.jpg';
import Marimuthu from './../../../../Athithya/src/Assets/Faculty Coordinators/Dr T Marimuthu.jpeg';
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
        },
        {
            id: 5,
            name: "Mrs S Shanmugapriya",
            designation: "Assistant Professor - KARE",
            position: "Membership Chair",
            image: Shanmugapriya,
            email: "sowmya87sankar@gmail.com",
            linkedIn: "https://www.linkedin.com/in/shanmugapriya-sankaran-a2952a30b/",
          },
          {
            id: 6,
            name: "Mrs S Reshni",
            designation: "Assistant Professor - KARE",
            position: "Organizing Secretary",
            image: Reshni,
            email: "s.reshni@klu.ac.in",
            linkedIn: "https://www.linkedin.com/in/reshni-suresh-5b94061b/",
          },
          {
            id: 7,
            name: "Mrs N Kirthiga",
            designation: "Assistant Professor - KARE",
            position: "Organizing Secretary",
            image: Krithika,
            email: "n.kirthiga@klu.ac.in",
            linkedIn: "https://www.linkedin.com/in/kirthiga-n-a328a9142/",
          },
          {
            id: 8,
            name: "Mrs B Lavanya",
            designation: "Assistant Professor - KARE",
            position: "Organizing Secretary",
            image: Lavanya,
            email: "b.lavanya@klu.ac.in",
            linkedIn: "https://www.linkedin.com/in/b-lavanya-cse-a22aa1309/",
          },
          {
            id: 9,
            name: "Dr M K Nagarajan",
            position: "Faculty Sponser",
            image: Nagarajan,
            linkedin: ""
        },
        {
            id: 10,
            name: "Dr A Parivazhagan",
            position: "Faculty Sponser",
            image: Parivazhagan,
            linkedin: ""
        },
        {
            id: 11,
            name: "Dr T Marimuthu",
            position: "Faculty Sponser",
            image: Marimuthu,
            linkedin: ""
        },
        {
            id: 12,
            name: "Mrs Anitha",
            position: "Faculty Sponser",
            image: Anitha,
            linkedin: ""
        },

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
