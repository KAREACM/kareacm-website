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
        name: "SETU SAI RAM Y",
        position: "Finance Team Member",
        image: Setu_sai_ram,
        linkedin : "https://www.linkedin.com/in/setu-sai-ram-y-659651252/"

      },
      {
        id: 2,
        name: "YASHWANTH Y",
        position: "Finance Team Member",
        image: Yashwanth,
        linkedin : "https://www.linkedin.com/in/yarramsetti-yashwanth-naidu-88965a268?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
      },
      {
        id: 3,
        name: "AMARNATH K",
        position: "Finance Team Member",
        image: Amarnath,
        linkedin : "https://www.linkedin.com/in/amar-nath-762858268?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
      }
    ]
  const finance_team_row2 =
    [
      {
        id: 4,
        name: "K SOWMYA",
        position: "Finance Team Member",
        image: Sowmya,
        linkedin : "https://www.linkedin.com/in/sowmya-kalavakuri-07175a268?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"

      },
      {
        id: 5,
        name: "P SATHVIKA",
        position: "Finance Team Member",
        image: Sathvika,
        linkedin : "https://www.linkedin.com/in/sathvika-saathu-726196320?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
      }
    ]

  const graphics_team_row1 =
    [
      {
        id: 1,
        name: "GEETHESHWAR G",
        position: "Graphics Team Member",
        image: Geetheshwar,
        linkedin : "https://www.linkedin.com/in/geetheshwar-g-12262a255?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"

      },
      {
        id: 2,
        name: "P HARSHA PAVAN",
        position: "Graphics Team Member",
        image: P_Harsha_Pavan,
        linkedin :"https://www.linkedin.com/in/h-n-v-pavan-446549268?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
      },
      {
        id: 3,
        name: "N LAKSHMIKAR REDDY",
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
        image: Karthik,
        linkedin : "https://www.linkedin.com/in/k-v-krishna-sri-varma-chekuri-5b0120263?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"

      },
      {
        id: 2,
        name: "V S HARSHAD",
        position: "Web Dev Team Member",
        image: Harshad,
        linkedin : "https://www.linkedin.com/in/imvsharshad"
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
        name: "B MAHA SRI",
        position: "Web Dev Team Member",
        image: Maha,
        linkedin : "https://www.linkedin.com/in/mahasri-b-05898a2a8?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"

      },
      {
        id: 2,
        name: "KANNA PRANAVI SRINIVAS",
        position: "Web Dev Team Member",
        image: Pranavi,
        linkedin : "https://www.linkedin.com/in/kanna-pranavi-4451032aa?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
      }
    ]

  const social_media_team_row1 =
    [
      {
        id: 1,
        name: "M SOWMYA",
        position: "Social Media Team Member",
        image: M_Sowmya,
        linkedin : "https://www.linkedin.com/in/sowmya-reddy-7a8665268?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"

      },
      {
        id: 2,
        name: "C BAVESH",
        position: "Social Media Team Member",
        image: Bavesh,
        linkedin : "https://www.linkedin.com/in/c-bavesh-2a59ba2b6?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
      },
      {
        id: 3,
        name: "M MARUTHI KUMAR",
        position: "Social Media Team Member",
        image: Maruthi
      }
    ]
  const social_media_team_row2 =
    [
      {
        id: 1,
        name: "SUJITHA EDARA",
        position: "Social Media Team Member",
        image: Sujitha,
        linkedin : "https://www.linkedin.com/in/sujitha-eedara-ba04a631b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"

      },
      {
        id: 2,
        name: "Y VIJAYA KUMARI",
        position: "Social Media Team Member",
        image: Vijaya_Kumari,
        linkedin : "https://www.linkedin.com/in/vijaya-kumari-yarragudi-11531627a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
      }
    ]
  const lens_team_row1 =
    [
      {
        id: 1,
        name: "G DEVA VINAYAGAM",
        position: "Lens and Edit Team Member",
        image: Deva,
        linkedin : "https://www.linkedin.com/in/deva-vinayagam-3b4862268?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"

      },
      {
        id: 2,
        name: "D CHETAN",
        position: "Lens and Edit Team Member",
        image: Chetan,
        linkedin : "https://www.linkedin.com/in/dondeti-chethan-461664268?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
      },
      {
        id: 3,
        name: "B VEERA SAI VINEETH KUMAR REDDY",
        position: "Lens and Edit Team Member",
        image: Vineeth,
        linkedin : "https://www.linkedin.com/in/beemacherla-veera-sai-vineeth-kumar-reddy-338aa0332?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
      }
    ]
  const event_coordinators_team_row1 =
    [
      {
        id: 1,
        name: "TEJASREE",
        position: "Event Coordinator Team Member",
        image: Teja_sree,
        linkedin : "https://www.linkedin.com/in/karli-tejasree-981863301?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"

      },
      {
        id: 2,
        name: "I SONIESH ",
        position: "Event Coordinator Team Member",
        image: Soniesh,
        linkedin : "https://www.linkedin.com/in/soniesh-immidichetty-182858268?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
      },
      {
        id: 3,
        name: "KEERTHIPATI SAI JAIDEEP",
        position: "Event Coordinator Team Member",
        image: Jaideep,
        linkedin : "https://www.linkedin.com/in/jaideep-keerthipati-640891291?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
      }
    ]
  const event_coordinators_team_row2 =
    [
      {
        id: 1,
        name: "J PAVITHRA",
        position: "Event Coordinator Team Member",
        image: Pavithra,
        linkedin : "https://www.linkedin.com/in/jagarasi-pavithra-14064b268?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"

      },
      {
        id: 2,
        name: "V INDHUMATHI",
        position: "Event Coordinator Team Member",
        image: Indumathi,
        linkedin : "https://www.linkedin.com/in/vempati-indumathi-30118226b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
      }
    ]

  const innovation_team_row1 =
    [
      {
        id: 1,
        name: "B ISSAC PREETHAM",
        position: "Innovation Team Member",
        image: Issac,
        linkedin : "https://www.linkedin.com/in/issac-preetham-bodanapu-378984288"

      },
      {
        id: 2,
        name: "CHATURA P",
        position: "Innovation Team Member",
        image: Chatura,
        linkedin : "https://www.linkedin.com/in/chatura-palanivelrajan"
      },
      {
        id: 3,
        name: "BHARGAV BALARAM RAMANUJAKUTAM",
        position: "Innovation Team Member",
        image: Bharghav,
        linkedin : "https://www.linkedin.com/in/bhargav-balaram-ramanujakutam-a37861268?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
      },
      {
        id: 4,
        name: "GIRIJA SAI SIRI",
        position: "Innovation Team Member",
        image: Girija,
        linkedin : "https://www.linkedin.com/in/girija-sai-siri-cherukuri-231559256?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
      }
    ]
  const innovation_team_row2 =
    [
      {
        id: 1,
        name: "YARLAGADDA MEENAKASHI",
        position: "Innovation Team Member",
        image: Meenakshi,
        linkedin : "https://www.linkedin.com/in/meenakshi-yarlagadda-954861268?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"

      },
      {
        id: 2,
        name: "KARNIKASRI S",
        position: "Innovation Team Member",
        image: Karnikasri,
        linkedin : "https://www.linkedin.com/in/karnikasri-s-7291252b7?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=and"
      },
      {
        id: 3,
        name: "Y SAI SREEJA",
        position: "Innovation Team Member",
        image: Sreeja,
        linkedin : "https://www.linkedin.com/in/yaratapalli-sai-sreeja-635408307?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"

      },
      {
        id: 4,
        name: "SEELAM HARSHITHA",
        position: "Innovation Team Member",
        image: Harshitha,
        linkedin : "https://www.linkedin.com/in/seelam-harshitha-820a3b302?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
      }
    ]
  const volunteer_team_row1 =
    [
      {
        id: 1,
        name: "J SAATHVIK REDDY",
        position: "Event Coordinator Team Member",
        image: Saathvik,
        linkedin: "https://www.linkedin.com/in/j-saathvik-reddy-008022215?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"

      },
      {
        id: 2,
        name: "M TANUJA",
        position: "Event Coordinator Team Member",
        image: Tanuja,
        linkedin : "https://www.linkedin.com/in/tanuja-maddukuri-652b672b6?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
      },
      {
        id: 3,
        name: "M VANAJA",
        position: "Event Coordinator Team Member",
        image: Vanaja,
        linkedin : "https://www.linkedin.com/in/vanaja-maddukuri-6260532b7?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
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
              )
            })}
          </div>
          <div className="finance-team-row2">
            {finance_team_row2.map((value, index) => {
              return (
                <div className='box2 ' key={value.id}>
                  <img src={value.image} alt="" className='office-barrier-img' />
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
              )
            })}

          </div>
          <div className="web-dev-team-row2">
            {web_dev_team_row2.map((value, index) => {
              return (
                <div className='box2 ' key={value.id}>
                  <img src={value.image} alt="" className='office-barrier-img' />
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
              )
            })}

          </div>
          <div className="social-media-team-row2">
            {social_media_team_row2.map((value, index) => {
              return (
                <div className='box2 ' key={value.id}>
                  <img src={value.image} alt="" className='office-barrier-img' />
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
              )
            })}

          </div>
          <div className="event-coordinators-team-row2">
            {event_coordinators_team_row2.map((value, index) => {
              return (
                <div className='box2 ' key={value.id}>
                  <img src={value.image} alt="" className='office-barrier-img' />
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
              )
            })}

          </div>
          <div className="innovation-team-row2">
            {innovation_team_row2.map((value, index) => {
              return (
                <div className='box2 ' key={value.id}>
                  <img src={value.image} alt="" className='office-barrier-img' />
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
              )
            })}

          </div>
        </div>
      </div>
    </div>
  )
}

export default ACMTeams;