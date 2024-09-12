/** 
 * FileName - data.js
 * FileType - .js (JavaScript file)
 * Lines - 821
 * Created On - 15/8/2023, 01:19:20
 * Author - [Author Name]
 * Description - This file imports and exports all data as arrays of objects to organize team members, events, projects, and more.
 */

// Executive Team List
export const ExecList = [
    {
      id: 0,
      name: 'John Doe',
      position: 'Chairperson',
      image: JohnDoeImage,
      linkedin: "https://linkedin.com/in/johndoe",
      github: "https://github.com/johndoe",
      instagram: "https://instagram.com/johndoe",
    },
    {
      id: 1,
      name: 'Jane Doe',
      position: 'Vice-Chairperson',
      image: JaneDoeImage,
      linkedin: "https://linkedin.com/in/janedoe",
      github: "https://github.com/janedoe",
      instagram: "https://instagram.com/janedoe",
    },
    // Add more executive team members
  ];
  
  // Home Page Events List
  export const EventsList = [
    {
      id: 'event-1',
      name: 'Tech Conference 2023',
      image: TechConferenceImage,
      desc: 'The annual Tech Conference brings together over 1000 participants to explore the latest innovations in technology, focusing on AI, IoT, and cybersecurity.',
    },
    {
      id: 'event-2',
      name: 'Hackathon 2024',
      image: HackathonImage,
      desc: 'A 48-hour hackathon where participants push the boundaries of innovation in software development, collaborating to solve real-world problems.',
    },
    // Add more events
  ];
  
  // Gallery List
  export const GalleryList = [
    {
      img: EventImage1,
      title: 'Opening Ceremony 2023',
    },
    {
      img: EventImage2,
      title: 'Keynote Speech by Industry Expert',
    },
    // Add more gallery images
  ];
  
  // Projects List
  export const ProjectsList = [
    {
      id: 'Project-1',
      photo: AIProjectImage,
      title: 'AI for Accessibility',
      description: 'This project focuses on using artificial intelligence to assist individuals with disabilities by offering real-time accessibility solutions.',
    },
    {
      id: 'Project-2',
      photo: IoTProjectImage,
      title: 'IoT Smart Home',
      description: 'An IoT-based smart home system that allows users to control their home appliances remotely via mobile devices.',
    },
    // Add more projects
  ];
  
  // Team Heads List
  export const TeamHeadsList = [
    // Community Managers
    {
      id: 0,
      teamName: 'Community Managers',
      heads: [
        {
          id: 0,
          photo: Manager1Image,
          name: 'Alice Smith',
          post: 'Community Manager',
        },
        {
          id: 1,
          photo: Manager2Image,
          name: 'Bob Johnson',
          post: 'Community Manager',
        },
      ]
    },
    // Events Team
    {
      id: 1,
      teamName: 'Events',
      heads: [
        {
          id: 0,
          photo: EventHead1Image,
          name: 'Charlie Williams',
          post: 'Head of Events',
        },
        {
          id: 1,
          photo: EventHead2Image,
          name: 'Dana Brown',
          post: 'Deputy Head of Events',
        },
        // Add more event team members
      ]
    },
    // Finance Team
    {
      id: 2,
      teamName: 'Finance',
      heads: [
        {
          id: 0,
          photo: FinanceHead1Image,
          name: 'Edward Green',
          post: 'Head of Finance',
        },
        {
          id: 1,
          photo: FinanceHead2Image,
          name: 'Fiona Blue',
          post: 'Deputy Head of Finance',
        },
      ]
    },
    // Add more teams (e.g., marketing, technical, etc.)
  ];
  