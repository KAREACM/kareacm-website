// import React from "react";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './EventsPage.css';
import { Link } from 'react-router-dom';

// Import event data
import {
  industry_day,
  codex,
  aiml,
  cookthecode,
  prashanth,
  espblast,
  shouryaRoy,
  summerBoost,
  esp_in_analytics,
  esp_on_ioe,
  esp_on_security,
  fun_with_algorithms,
  hackare,
  hack_odyssey,
  hour_of_codes,
  idea_spark_1,
  idea_sparks_2,
  venkateshwaran,
  genAiWebinar,
  humanComputerInteractionWebinar,
  vertexAi,
  sqlKnight,
  techQuest,
  virtualCodeCorner,
  malathi,
  ideathon,
  codex_series6,
  codex_series5,
  codex_series4,
  codex_series3,
  codex_series2,
  codex_series1,
  outreach_program,
  hackare2,
  buildit,
  hour_code_2k24,
  computing_week,
  hackAiThon,
  Rocs
} from '../../constants/data';

// Categorized event data
const hackathons = [
  { title: 'Hackare', data: hackare },
  { title: 'Hack Odyssey', data: hack_odyssey },
  { title: 'Hackare 2.0', data: hackare2 },
  { title: 'HackAiThon', data: hackAiThon },
];

const espEvents = [
  {
    title: 'ESP on A Convergence of Hardware, Software and Machine Learning',
    data: aiml,
  },
  { title: 'ESP on BLAST algorithm', data: espblast },
  { title: 'ESP on Analytics in Industry', data: esp_in_analytics },
  { title: 'ESP on IoE', data: esp_on_ioe },
  { title: 'ESP on Security', data: esp_on_security },
  { title: 'ESP on How to win a hackathon and ICPC', data: prashanth },
  { title: 'ESP on Technology Trends: A Perspective', data: venkateshwaran },
];

const ideaSparks = [
  { title: 'Idea Sparks - Round 1', data: idea_spark_1 },
  { title: 'Idea Sparks - Round 2', data: idea_sparks_2 },
];

const ideathons = [{ title: 'Ideathon', data: ideathon }];

const otherEvents = [
  { title: 'Build It Season-1', data: buildit },
  { title: 'Code Sprint', data: codex },
  { title: 'Cook the Code', data: cookthecode },
  { title: 'Summer Boost Program', data: summerBoost },
  { title: 'Hour of Code', data: hour_of_codes },
  { title: 'SQL Knight', data: sqlKnight },
  { title: 'Tech Quest', data: techQuest },
  { title: 'Virtual Code Corner', data: virtualCodeCorner },
];
const industryExpert = [
  { title: 'Fun with Algorithms', data: fun_with_algorithms },
  { title: 'Data Science and Gen AI', data: shouryaRoy },
  { title: 'Agentic Workflow & Gen AI', data: genAiWebinar },
  {
    title: 'Human Computer Interaction',
    data: humanComputerInteractionWebinar,
  },
  { title: 'Ideas to innovation', data: malathi },
];

const codex_series = [
  { title: 'CodeX Series 1', data: codex_series1 },
  { title: 'CodeX Series 2', data: codex_series2 },
  { title: 'CodeX Series 3', data: codex_series3 },
  { title: 'CodeX Series 4', data: codex_series4 },
  { title: 'CodeX Series 5', data: codex_series5 },
  { title: 'CodeX Series 6', data: codex_series6 },
];

const hourCode = [
  { title: 'Hour of Code', data: hour_code_2k24 },
  { title: 'ROCS', data: Rocs},
  { title: 'ACM Industry Day', data: industry_day}
];

const webinars = [{ title: 'Vertex AI', data: vertexAi }];

const out_reach_program = [
  {
    title: 'Out Reach Program at Linga Global School',
    data: outreach_program,
  },
  {
    title:
      'Computing week celebration at Govt. Higher Secondary School, Krishnan Koil',
    data: computing_week,
  },
];

// Render individual event carousels
function renderEventCarousel(eventTitle, eventData) {
  return (
    <div className="event" key={eventTitle}>
      <h2 className="event-title">{eventTitle}</h2>
      <Carousel showThumbs={false}>
        {eventData.map((event, index) => (
          <div key={index} className="image">
            <img src={event.image} alt={`${eventTitle} ${index + 1}`} />
          </div>
        ))}
      </Carousel>
    </div>
  );
}

function ACMevents() {
  return (
    <div className="events-container">
      <h1 className="page-title">Events</h1>
      {/* Upcoming Events Section */}
      <div className="events-section">
        <h2 className="page-title section-title">Upcoming Events</h2>
        <div className="event-gallery justify-center">
          {hourCode.map((event) => (
            <div key={event.title} className="event-card">
              {renderEventCarousel(event.title, event.data)}
              {event.title == 'Hour of Code' && (
              <div>
                {/* <Link to="/hour-of-code">
                  <button className="learn-more-btn mt-4 px-6 py-2 text-white bg-blue-500 rounded-lg shadow-md transition-transform duration-300 ease-in-out hover:bg-blue-600 hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-400">
                    Learn More
                  </button>
                </Link> */}
              </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* ESP Events Section */}
      <div className="events-section">
        <h2 className="page-title section-title">ESP Events</h2>
        <div className="event-gallery">
          {espEvents.map((event) =>
            renderEventCarousel(event.title, event.data)
          )}
        </div>
      </div>

      {/* Industry Expert Section */}
      <div className="events-section">
        <h2 className="page-title section-title">Industry Experts</h2>
        <div className="event-gallery">
          {industryExpert.map((event) =>
            renderEventCarousel(event.title, event.data)
          )}
        </div>
      </div>

      {/* Hackathons Section */}
      <div className="events-section">
        <h2 className="page-title section-title">Hackathons</h2>
        <div className="event-gallery justify-center">
          {hackathons.map((event) =>
            renderEventCarousel(event.title, event.data)
          )}
        </div>
      </div>

      {/* ideaSparks Section */}
      <div className="events-section">
        <h2 className="page-title section-title">Idea Spark</h2>
        <div className="event-gallery justify-center">
          {ideaSparks.map((event) =>
            renderEventCarousel(event.title, event.data)
          )}
        </div>
      </div>

      {/* ideathon Section */}
      <div className="events-section">
        <h2 className="page-title section-title">Ideathon</h2>
        <div className="event-gallery justify-center">
          {ideathons.map((event) =>
            renderEventCarousel(event.title, event.data)
          )}
        </div>
      </div>

      {/* Webinar Section */}
      <div className="events-section">
        <h2 className="page-title section-title">Webinar</h2>
        <div className="event-gallery justify-center">
          {webinars.map((event) =>
            renderEventCarousel(event.title, event.data)
          )}
        </div>
      </div>

      {/* CodeX Series Section */}

      <div className="events-section">
        <h2 className="page-title section-title">CodeX Series</h2>
        <div className="event-gallery ">
          {codex_series.map((event) =>
            renderEventCarousel(event.title, event.data)
          )}
        </div>
      </div>

      {/* Out Reach Program Section */}
      <div className="events-section">
        <h2 className="page-title section-title">Out Reach Program</h2>
        <div className="event-gallery justify-center ">
          {out_reach_program.map((event) =>
            renderEventCarousel(event.title, event.data)
          )}
        </div>
      </div>

      {/* otherEvents Section */}
      <div className="events-section">
        <h2 className="page-title section-title">Other Events</h2>
        <div className="event-gallery">
          {otherEvents.map((event) =>
            renderEventCarousel(event.title, event.data)
          )}
        </div>
      </div>
    </div>
  );
}

export default ACMevents;
