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
import Winter_School_Selection from './../../assets/Images/Winter school selection/Winter-school-selection-poster.jpeg';
import pizza_party from './../../assets/Images/pizza_party/img2.jpg';
import acm_award from './../../assets/Images/acm_awards/img1.jpg';



function ACMGallery() {
    const student_acheivements = [
        {
            id: 1,
            
            event:"outstanding chapter award",
            winners_pics: acm_award
        },
        {
            id: 2,
            event:"pizza party",
            winners_pics: pizza_party
           
        },
        {
            id: 3,
            event: "Hack Odyssey 2k24",
            winners_pics: Hack_Odyssey_2k24_winners
        },
        {
            id: 4,
            event: "Idea spark series",
            winners_pics: Idea_spark_series_winners
        },
        {
            id: 5,
            event: "CodeX series",
            winners_pics: CodeX_series_winners
        },
        {
            id: 6,
            event: "CodeX series5",
            winners_pics: CodeX_series5_winners
        },
        {
            id: 7,
            event: "CodeX series2",
            winners_pics: CodeX_series2_winners
        },
        {
            id: 8,
            event: "ACM summer boost",
            winners_pics: ACM_summer_boost_winners
        },
        {
            id: 9,
            event: "Tech quest",
            winners_pics: Tech_quest_winners
        },
        {
            id: 10,
            event: "Virtual code corner",
            winners_pics: Virtual_code_corner_winners
        },
        {
            id:11,
            event: "Disfrutar 2k24",
            winners_pics: Disfrutar_2k24_winners

        },
        {
            id:12,
            event: "Winter School Selection",
            winners_pics: Winter_School_Selection

        }
    ]
    return (
        <div>
            <div className="student-acheivements-container">
                <div className="student-acheivements-heading basic-gallery-heading-style">
                    Acheivements and Awards
                </div>
                <div className="student-acheivements-pics-conatiner">
                    {student_acheivements.map((value) => {
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