import React from 'react';
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
} from './../../constants/data.js'; 
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './ACMEvents.css';  

function ACMevents() {
  return (
    <div>
      <h1> Previous events | Upcoming events </h1>
      
      <div>
        <h1> Previous Events </h1>
        <div className="event-gallery">

          <h2>Code Sprint</h2>
          <div className="event-images">
            {codex.map((event) => (
              <img key={event.id} src={event.image} alt={`Code Sprint ${event.id}`} />
            ))}
          </div>

          <h2>AI/ML Conversations</h2>
          <div className="event-images">
            {aiml.map((event) => (
              <img key={event.id} src={event.image} alt={`AI ML Event ${event.id}`} />
            ))}
          </div>

          <h2>Cook the Code</h2>
          <div className="event-images">
            {cookthecode.map((event) => (
              <img key={event.id} src={event.image} alt={`Cook the Code ${event.id}`} />
            ))}
          </div>

          <h2>Prashanth's Event</h2>
          <div className="event-images">
            {prashanth.map((event) => (
              <img key={event.id} src={event.image} alt={`Prashanth Event ${event.id}`} />
            ))}
          </div>

          <h2>ESP Blast</h2>
          <div className="event-images">
            {espblast.map((event) => (
              <img key={event.id} src={event.image} alt={`ESP Blast ${event.id}`} />
            ))}
          </div>

          <h2>Shourya Roy Speech</h2>
          <div className="event-images">
            {shouryaRoy.map((event) => (
              <img key={event.id} src={event.image} alt={`Shourya Roy Speech ${event.id}`} />
            ))}
          </div>

          <h2>Summer Boost Program</h2>
          <div className="event-images">
            {summerBoost.map((event) => (
              <img key={event.id} src={event.image} alt={`Summer Boost ${event.id}`} />
            ))}
          </div>

          

          <h2>ESP in Analytics</h2>
          <div className="event-images">
            {esp_in_analytics.map((event) => (
              <img key={event.id} src={event.image} alt={`ESP in Analytics ${event.id}`} />
            ))}
          </div>

          <h2>ESP on IoE</h2>
          <div className="event-images">
            {esp_on_ioe.map((event) => (
              <img key={event.id} src={event.image} alt={`ESP on IoE ${event.id}`} />
            ))}
          </div>

          <h2>ESP on Security</h2>
          <div className="event-images">
            {esp_on_security.map((event) => (
              <img key={event.id} src={event.image} alt={`ESP on Security ${event.id}`} />
            ))}
          </div>

          <h2>Fun with Algorithms</h2>
          <div className="event-images">
            {fun_with_algorithms.map((event) => (
              <img key={event.id} src={event.image} alt={`Fun with Algorithms ${event.id}`} />
            ))}
          </div>

          <h2>Hackare</h2>
          <div className="event-images">
            {hackare.map((event) => (
              <img key={event.id} src={event.image} alt={`Hackare ${event.id}`} />
            ))}
          </div>

          <h2>Hack Odyssey</h2>
          <div className="event-images">
            {hack_odyssey.map((event) => (
              <img key={event.id} src={event.image} alt={`Hack Odyssey ${event.id}`} />
            ))}
          </div>

          <h2>Hour of Code</h2>
          <div className="event-images">
            {hour_of_codes.map((event) => (
              <img key={event.id} src={event.image} alt={`Hour of Code ${event.id}`} />
            ))}
          </div>

          <h2>Idea Sparks - Round 1</h2>
          <div className="event-images">
            {idea_spark_1.map((event) => (
              <img key={event.id} src={event.image} alt={`Idea Sparks Round 1 ${event.id}`} />
            ))}
          </div>

          <h2>Idea Sparks - Round 2</h2>
          <div className="event-images">
            {idea_sparks_2.map((event) => (
              <img key={event.id} src={event.image} alt={`Idea Sparks Round 2 ${event.id}`} />
            ))}
          </div>
          
        </div>
      </div>
    </div>);


 
}

export default ACMevents;
