import React from 'react'
import './../Gallerypage/ACMGallery.css'
import CodeX_series5_winners from './../../../Athithya/src/Assets/Student Acheivements/CodeX series5 winners.jpeg';
import CodeX_series2_winners from './../../../Athithya/src/Assets/Student Acheivements/CodeX series2 winners.jpeg';
import ACM_summer_boost_winners from './../../../Athithya/src/Assets/Student Acheivements/ACM Summer Boost winners.jpeg';
import CodeX_series_winners from './../../../Athithya/src/Assets/Student Acheivements/CodeX series winners.jpeg';
import Disfrutar_2k24_winners from './../../../Athithya/src/Assets/Student Acheivements/Disfrutar 2k24 winners.jpeg';
import Hack_Odyssey_2k24_winners from './../../../Athithya/src/Assets/Student Acheivements/Hack Odyssey 2k24 winners.jpeg';
// import CodeX_series5_winners from './../../../Athithya/src/Assets/Student Acheivements/CodeX series5 winners.jpeg';
import Idea_spark_series_winners from './../../../Athithya/src/Assets/Student Acheivements/Idea spark series winners.jpeg';
import Tech_quest_winners from './../../../Athithya/src/Assets/Student Acheivements/Tech quest winners.jpeg';
import Virtual_code_corner_winners from './../../../Athithya/src/Assets/Student Acheivements/Virtual Code corner winners.jpeg';

function ACMGallery() {
    const student_acheivements = [
        {
            id: 1,
            event: "Disfrutar 2k24",
            winners_pics: Disfrutar_2k24_winners
        },
        {
            id: 2,
            event: "Hack Odyssey 2k24",
            winners_pics: Hack_Odyssey_2k24_winners
        },
        {
            id: 3,
            event: "Idea spark series",
            winners_pics: Idea_spark_series_winners
        },
        {
            id: 4,
            event: "CodeX series",
            winners_pics: CodeX_series_winners
        },
        {
            id: 5,
            event: "CodeX series5",
            winners_pics: CodeX_series5_winners
        },
        {
            id: 6,
            event: "CodeX series2",
            winners_pics: CodeX_series2_winners
        },
        {
            id: 7,
            event: "ACM summer boost",
            winners_pics: ACM_summer_boost_winners
        },
        {
            id: 8,
            event: "Tech quest",
            winners_pics: Tech_quest_winners
        },
        {
            id: 9,
            event: "Virtual code corner",
            winners_pics: Virtual_code_corner_winners
        },
    ]
    return (
        <div>
            <div className="student-acheivements-container">
                <div className="student-acheivements-heading basic-gallery-heading-style">
                    Student Acheivements
                </div>
                <div className="student-acheivements-pics-conatiner">
                    {student_acheivements.map((value, index) => {
                        return (
                            <div className='box2 winners-pics ' key={value.id}>
                                <img src={value.winners_pics} alt="" className='office-barrier-img' />
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default ACMGallery