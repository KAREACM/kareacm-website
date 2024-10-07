import React from 'react';
import './../Teamspage/ACMTeams.css';
import Setu_sai_ram from './../../../Athithya/src/Assets/Core Team Members/Finance Team/Setu Sai Ram Y.jpg';
import Yashwanth from './../../../Athithya/src/Assets/Core Team Members/Finance Team/yaswanth.jpg';
import Amarnath from './../../../Athithya/src/Assets/Core Team Members/Finance Team/Amarnath.png';
import Sowmya from './../../../Athithya/src/Assets/Core Team Members/Finance Team/K Sowmya.jpg';
import Sathvika from './../../../Athithya/src/Assets/Core Team Members/Finance Team/P.sathvika.jpg';
import Geetheshwar from './../../../Athithya/src/Assets/Core Team Members/Graphics Team/geetheshwar.jpg';
import P_Harsha_Pavan from './../../../Athithya/src/Assets/Core Team Members/Graphics Team/Harsha pavan.png';
import Lakshmikar from './../../../Athithya/src/Assets/Core Team Members/Graphics Team/lakshmikar reddy.jpg';
import Karthik from './../../../Athithya/src/Assets/Core Team Members/Web Dev Team/CH K V KRISHNA SRI VARMA .jpg';
import Harshad from './../../../Athithya/src/Assets/Core Team Members/Web Dev Team/V S Harshad.jpeg';
import Athithya from './../../../Athithya/src/Assets/Core Team Members/Web Dev Team/Athithya.png';
import Maha from './../../../Athithya/src/Assets/Core Team Members/Web Dev Team/Maha Sri B.jpg';
import Pranavi from './../../../Athithya/src/Assets/Core Team Members/Web Dev Team/K.Pranavi Srinivas.jpg';
import M_Sowmya from './../../../Athithya/src/Assets/Core Team Members/Social Media Team/M Sowmya.jpg';
import Bavesh from './../../../Athithya/src/Assets/Core Team Members/Social Media Team/C Bavesh-99220040030.jpg';
import Maruthi from './../../../Athithya/src/Assets/Core Team Members/Social Media Team/maruthikumar.jpg';
import Sujitha from './../../../Athithya/src/Assets/Core Team Members/Social Media Team/Sujitha.jpg';
import Vijaya_Kumari from './../../../Athithya/src/Assets/Core Team Members/Social Media Team/vijay kumari.jpg';
import Deva from './../../../Athithya/src/Assets/Core Team Members/Lens and Edit Team/Deva.png';
import Chetan from './../../../Athithya/src/Assets/Core Team Members/Lens and Edit Team/Chetan.png';
import Vineeth from './../../../Athithya/src/Assets/Core Team Members/Lens and Edit Team/Vineeth.png';
import Teja_sree from './../../../Athithya/src/Assets/Core Team Members/Event Coordinators/Teja sree.png';
import Soniesh from './../../../Athithya/src/Assets/Core Team Members/Event Coordinators/Soniesh.png';
import Jaideep from './../../../Athithya/src/Assets/Core Team Members/Event Coordinators/Jaideep.jpg';
import Pavithra from './../../../Athithya/src/Assets/Core Team Members/Event Coordinators/Pavithra.png';
import Indumathi from './../../../Athithya/src/Assets/Core Team Members/Event Coordinators/Vempati Indumathi - 99220040224.jpg';
import Issac from './../../../Athithya/src/Assets/Core Team Members/Innovation Team/B.Issac preetham(99220040244).jpg';
import Chatura from './../../../Athithya/src/Assets/Core Team Members/Innovation Team/Chatura.png';
import Bharghav from './../../../Athithya/src/Assets/Core Team Members/Innovation Team/bharghav.jpg';
import Girija from './../../../Athithya/src/Assets/Core Team Members/Innovation Team/Ch.Girija sai siri(99220041157) (1).jpg';
import Meenakshi from './../../../Athithya/src/Assets/Core Team Members/Innovation Team/Meenakshi.png';
import Karnikasri from './../../../Athithya/src/Assets/Core Team Members/Innovation Team/Karnika Sri.png';
import Sreeja from './../../../Athithya/src/Assets/Core Team Members/Innovation Team/Sai sreeja.jpg';
import Harshitha from './../../../Athithya/src/Assets/Core Team Members/Innovation Team/Harshitha.png';
import Saathvik from './../../../Athithya/src/Assets/Core Team Members/Volunteers/Saathvik.png';
import Tanuja from './../../../Athithya/src/Assets/Core Team Members/Volunteers/Tanuja.png';
import Vanaja from './../../../Athithya/src/Assets/Core Team Members/Volunteers/Vanaja.png';



function ACMTeams() {
  const finance_team_row1 =
    [
      {
        id: 1,
        name: "Setu Sai Ram Y",
        position: "Finance Team Member",
        image: Setu_sai_ram

      },
      {
        id: 2,
        name: "Yashwanth Y",
        position: "Finance Team Member",
        image: Yashwanth
      },
      {
        id: 3,
        name: "Amarnath K",
        position: "Finance Team Member",
        image: Amarnath
      }
    ]
  const finance_team_row2 =
    [
      {
        id: 4,
        name: "K Sowmya",
        position: "Finance Team Member",
        image: Sowmya

      },
      {
        id: 5,
        name: "P Sathvika",
        position: "Finance Team Member",
        image: Sathvika
      }
    ]

  const graphics_team_row1 =
    [
      {
        id: 1,
        name: "Geetheshwar G",
        position: "Graphics Team Member",
        image: Geetheshwar

      },
      {
        id: 2,
        name: "P Harsha Pavan",
        position: "Graphics Team Member",
        image: P_Harsha_Pavan
      },
      {
        id: 3,
        name: "N lakshmikar Reddy",
        position: "Graphics Team Member",
        image: Lakshmikar
      }
    ]
  const web_dev_team_row1 =
    [
      {
        id: 1,
        name: "C K V KRISHNA SRI VARMA",
        position: "Web Dev Team Member",
        image: Karthik

      },
      {
        id: 2,
        name: "V S HARSHAD",
        position: "Web Dev Team Member",
        image: Harshad
      },
      {
        id: 3,
        name: "V ATHITHYA RAMAA",
        position: "Web Dev Team Member",
        image: Athithya
      }
    ]
  const web_dev_team_row2 =
    [
      {
        id: 1,
        name: "B Maha Sri",
        position: "Web Dev Team Member",
        image: Maha

      },
      {
        id: 2,
        name: "Kanna pranavi Srinivas",
        position: "Web Dev Team Member",
        image: Pranavi
      }
    ]

  const social_media_team_row1 =
    [
      {
        id: 1,
        name: "M Sowmya",
        position: "social Media Team Member",
        image: M_Sowmya

      },
      {
        id: 2,
        name: "C Bavesh",
        position: "social Media Team Member",
        image: Bavesh
      },
      {
        id: 3,
        name: "M Maruthi Kumar",
        position: "social Media Team Member",
        image: Maruthi
      }
    ]
  const social_media_team_row2 =
    [
      {
        id: 1,
        name: "Sujitha Edara",
        position: "social Media Team Member",
        image: Sujitha

      },
      {
        id: 2,
        name: "Y VIJAYA KUMARI",
        position: "social Media Team Member",
        image: Vijaya_Kumari
      }
    ]
  const lens_team_row1 =
    [
      {
        id: 1,
        name: "G DEVA VINAYAGAM",
        position: "Lens and Edit Team Member",
        image: Deva

      },
      {
        id: 2,
        name: "D CHETAN",
        position: "Lens and Edit Team Member",
        image: Chetan
      },
      {
        id: 3,
        name: "B VEERA SAI VINEETH KUMAR REDDY",
        position: "Lens and Edit Team Member",
        image: Vineeth
      }
    ]
  const event_coordinators_team_row1 =
    [
      {
        id: 1,
        name: "Tejasree",
        position: "Event Coordinator Team Member",
        image: Teja_sree

      },
      {
        id: 2,
        name: "I SONIESH ",
        position: "Event Coordinator Team Member",
        image: Soniesh
      },
      {
        id: 3,
        name: "KEERTHIPATI SAI JAIDEEP",
        position: "Event Coordinator Team Member",
        image: Jaideep
      }
    ]
  const event_coordinators_team_row2 =
    [
      {
        id: 1,
        name: "J PAVITHRA",
        position: "Event Coordinator Team Member",
        image: Pavithra

      },
      {
        id: 2,
        name: "V Indhumathi",
        position: "Event Coordinator Team Member",
        image: Indumathi
      }
    ]

  const innovation_team_row1 =
    [
      {
        id: 1,
        name: "B ISSAC PREETHAM",
        position: "Innovation Team Member",
        image: Issac

      },
      {
        id: 2,
        name: "Chatura P",
        position: "Innovation Team Member",
        image: Chatura
      },
      {
        id: 3,
        name: "BHARGAV BALARAM RAMANUJAKUTAM",
        position: "Innovation Team Member",
        image: Bharghav
      },
      {
        id: 4,
        name: "Ch.Girija sai siri",
        position: "Innovation Team Member",
        image: Girija
      }
    ]
    const innovation_team_row2 =
    [
      {
        id: 1,
        name: "YARLAGADDA MEENAKASHI",
        position: "Innovation Team Member",
        image: Meenakshi

      },
      {
        id: 2,
        name: "Karnikasri S",
        position: "Innovation Team Member",
        image: Karnikasri
      },
      {
        id: 3,
        name: "Y.Sai Sreeja",
        position: "Innovation Team Member",
        image: Sreeja
      },
      {
        id: 4,
        name: "Seelam Harshitha",
        position: "Innovation Team Member",
        image: Harshitha
      }
    ]
    const volunteer_team_row1 =
    [
      {
        id: 1,
        name: "J SAATHVIK REDDY",
        position: "Event Coordinator Team Member",
        image: Saathvik

      },
      {
        id: 2,
        name: "M.Tanuja",
        position: "Event Coordinator Team Member",
        image: Tanuja
      },
      {
        id: 3,
        name: "M.Vanaja",
        position: "Event Coordinator Team Member",
        image: Vanaja
      }
    ]

  return (
    <div>
      <div className="teams-heading">
        <div className="teams-acm-heading">WE BELEIVE TEAMWORK IS NOT JUST A CONCEPT</div>
      </div>
      <br />
      <div className="core-team-members-container">
        <div className=" basic-teams-container-style">
          <div className=" basic-teams-heading-style">
            Finance Team
          </div>
          <div className="finance-team-row1">
            {finance_team_row1.map((value, index) => {
              return (
                <div className='box2 ' key={value.id}>
                  <img src={value.image} alt="" className='office-barrier-img' />
                </div>
              )
            })}
          </div>
          <div className="finance-team-row2">
            {finance_team_row2.map((value, index) => {
              return (
                <div className='box2 ' key={value.id}>
                  <img src={value.image} alt="" className='office-barrier-img' />
                </div>
              )
            })}
          </div>


        </div>
        <div className="graphics-team-container basic-teams-container-style">
          <div className="graphics-team-heading basic-teams-heading-style">
            Graphics Team
          </div>
          <div className="graphics-team-row1">
            {graphics_team_row1.map((value, index) => {
              return (
                <div className='box2 ' key={value.id}>
                  <img src={value.image} alt="" className='office-barrier-img' />
                </div>
              )
            })}

          </div>
        </div>
        <div className="web-dev-team-container basic-teams-container-style">
          <div className="web-dev-team-heading basic-teams-heading-style">
            Web Development Team
          </div>
          <div className="web-dev-team-row1">
            {web_dev_team_row1.map((value, index) => {
              return (
                <div className='box2 ' key={value.id}>
                  <img src={value.image} alt="" className='office-barrier-img' />
                </div>
              )
            })}

          </div>
          <div className="web-dev-team-row2">
            {web_dev_team_row2.map((value, index) => {
              return (
                <div className='box2 ' key={value.id}>
                  <img src={value.image} alt="" className='office-barrier-img' />
                </div>
              )
            })}
          </div>
        </div>

        <div className="social-media-team-container basic-teams-container-style">
          <div className="social-media-team-heading basic-teams-heading-style">
            Social Media Team
          </div>
          <div className="social-media-team-row1">
            {social_media_team_row1.map((value, index) => {
              return (
                <div className='box2 ' key={value.id}>
                  <img src={value.image} alt="" className='office-barrier-img' />
                </div>
              )
            })}

          </div>
          <div className="social-media-team-row2">
            {social_media_team_row2.map((value, index) => {
              return (
                <div className='box2 ' key={value.id}>
                  <img src={value.image} alt="" className='office-barrier-img' />
                </div>
              )
            })}
          </div>
        </div>
        <div className="lens-team-container basic-teams-container-style">
          <div className="lens-team-heading basic-teams-heading-style">
            Lens and Edit Team
          </div>
          <div className="lens-team-row1">
            {lens_team_row1.map((value, index) => {
              return (
                <div className='box2 ' key={value.id}>
                  <img src={value.image} alt="" className='office-barrier-img' />
                </div>
              )
            })}

          </div>
        </div>

        <div className="event-coordinators-team-container basic-teams-container-style">
          <div className="event-coordinators-team-heading basic-teams-heading-style">
            Event Coordination Team
          </div>
          <div className="event-coordinators-team-row1">
            {event_coordinators_team_row1.map((value, index) => {
              return (
                <div className='box2 ' key={value.id}>
                  <img src={value.image} alt="" className='office-barrier-img' />
                </div>
              )
            })}

          </div>
          <div className="event-coordinators-team-row2">
            {event_coordinators_team_row2.map((value, index) => {
              return (
                <div className='box2 ' key={value.id}>
                  <img src={value.image} alt="" className='office-barrier-img' />
                </div>
              )
            })}
          </div>
        </div>

        <div className="innovation-team-container basic-teams-container-style">
          <div className="innovation-team-heading basic-teams-heading-style">
            Innovation Team
          </div>
          <div className="innovation-team-row1">
            {innovation_team_row1.map((value, index) => {
              return (
                <div className='box2 ' key={value.id}>
                  <img src={value.image} alt="" className='office-barrier-img' />
                </div>
              )
            })}

          </div>
          <div className="innovation-team-row2">
            {innovation_team_row2.map((value, index) => {
              return (
                <div className='box2 ' key={value.id}>
                  <img src={value.image} alt="" className='office-barrier-img' />
                </div>
              )
            })}
          </div>
        </div>

        <div className="volunteer-team-container basic-teams-container-style">
          <div className="volunteer-team-heading basic-teams-heading-style">
            Volunteer Team
          </div>
          <div className="volunteer-team-row1">
            {volunteer_team_row1.map((value, index) => {
              return (
                <div className='box2 ' key={value.id}>
                  <img src={value.image} alt="" className='office-barrier-img' />
                </div>
              )
            })}

          </div>
        </div>
      </div>
    </div>
  )
}

export default ACMTeams;