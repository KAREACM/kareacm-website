import "./Summerschool.css";
import Dean_Deepalakshmi from "./../../../Athithya/src/Assets/Faculty Coordinators/Deepalakshmi Mam.png";
import Chair_person from "./../../../Athithya/src/Assets/Office Barriers/YASHWANTH A.jpg";
import Dr_P_Chinnasamy from "./../../../Athithya/src/Assets/Faculty Coordinators/Dr P Chinnasamy.jpeg";
import { summer_school } from "../../constants/data";
function Summerschool() {
  const speakers = [
    {
      name: "Dr. Arijit Roy",
      title: "Assistant Professor",
      organization: "IIT Patna",
      image: summer_school[0].image,
      personal_profile:"https://arijit-iitkgp.github.io/",
    },
    {
      name: "Dr. Satendra Kumar",
      title: " Assistant Professor",
      organization: "IIT Patna",
      image: summer_school[1].image,
      personal_profile:"https://www.iitp.ac.in/~satendra/index.html",

    },
    {
      name: "Dr.Sankar Narayan Das",
      title: "Postdoctoral researcher",
      organization: " IIT Kanpur",
      image:summer_school[2].image,
      personal_profile:"https://sites.google.com/view/sankardaspersonalpage/home",
    },
    {
      name: "Dr.Barun Saha",
      title: "Senior researcher",
      organization: "IIT Kharagpur",
      image:
        summer_school[3].image,
      personal_profile:"https://www.linkedin.com/in/barunsaha/?originalSubdomain=in",
    },
    {
      name: "Dr. Sujata Pal",
      title: " Assistant Professor",
      organization: "IIT Ropar",
      image:
        summer_school[4].image,
      personal_profile:"https://www.iitrpr.ac.in/saide/profile.faculty.php?mail=sujata%40iitrpr.ac.in",
    },
    {
      name: "Dr.Debasis Das",
      title: "Associate Professor",
      organization: "IIT Jodhpur",
      image: summer_school[5].image,
      personal_profile:"https://research.iitj.ac.in/researcher/debasis-das-2",
    },
  ];

  const scheduleData = [
    {
      date: "16/06/2025",
      day: "Monday",
      topic: "Introduction to IoT",
    },
    {
      date: "17/06/2025",
      day: "Tuesday",
      topic: "Introduction to IoT",
    },
    {
      date: "18/06/2025",
      day: "Wednesday",
      topic: "IoT Protocols, Sensors & Actuators",
    },
    {
      date: "19/06/2025",
      day: "Thursday",
      topic: "IoT Protocols, Sensors & Actuators",
    },
    {
      date: "20/06/2025",
      day: "Friday",
      topic:
        "Next-generation network/communication technologies: 5G & Beyond for IoT, M2M, D2D etc",
    },
    {
      date: "21/06/2025",
      day: "Saturday",
      topic:
        "Next-generation network/communication technologies: 5G & Beyond for IoT, M2M, D2D etc",
    },
    {
      date: "23/06/2025",
      day: "Monday",
      topic:
        "Next-generation computing technologies for IoT (Cloud, Fog, Edge, SDN/NFV, etc)",
    },
    {
      date: "24/06/2025",
      day: "Tuesday",
      topic:
        "Next-generation computing technologies for IoT (Cloud, Fog, Edge, SDN/NFV, etc)",
    },
    {
      date: "25/06/2025",
      day: "Wednesday",
      topic: "AI/ML for IoT (with Gen-AI)",
    },
    {
      date: "26/06/2025",
      day: "Thursday",
      topic: "AI/ML for IoT (with Gen-AI)",
    },
    {
      date: "27/06/2025",
      day: "Friday",
      topic: "Gen-AI Introduction and Techniques",
    },
  ];
  const organizers = [
    {
      name: "Dr.P.Deepalakshmi Ramkumar",
      title: "Dean, Shool of Computing, KARE",
      image: Dean_Deepalakshmi,
      linkedin:
        "https://www.linkedin.com/in/dr-p-deepalakshmi-ramkumar-32408817/",
    },
    {
      name: "Dr.P Chinnasamy",
      title: "Assistant Professor, KARE",
      image: Dr_P_Chinnasamy,
      linkedin: "https://www.linkedin.com/in/dr-p-chinnasamy-52674b3b/",
    },
    {
      name: "Yashwanth Aravind",
      title: "Chairperson, ACM KARE",
      image: Chair_person,
      linkedin: "https://www.linkedin.com/in/yashwantharavind/",
    },
  ];

  return (
    
    <div className="summerschool-container">
       <div className="fixed top-0 left-0 w-full bg-blue-600 text-white py-2 z-50">
      <div className="overflow-hidden">
        <div className="scrolling-text">
          <span className="font-bold"> <b>"IMPORTANT ANNOUNCEMENT: Participants must bring their laptops for the entire duration of the Summer School program."</b></span>
        </div>
      </div>
      
      <style jsx>{`
        .scrolling-text {
          display: inline-block;
          white-space: nowrap;
          animation: scroll 12s linear infinite;
          border: 0.5px solid white;  
        }
        
        @keyframes scroll {
          from { transform: translateX(100%); }
          to { transform: translateX(-100%); }
        }
      `}</style>
    </div>
      
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="main-title">ACM India Summer school 2025</h1>
          <div className="focus-pill">
            <span>IOI AND NEXT-GENERATION NETWORKS</span>
          </div>
          <p className="hero-description">
            Join us for an immersive learning experience on IoT and
            Next-Generation Networks, designed to empower participants with
            cutting-edge skills in the future of connected technologies
          </p>
        </div>
        <div className="hero-image-container">
          <img
            src="https://www.hiotron.com/wp-content/uploads/2017/08/hIoTron-iot-training.jpg"
            alt="iot"
            className="hero-image"
          />
          <div className="image-decoration"></div>
        </div>
      </section>

      {/* Key Info Cards */}
      <section className="key-info-section">
        <div className="info-card date-card">
          <div className="card-icon">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
              <line x1="16" y1="2" x2="16" y2="6"></line>
              <line x1="8" y1="2" x2="8" y2="6"></line>
              <line x1="3" y1="10" x2="21" y2="10"></line>
            </svg>
          </div>
          <div className="card-content">
            <h3>Event Dates</h3>
            <p>16-28 June 2025</p>
            <span className="card-detail">Two weeks of intensive learning</span>
          </div>
        </div>

        <div className="info-card location-card">
          <div className="card-icon">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
          </div>
          <div className="card-content">
            <h3>Location</h3>
            <p> Kalasalingam Academy of Research and Education</p>
            <span className="card-detail"> TamilNadu, India</span>
          </div>
        </div>

        <div className="info-card eligibility-card">
          <div className="card-icon">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2"></path>
              <circle cx="9" cy="7" r="4"></circle>
              <path d="M22 21v-2a4 4 0 00-3-3.87"></path>
              <path d="M16 3.13a4 4 0 010 7.75"></path>
            </svg>
          </div>
          <div className="card-content">
            <h3>Eligibility</h3>
            <p>Tech Enthusiast</p>
            <span className="card-detail">
              Students and professionals welcome
            </span>
          </div>
        </div>
      </section>

      <section className="about-section">
        <div className="section-header">
          <h2>About the Program</h2>
          <div className="header-bar"></div>
        </div>

        <div className="program-cards">
          <div className="program-card">
            <div className="card-number">01</div>
            <h3>Expert-Led Sessions</h3>
            <p>
              Gain insights from renowned experts from IITs, Accenture Labs, and
              Hitachi Energy on IoT and advanced networking.
            </p>
          </div>

          <div className="program-card">
            <div className="card-number">02</div>
            <h3>Hands-On Learning</h3>
            <p>
              Participate in practical sessions on IoT device programming,
              sensor integration, AI/ML, and data analytics.
            </p>
          </div>

          <div className="program-card">
            <div className="card-number">03</div>
            <h3>Collaborative Projects</h3>
            <p>
              Work on real-world IoT projects with mentorship and guidance from
              experienced professionals.
            </p>
          </div>

          <div className="program-card">
            <div className="card-number">04</div>
            <h3>Networking Opportunities</h3>
            <p>
              Connect with passionate peers and professionals in the IoT and
              networking domains during this immersive 2-week event.
            </p>
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section className="schedule-section">
        <div className="section-header">
          <h2>Event Schedule</h2>
          <div className="header-bar"></div>
        </div>

        <div className="schedule-container">
          <div className="schedule-table">
            <div className="schedule-header">
              <div className="schedule-date">Date</div>
              <div className="schedule-day">Day</div>
              <div className="schedule-topic">Topic</div>
            </div>

            {scheduleData.map((item, index) => (
              <div
                className={`schedule-row ${index % 2 === 0 ? "even" : "odd"}`}
                key={index}
              >
                <div className="schedule-date">{item.date}</div>
                <div className="schedule-day">{item.day}</div>
                <div className="schedule-topic">{item.topic}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="speakers-section">
        <div className="section-header">
          <h2>Featured Speakers</h2>
          <div className="header-bar"></div>
        </div>

        <div className="speakers-grid">
          {speakers.map((speaker, index) => (
            <div className="speaker-card" key={index}>
              <div className="speaker-image">
                <img src={speaker.image} alt={`${speaker.name}`} />
              </div>
              <h3>{speaker.name}</h3>
              <p className="speaker-title">{speaker.title}</p>
              <p className="speaker-org">{speaker.organization}</p>
              <a
                href={speaker.personal_profile}
                className="linkedin-icon"
                target="_blank"
                rel="noopener noreferrer">personal profile</a>

            </div>
          ))}
        </div>
      </section>
      <section className="organizing-team-section">
        <div className="section-header">
          <h2>Organizing Team</h2>
          <div className="header-bar"></div>
        </div>
        <div className="organizers-grid">
          {organizers.map((member, index) => (
            <div className="organizer-card" key={index}>
              <div className="organizer-image">
                <img src={member.image} alt={member.name} />
              </div>
              <h3>{member.name}</h3>
              <p className="organizer-title">{member.title}</p>
              <a
                href={member.linkedin}
                className="linkedin-icon"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
                  alt="LinkedIn"
                />
              </a>
            </div>
          ))}
        </div>
      </section>
      <section className="info-section">
        <div className="section-header">
          <h2>Campus Facilities</h2>
          <div className="header-bar"></div>
        </div>
        <div className="facility-cards">
          <div className="facility-card fade-in">
            <img
              src="https://img.freepik.com/free-photo/cozy-modern-dorm-room-with-bunk-beds_23-2150571404.jpg"
              alt="Hostel"
            />
            <h3>Accommodation</h3>
            <p>
              Participants will be accommodated in our{" "}
              <b style={{ color: "white" }}> On-Campus Hostel</b> with all
              essential facilities to ensure a comfortable stay.
            </p>
          </div>
          <div className="facility-card fade-in delay-1">
            <img
              src="https://img.freepik.com/free-photo/vegetarian-lunch-tray-with-different-dishes_114579-22391.jpg"
              alt="Dining Hall"
            />
            <h3>Food</h3>
            <p>
              Delicious and hygienic vegetarian meals will be served at the
              <b style={{ color: "white" }}> Campus Dining Hall</b> throughout
              the event.
            </p>
          </div>
          <div className="facility-card fade-in delay-2">
            <img
              src="https://img.freepik.com/free-photo/futuristic-server-room-hardware-technology-background_53876-124676.jpg"
              alt="8501 Lab"
            />
            <h3>Venue</h3>
            <p>
              The program sessions will be conducted in the{" "}
              <b style={{ color: "white" }}>8501 Lab</b>.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
export default Summerschool;
