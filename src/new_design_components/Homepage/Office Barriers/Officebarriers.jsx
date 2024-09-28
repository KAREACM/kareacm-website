import React from 'react'
import './../Office Barriers/Officebarriers.css'
import image1 from './../../../assets/Images/Shrouya_Roy/Img1.jpeg';
import image2 from './../../../assets/Images/Shrouya_Roy/Img2.jpeg';
import image3 from './../../../assets/Images/Shrouya_Roy/Img3.jpeg';
import image4 from './../../../assets/Images/Shrouya_Roy/Img4.jpeg';

function Officebarriers() {
    const office_barriers_list1 =
        [
            {
                id: 1,
                name: "Image1",
                position: "Office Barrier",
                image: image1

            },
            {
                id: 2,
                name: "Image2",
                position: "Office Barrier",
                image: image2
            },
            {
                id: 3,
                name: "Image3",
                position: "Office Barrier",
                image: image3
            }
        ]
    const office_barriers_list2 =
        [
            {
                id: 1,
                name: "Image1",
                position: "Office Barrier",
                image: image1

            },
            {
                id: 2,
                name: "Image2",
                position: "Office Barrier",
                image: image2
            },
            {
                id: 3,
                name: "Image3",
                position: "Office Barrier",
                image: image3
            },
            {
                id: 4,
                name: "Image4",
                position: "Faculty Coordinator",
                image: image4

            }
        ]
    return (
        <div>
            <div className="office-barriers-container">
                <div className="office-barriers-heading heading-style">
                    Office Barriers
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
        </div>
    )
}

export default Officebarriers