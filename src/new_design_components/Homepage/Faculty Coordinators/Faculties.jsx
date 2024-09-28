import React from 'react'
import './../Faculty Coordinators/Faculties.css'
import image1 from './../../../assets/Images/Shrouya_Roy/Img1.jpeg';
import image2 from './../../../assets/Images/Shrouya_Roy/Img2.jpeg';
import image3 from './../../../assets/Images/Shrouya_Roy/Img3.jpeg';
import image4 from './../../../assets/Images/Shrouya_Roy/Img4.jpeg';
import Officebarriers from '../Office Barriers/Officebarriers';

function Faculties() {
    const faculty_coordinators = 
    [
        {
            id : 1,
            name : "Image1",
            position : "Faculty Coordinator",
            image : image1

        },
        {
            id : 2,
            name : "Image2",
            position : "Faculty Coordinator",
            image : image2
        },
        {
            id : 3,
            name : "Image3",
            position : "Faculty Coordinator",
            image : image3
        },
        {
            id : 4,
            name : "Image4",
            position : "Faculty Coordinator",
            image : image4

        }
    ]
    return (
        <div>
            <div className="faculties-container">
                <div className="faculty-coordinators-heading heading-style">
                    Faculty Coordinators
                </div>

                <div className="faculty-coordinator-pics">
                    {faculty_coordinators.map((value, index)=> {
                        return(
                            <div className='box ' key={value.id}>
                                <img src={value.image} alt="" className='faculty-img' />
                            </div>

                        )
                    })}

                    
                </div>
            </div>
            <div className="office-barriers">
                <Officebarriers/>
            </div>
        </div>
    )
}

export default Faculties