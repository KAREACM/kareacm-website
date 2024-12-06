import React from 'react'
import './../../Homepage/About-Section/About.css'
import Faculties from '../Faculty Coordinators/Faculties';

function About() {
  return (
    <div>

      <div className="about-container">
        {/* Following are the Contents below the Hero-Section */}
        

        <div className="title">
          ACM Student  Chapter KARE
        </div>
        <br />
        <br />
        <div className="content1">
          We are a dynamic community of tech enthusiasts driven by a shared passion to explore the multifaceted world of computing
        </div>
        <br />
        <div className="content2">
          Our main motive is to empower the students to develop and enhance their skills
        </div>
        <br />
        <br />
        <div className="member-button">
        <button>
          <a href="https://www.acm.org/membership" target="_blank" rel="noopener noreferrer"><span>Become a member</span></a>
        </button>
      </div>
        <div className="content3">
          <div className="members">
            <div>50+</div>
            <div>Members</div>
          </div>
          {/* Below classname is events2 beacause events is already taken by the navbar component */}
          <div className="events2">
            <div>75+</div>
            <div>Events</div>
          </div>
          <div className="societies">
            <div>3+</div>
            <div>Societies</div>
          </div>
          <div className="mentors">
            <div>10+</div>
            <div>Mentors</div>
          </div>
        </div>
      </div>
      

      <div className="faculties">
        <Faculties />
      </div>
    </div>
  )
}

export default About;