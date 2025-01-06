import { ExternalLink, Clock, Calendar, BookOpen } from 'lucide-react';
import './../Hourofcode/HourOfCode.css'

const DayTask = ({ day, links }) => (
    <div className="day-task">
      <h3 className="day-title">Day {day}</h3>
      <ul className="task-list">
        {links.map((link, index) => (
          <li key={index} className="task-item">
            <ExternalLink className="task-icon" />
            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="task-link"
            >
              {link.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
  
  export function HourOfCode() {
    return (
      <div className="container">
        <div className="content-wrapper">
          <div className="header">
            <h1 className="main-title">HOUR OF CODE</h1>
            <p className="subtitle">7 Days Of Learning</p>
          </div>
  
          <div className="guidelines">
            <h2 className="guidelines-title">Guidelines For Getting One Credit Under EE</h2>
            <ul className="guidelines-list">
              <li className="guideline-item">
                <Clock className="guideline-icon" />
                <span>Complete all assigned tasks over a period of seven days.</span>
              </li>
              <li className="guideline-item">
                <BookOpen className="guideline-icon" />
                <span>
                  For each task, take a screenshot and include it in a Word document with a
                  descriptive paragraph explaining what you learned.
                </span>
              </li>
              <li className="guideline-item">
                <Calendar className="guideline-icon" />
                <span>Submit the completed Word document by January 25th to receive credit.</span>
              </li>
            </ul>
          </div>
  
          <div className="tasks-container">
            <DayTask
              day="1"
              links={[
                { title: "Data Types in Python", url: "https://youtu.be/gCCVsvgR2KU" },
                { title: "Python Important Concepts", url: "https://youtu.be/Gx5qb1uHss4" },
              ]}
            />
            <DayTask
              day="2"
              links={[
                { title: "OOP", url: "https://youtu.be/rLyYb7BFgQI" },
                { title: "Key Words", url: "https://youtu.be/rKk8XPLysj8" },
              ]}
            />
            <DayTask
              day="3"
              links={[
                { title: "Loops Part 1", url: "https://youtu.be/23vCap6iYSs" },
                { title: "Loops Part 2", url: "https://youtu.be/94UHCEmprCY" },
              ]}
            />
            <DayTask
              day="4"
              links={[{ title: "More On OOPS", url: "https://youtu.be/cVh0me5y8Yg" }]}
            />
            <DayTask
              day="5"
              links={[
                { title: "Functions Basic", url: "https://youtu.be/89cGQjB5R4M" },
                { title: "Functions Advanced", url: "https://youtu.be/u-OmVr_fT4s" },
              ]}
            />
            <DayTask
              day="6"
              links={[
                { title: "Python Coding", url: "https://youtu.be/0K_eZGS5NsU" },
                { title: "Big Oh", url: "https://youtu.be/BgLTDT03QtU" },
              ]}
            />
            <DayTask
              day="7"
              links={[
                { title: "Simple Guide", url: "https://youtu.be/YT3GoxjXhIc" },
                { title: "Python Coding Interviews Tips", url: "https://realpython.com/courses/python-coding-interviews-tips-best-practices/" },
              ]}
            />
          </div>
        </div>
      </div>
    );
  }