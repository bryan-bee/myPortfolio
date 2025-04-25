import './Work.sass';
import SectionHeading from '../../Components/SectionHeading/SectionHeading.js';


function ShowWork() {
  const work = [
    {
      name:'Leidos',
      description:'Software Engineer Intern',
      technologies:'AWS, Python, Javascript, Llama 3 LLM, RESTful API',
      date:'January 2025 - Present',
      content:[
        '● Designed and deployed an automated ETL pipeline using AWS S3, Glue, and Athena to transform TrackVia datasets into scalable, queryable formats for downstream analytics.',
        '● Developed RESTful API endpoints for a resume screening platform powered by AWS Bedrock’s LLaMA 3, enabling automated skill extraction and improving recruiter efficiency by reducing manual candidate filtering.',
        '● Collaborated in an Agile Scrum environment with daily standups, sprint planning, peer code reviews, and test-driven development to ensure robust, maintainable code.'
      ],
    },
    {
      name:'We2Link',
      description:'Software Engineer Intern',
      technologies:'HTML, CSS, JavaScript, React, Firebase',
      date:'August 2024 - May 2025',
      content:[
        '• Developed a full-stack application with React.js and Firebase to enhance memory management for users with cognitive impairments by helping them efficiently organize memories, passwords, contacts, and daily tasks.',
        '• Engineered a detect-duplicate-contacts and merge feature by representing contacts as graph nodes, connecting them via shared contact details, and performing DFS to identify clusters of duplicates, enabling users to selectively merge and retain relevant contacts.'
      ],
    },
    {
      name:'Accenture',
      description:'Technology Analyst Intern',
      technologies:'HTML, CSS, JavaScript, React, Java, Spring Boot',
      date:'June 2024 - August 2024',
      content:[
        '• Revamped the frontend of a client’s billing platform using React.js to improve visuals and create a modern, intuitive user interface, which significantly enhanced the user experience for 3.7 million customers.',
        '• Developed secure and efficient SQL queries by employing isolation levels, PgAdmin database analysis, and prepared statements, which enhanced the backend endpoints of the billing platform.'
      ],
    },
    {
      name:'Partillion BioScience',
      description:'Software Engineer Intern',
      technologies:'Python, Jython, Tk-Inter, OpenCV, ImageJ, API Integration, Automation',
      date:'Feb 2024 - May 2024',
      content:['• Spearheaded the development of an OpenCV-based particle analysis program for nano-vial detection and analysis, resulting in a 35% improvement in batch quality control and streamlined production evaluation.',
      '• Developed a Jython script in ImageJ to automate the merging of color channels for nano-vial production images, resulting in significant reduction in the manual work in creating composite images.',
      '• Conducted comprehensive debugging across multiple programs and actively maintained existing software by creating detailed documentation, which enhanced system reliability and addressed technical debt'
      ],
    },
    {
      name:'Northrop Grumman',
      description:'Software Engineer Intern',
      technologies:'Python, Git, REST-API, Pandas, Matplotlib, NumPy',
      date:'Jun 2023 - Aug 2023',
      content:['• Collaborated with product owners and my team of engineers to automate metrics generation in Python, which resulted in a 90% reduction in the manual workload for metrics collection across all projects and teams.',
      '• Spearheaded the development of our backend data pipeline by designing, implementing, and testing the code base, which provided half the metrics for our automation platform.',
      '• Systematically conducted code testing, including bug replication, debugging, and post-resolution testing.'
      ],
    }
  ];
  return (
    <div className='work_items'>

      {work.map(i => (
        <div className='work_items_card'>

          <a href={i.link} target='_blank' rel='noopener noreferrer' className='work_items_card_link fs3'
            style={{fontWeight: 'bold'}}>{i.name}</a>
          <div className='work_items_card_description fs1'>{i.description}</div>
          <div className='work_items_card_technologies fs1'>{i.technologies}</div>
          <div className='work_items_card_date fs1'>{i.date}</div>
          {i.content.map(j => (
            <ul>
              <li className='work_items_card_maintext fs1'>{j}</li>
            </ul>
          ))}



        </div>
      ))}


    </div>
  );
}


function Work() {
  return (
    <div className='work_main' id='work'>

      <div className='work'>

        <SectionHeading text='Work Experience' color='rgb(247, 247, 247)' />
        <ShowWork />

      </div>

    </div>
  )
}


export default Work;
