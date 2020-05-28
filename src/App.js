import React from 'react';
import './App.css';
import { MainInfo } from './MainInfo';
import { CssBaseline } from '@material-ui/core';
import Container from '@material-ui/core/Container';

const resume = {
  "EN": {
    "basics": {
      "name": "Bartosz Kwiatek",
      "label": "Front End Developer",
      "picture": "picture.jpg",
      "email": "bkwiatek3@gmail.com",
      "phone": "+48 889944994",
      "website": "https://kwiaciu.github.io/",
      "summary": "A summary of Bartosz Kwiatek... askdjfhakjsdfjadshkjfdsfjdsafdsjk lore Work with technical documentation for machines in wet chemical processing industry. Maintaining documentation in PDM system (Aras PLM), Performing FEM calculations (ANSYS Mechanical)",
      "location": {
        "address": "",
        "postalCode": "",
        "city": "Wroclaw",
        "countryCode": "PL",
        "region": ""
      },
      "profiles": [{
        "network": "GitHub",
        "username": "kwiaciu",
        "url": "https://github.com/kwiaciu"
      },
      {
        "network": "LinkedIn",
        "username": "bartoszkwiatek",
        "url": "https://www.linkedin.com/in/bartoszkwiatek/"
      }]
    },
    "projects": [{
      "title": "project title",
      "website": "www.videofotex.pl",
      "summary": "description of project",
      "keywords": ["html", "JQuery", "Bootstrap"]
    },
    {
      "title": "project title",
      "website": "www.videofotex.pl",
      "summary": "description of project",
      "keywords": ["html", "JQuery", "Bootstrap"]
    },
    {
      "title": "project title",
      "website": "www.videofotex.pl",
      "summary": "description of project",
      "keywords": ["html", "JQuery", "Bootstrap"]
    },],
    "work": [{
      "company": "RENA Polska",
      "position": "Mechanical Engineer",
      "website": "https://www.rena.com/en/",
      "startDate": "2020-01-07",
      "endDate": "now",
      "summary": "Work with technical documentation for machines in wet chemical processing industry.",
      "highlights": [
        "Desigining plastic welded constructions",
        "Creating and modifying parts and assemblies (SolidWorks)", "Preparing technical documentation", "Maintaining documentation in PDM system (KeyTech)"
      ]
    },
    {
      "company": "DeLaval Operations ",
      "position": "Mechanical Engineer",
      "website": "https://www.delaval.com/",
      "startDate": "2015-07-10",
      "endDate": "2019-03-30",
      "summary": "Creating technical documentation for agriculture machines and miliking systems.",
      "highlights": [
        "Desigining sheet metal and welded constructions",
        "Creating and modifying parts and assemblies (Solid Edge)", "Preparing technical documentation", "Maintaining documentation in PDM system (Aras PLM)", "Performing FEM calculations (ANSYS Mechanical)"
      ]
    }],

    "volunteer": [{
      "organization": "BEST Wroclaw",
      "position": "Graphic designer, Photographer",
      "website": "http://www.best.wroclaw.pl/",
      "startDate": "2014-03-20",
      "endDate": "2017-11-10",
      "summary": "Taking active part in preparing events for students of technical universities",
      "highlights": ["Designing graphic materials such as flyers, posters and banners"]
    }],

    "education": [{
      "institution": "WSB University",
      "area": "Front End Developer with Angular",
      "studyType": "Postgraduate studies",
      "startDate": "2019-10-19",
      "endDate": "2020-07-10",
      "gpa": "",
      "courses": [
        "EcmaScript6", "React and Redux", "Webpack", "Typescript", "Angular"
      ]
    },
    {
      "institution": "Udacity",
      "area": "Front End Web Developer Course",
      "studyType": "Google Developer Challenge Scholarship",
      "startDate": "2017-11-06",
      "endDate": "2018-01-06",
      "gpa": "",
      "courses": [
        "HTML5", "CSS", "JQuery", "JavaScript", "RWD"
      ]
    },
    {
      "institution": "Wroclaw University of Technology",
      "area": "Aeronautical Engineering",
      "studyType": "Master",
      "startDate": "2016-03-01",
      "endDate": "2018-07-12",
      "gpa": "",
      "courses": [
        ""
      ]
    },
    {
      "institution": "Wroclaw University of Technology",
      "area": "Mechanical Engineering",
      "studyType": "Bachelor",
      "startDate": "2012-10-01",
      "endDate": "2016-02-16",
      "gpa": "",
      "courses": [
        ""
      ]
    },
    ],
    "awards": [{
      "title": "",
      "date": "",
      "awarder": "",
      "summary": ""
    }],
    "publications": [{
      "name": "",
      "publisher": "",
      "releaseDate": "",
      "website": "",
      "summary": ""
    }],
    "skills": [
      {
        "name": "HTML5",
        "level": "60",
        "keywords": []
      },
      {
        "name": "CSS/SCSS",
        "level": "60",
        "keywords": []
      },
      {
        "name": "JavaScript/ES6",
        "level": "55",
        "keywords": []
      },
      {
        "name": "React",
        "level": "25",
        "keywords": []
      },
      {
        "name": "Angular",
        "level": "15",
        "keywords": []
      },
      {
        "name": "Webpack",
        "level": "10",
        "keywords": []
      },
      {
        "name": "Designing",
        "level": "35",
        "keywords": ["Adobe Photoshop", "Adobe Illustrator", "Adobe XD"]
      },
      {
        "name": "Others",
        "level": "",
        "keywords": ["Python", "Django", "JQuery", "Bootstrap"]
      },

    ],
    "languages": [{
      "language": "Polish",
      "fluency": "native"
    },
    {
      "language": "English",
      "fluency": "C1"
    },
    {
      "language": "German",
      "fluency": "A1"
    },

    {
      "language": "Japanese",
      "fluency": "A0"
    },],
    "interests": [{
      "name": "",
      "keywords": []
    }],
    "references": [{
      "name": "",
      "reference": ""
    }]
  }
}

function App() {
  return (
    <div className="App">
      <CssBaseline />
      <Container fixed>
        <MainInfo data={resume.EN} />
      </Container>

    </div>
  );
}

export default App;
