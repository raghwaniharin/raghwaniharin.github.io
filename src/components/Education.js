import React from 'react';


const educationData = [
  {
    institution: 'Waikato Institute of Technology',
    degree: 'Bachelor of Applied Information Technology',
    specialization: 'Software Development Pathway',
    graduation: 'May 2026',
  },
  {
    institution: 'University of Nairobi',
    degree: 'Bachelors of Computer Science',
    completed: 'First Year',
  },
  {
    institution: 'S.C.L.P SAMAJ SCHOOL - Nairobi',
    degree: 'International A Levels - PEARSON',
    specialization: 'ENGINEERING AND COMPUTING',
    graduation: 'JULY 2021',
  },
  {
    institution: 'S.C.L.P SAMAJ SCHOOL - Nairobi',
    degree: 'IGCSE O Levels - EDEXCEL',
    specialization: 'SCIENCES AND COMPUTING',
    graduation: 'JULY 2019',
  },
];
const Education = () => {
    return (
        <div>
        <div className="pgtitle" id="education">
          <h1>Education</h1>
        </div>
        <ul className="listtg"> {/* Styled list */}
          {educationData.map((item, index) => (
            <li key={index} className="education-item"> {/* Add a new class for items */}
              <h2 className="redtitle">{item.institution}</h2> {/* Highlight institution */}
              <p>
                <strong>{item.degree}</strong>
                {item.specialization && ` - ${item.specialization}`}
              </p>
              {item.graduation && <p>Graduation: {item.graduation}</p>}
              {item.completed && <p>Completed {item.completed}</p>}
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
export default Education;
