import './Work.sass';
import SectionHeading from '../../Components/SectionHeading/SectionHeading.js';


function ShowWork() {
  const work = [
    {
      name:'Accenture',
      description:'Technology Analyst',
      technologies:'Python, TypeScript, AWS CDK, AWS AppSync, Amazon Connect, Amazon DynamoDB, Amazon S3, AWS IAM, Amazon Cognito, Amazon Bedrock, CloudFormation, Boto3, Pydantic, SAP IS-U, ABAP, Open SQL, BDC, Git',
      date:'September 2025 - Present',
      content:[
        '● Developed the real-time event-routing layer for an AI agent-assist platform for Cigna that was approved to move forward with full production build-out following a stakeholder demo, using 2 AWS AppSync Events API channels to deliver AI-generated suggestions and Amazon Connect Contact Lens transcripts to customer service agents',
        '● Engineered and unit-tested Python event-publishing modules using AWS SigV4 authentication and AppSync Events APIs, enabling customer service agents to receive AI-generated guidance and live call-transcript data in real time'
      ],
    },
    {
      name:'Leidos',
      description:'Software Engineer Intern',
      technologies:'AWS, Python, Javascript, Llama 3 LLM, RESTful API',
      date:'January 2025 - July 2025',
      content:[
        '● Designed and built a serverless ETL pipeline for 40+ datasets using AWS S3, Glue, and Athena to transform and structure large-scale datasets into analytics-ready fact and dimension tables, supporting a team of 6 data analysts.',
        '● Created an AI-powered candidate matching platform using AWS Bedrock (Llama 3), vector embeddings, and semantic search to automate 300+ candidate-job matching and reduce manual resume screening'
      ],
    },
    {
      name:'We2Link',
      description:'Software Engineer Intern',
      technologies:'HTML, CSS, JavaScript, React, Firebase',
      date:'August 2024 - May 2025',
      content:[
        '● Engineered a full-stack application with React.js and Firebase to improve memory management for users with cognitive impairments by organizing memories, passwords, contacts, and daily tasks.',
        '● Spearheaded a graph-based duplicate-contact detection system using DFS and connected component analysis to automatically identify and merge related user for more than 50 active users.'
      ],
    },
    {
      name:'Accenture',
      description:'Technology Analyst Intern',
      technologies:'HTML, CSS, JavaScript, React, Java, Spring Boot',
      date:'June 2024 - August 2024',
      content:[
        '● Revamped the frontend of a client’s billing platform using React.js to improve visuals and create a modern, intuitive user interface, which significantly enhanced the user experience for 3.7 million customers.',
        '● Developed secure and efficient SQL queries by employing isolation levels, PgAdmin database analysis, and prepared statements, which enhanced the backend endpoints of the billing platform.'
      ],
    },
    {
      name:'Partillion BioScience',
      description:'Software Engineer Intern',
      technologies:'Python, Jython, Tk-Inter, OpenCV, ImageJ, API Integration, Automation',
      date:'Feb 2024 - May 2024',
      content:['• Spearheaded the development of an OpenCV-based particle analysis program for nano-vial detection and analysis, resulting in a 35% improvement in batch quality control and streamlined production evaluation.',
      '● Developed a Jython script in ImageJ to automate the merging of color channels for nano-vial production images, resulting in significant reduction in the manual work in creating composite images.',
      '● Conducted comprehensive debugging across multiple programs and actively maintained existing software by creating detailed documentation, which enhanced system reliability and addressed technical debt'
      ],
    },
    {
      name:'Northrop Grumman',
      description:'Software Engineer Intern',
      technologies:'Python, Git, REST-API, Pandas, Matplotlib, NumPy',
      date:'Jun 2023 - Aug 2023',
      content:['• Collaborated with product owners and my team of engineers to automate metrics generation in Python, which resulted in a 90% reduction in the manual workload for metrics collection across all projects and teams.',
      '● Spearheaded the development of our backend data pipeline by designing, implementing, and testing the code base, which provided half the metrics for our automation platform.',
      '● Systematically conducted code testing, including bug replication, debugging, and post-resolution testing.'
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
