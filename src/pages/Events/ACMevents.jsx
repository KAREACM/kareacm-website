import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './EventsPage.css';

// Import event data
import {
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
} from '../../constants/data';

// Categorized event data
const hackathons = [
  { title: 'Hackare', data: hackare },
  { title: 'Hack Odyssey', data: hack_odyssey },
];

const espEvents = [
  { title: 'ESP Blast', data: espblast },
  { title: 'ESP in Analytics', data: esp_in_analytics },
  { title: 'ESP on IoE', data: esp_on_ioe },
  { title: 'ESP on Security', data: esp_on_security },
];

const workshops = [
  { title: 'Code Sprint', data: codex },
  { title: 'AI/ML Conversations', data: aiml },
  { title: 'Cook the Code', data: cookthecode },
  { title: 'Prashanth Event', data: prashanth },
  { title: 'Shourya Roy Speech', data: shouryaRoy },
  { title: 'Summer Boost Program', data: summerBoost },
  { title: 'Fun with Algorithms', data: fun_with_algorithms },
  { title: 'Hour of Code', data: hour_of_codes },
  { title: 'Idea Sparks - Round 1', data: idea_spark_1 },
  { title: 'Idea Sparks - Round 2', data: idea_sparks_2 },
];

// Render individual event carousels
function renderEventCarousel(eventTitle, eventData) {
  return (
    <div className="event" key={eventTitle}>
      <h2 className="event-title">{eventTitle}</h2>
      <Carousel showThumbs={false}>
        {eventData.map((event, index) => (
          <div key={index}>
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
      <h1 className="page-title">Previous Events</h1>

      {/* Hackathons Section */}
      <div className="events-section">
        <h2 className="page-title section-title">Hackathons</h2>
        <div className="event-gallery">
          {hackathons.map((event) => renderEventCarousel(event.title, event.data))}
        </div>
      </div>
      
       {/* ESP Events Section */}
      <div className="events-section">
        <h2 className="page-title section-title">ESP Events</h2>
        <div className="event-gallery">
          {espEvents.map((event) => renderEventCarousel(event.title, event.data))}
        </div>
      </div>

      {/* Workshops Section */}
      <div className="events-section">
        <h2 className="page-title section-title">Workshops</h2>
        <div className="event-gallery">
          {workshops.map((event) => renderEventCarousel(event.title, event.data))}
        </div>
      </div>
    </div>
  );
}

export default ACMevents;
