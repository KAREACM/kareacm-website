import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './EventsPage.css';

// Import all the event data at once
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
  idea_sparks_2
} from '../../constants/data';

// Helper function to render a carousel for each event
function renderEventCarousel(eventTitle, eventData) {
  return (
    <div className="event">
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
      <h1 className="page-title">Previous events</h1>
      
      <div className="events-section">
        <h1 className="section-title">Previous Events</h1>
        <div className="event-gallery">

          {/* Render each event using the renderEventCarousel helper function */}
          {renderEventCarousel('Code Sprint', codex)}
          {renderEventCarousel('AI/ML Conversations', aiml)}
          {renderEventCarousel('Cook the Code', cookthecode)}
          {renderEventCarousel('Prashanth Event', prashanth)}
          {renderEventCarousel('ESP Blast', espblast)}
          {renderEventCarousel('Shourya Roy Speech', shouryaRoy)}
          {renderEventCarousel('Summer Boost Program', summerBoost)}
          {renderEventCarousel('ESP in Analytics', esp_in_analytics)}
          {renderEventCarousel('ESP on IoE', esp_on_ioe)}
          {renderEventCarousel('ESP on Security', esp_on_security)}
          {renderEventCarousel('Fun with Algorithms', fun_with_algorithms)}
          {renderEventCarousel('Hackare', hackare)}
          {renderEventCarousel('Hack Odyssey', hack_odyssey)}
          {renderEventCarousel('Hour of Code', hour_of_codes)}
          {renderEventCarousel('Idea Sparks - Round 1', idea_spark_1)}
          {renderEventCarousel('Idea Sparks - Round 2', idea_sparks_2)}

        </div>
      </div>
    </div>
  );
}

export default ACMevents;
