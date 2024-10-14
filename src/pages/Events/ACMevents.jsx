

import React from 'react';
import './EventsPage.css';


import { codex } from '../../constants/data';
import { aiml } from '../../constants/data';
import { cookthecode } from '../../constants/data';
import { prashanth } from '../../constants/data';
import { espblast } from '../../constants/data';
import { shouryaRoy } from '../../constants/data';
import { summerBoost } from '../../constants/data';
import { esp_in_analytics } from '../../constants/data';
import { esp_on_ioe } from '../../constants/data';
import { esp_on_security } from '../../constants/data';
import { fun_with_algorithms } from '../../constants/data';
import { hackare } from '../../constants/data';
import { hack_odyssey } from '../../constants/data';
import { hour_of_codes } from '../../constants/data';
import { idea_spark_1 } from '../../constants/data';
import { idea_sparks_2 } from '../../constants/data';

function ACMevents() {
  return (
    <div>
      <h1>Previous events | Upcoming events</h1>
      
      <div>
        <h1>Previous Events</h1>
        <div className="event-gallery">

          
          <h2>Code Sprint</h2>
          <div className="event-images">
            <img src={codex[0].image} alt="Code Sprint 1" />
            
           
          </div>

          <h2>AI/ML Conversations</h2>
          <div className="event-images">
            <img src={aiml[0].image} alt="AI ML Event 1" />
            <img src={aiml[1].image} alt="AI ML Event 2" />
           
          </div>

          <h2>Cook the Code</h2>
          <div className="event-images">
            <img src={cookthecode[0].image} alt="Cook the Code 1" />
            <img src={cookthecode[1].image} alt="Cook the Code 2" />
           
          </div>

       
          <h2>Prashanth Event</h2>
          <div className="event-images">
            <img src={prashanth[0].image} alt="Prashanth Event 1" />
            <img src={prashanth[1].image} alt="Prashanth Event 2" />
            
          </div>

       
          <h2>ESP Blast</h2>
          <div className="event-images">
            <img src={espblast[0].image} alt="ESP Blast 1" />
            <img src={espblast[1].image} alt="ESP Blast 2" />
    
          </div>

       
          <h2>Shourya Roy Speech</h2>
          <div className="event-images">
            <img src={shouryaRoy[0].image} alt="Shourya Roy Speech 1" />
            <img src={shouryaRoy[1].image} alt="Shourya Roy Speech 2" />
            
          </div>

       
          <h2>Summer Boost Program</h2>
          <div className="event-images">
            <img src={summerBoost[0].image} alt="Summer Boost 1" />
            <img src={summerBoost[1].image} alt="Summer Boost 2" />
            
          </div>

         
          <h2>ESP in Analytics</h2>
          <div className="event-images">
            <img src={esp_in_analytics[0].image} alt="ESP in Analytics 1" />
            <img src={esp_in_analytics[1].image} alt="ESP in Analytics 2" />
            
          </div>

          <h2>ESP on IoE</h2>
          <div className="event-images">
            <img src={esp_on_ioe[0].image} alt="ESP on IoE 1" />
            <img src={esp_on_ioe[1].image} alt="ESP on IoE 2" />
          
          </div>

          <h2>ESP on Security</h2>
          <div className="event-images">
            <img src={esp_on_security[0].image} alt="ESP on Security 1" />
            <img src={esp_on_security[1].image} alt="ESP on Security 2" />
           
          </div>

          
          <h2>Fun with Algorithms</h2>
          <div className="event-images">
            <img src={fun_with_algorithms[0].image} alt="Fun with Algorithms 1" />
            <img src={fun_with_algorithms[1].image} alt="Fun with Algorithms 2" />
           
          </div>

          
          <h2>Hackare</h2>
          <div className="event-images">
            <img src={hackare[0].image} alt="Hackare 1" />
            <img src={hackare[1].image} alt="Hackare 2" />
           
          </div>

          
          <h2>Hack Odyssey</h2>
          <div className="event-images">
            <img src={hack_odyssey[0].image} alt="Hack Odyssey 1" />
            <img src={hack_odyssey[1].image} alt="Hack Odyssey 2" />
            
          </div>

          <h2>Hour of Code</h2>
          <div className="event-images">
            <img src={hour_of_codes[0].image} alt="Hour of Code 1" />
            <img src={hour_of_codes[1].image} alt="Hour of Code 2" />
           
          </div>

          <h2>Idea Sparks - Round 1</h2>
          <div className="event-images">
            <img src={idea_spark_1[0].image} alt="Idea Sparks Round 1 - 1" />
            <img src={idea_spark_1[1].image} alt="Idea Sparks Round 1 - 2" />
            
          </div>

         
          <h2>Idea Sparks - Round 2</h2>
          <div className="event-images">
            <img src={idea_sparks_2[0].image} alt="Idea Sparks Round 2 - 1" />
            <img src={idea_sparks_2[1].image} alt="Idea Sparks Round 2 - 2" />
            
          </div>

        </div>
      </div>
    </div>
  );
}

export default ACMevents;
