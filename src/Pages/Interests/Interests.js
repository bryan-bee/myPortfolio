import './Interests.sass';
import SectionHeading from '../../Components/SectionHeading/SectionHeading.js';
import Resume from '../../Components/Images/resume.pdf';



function ShowSkills() {

    const s = [
    "CLI",
    "HTML",
    "CSS",
    "Bootstrap",
    "MySQL",
    "PostgreSQL",
    "Git",
    "JSP",
    "AWS",
    "Amazon S3",
    "AWS Lambda",
    "Amazon EC2",
    "AWS Glue",
    "Amazon Athena",
    "Amazon Bedrock",
    "AWS AppSync",
    "Amazon Connect",
    "AWS CDK",
    "DynamoDB",
    "Firebase Firestore",
    "Redis",
    "Docker",
    "Locust",
    "FastAPI",
    "Flask",
    "SQLAlchemy",
    "React.js",
    "pandas",
    "Kafka",
    "NumPy",
    "Matplotlib"
];

    return (
      <div className='interests_items_skills'>
        {s.map(i => (
          <a className='interests_items_skills_s fs1'>{i}</a>
        ))}
      </div>
    )
}
function ShowSocials() {

    const s = [
      {
        name: 'Résumé',
        link: Resume
      },
      {
        name: 'GitHub',
        link: 'https://github.com/bryan-bee'
      },
      {
        name: 'LinkedIn',
        link: 'https://www.linkedin.com/in/bryan-bee/'
      }
    ];

    return (
      <div className='interests_items_socials'>
        {s.map(i => (
          <a className='interests_items_socials_s fs1' href={i.link} target='_blank' rel='noopener noreferrer'>{i.name}</a>
        ))}
      </div>
    )

}



function Interests() {
  return (
    <div className='interests_main' id='interests'>



      <SectionHeading text='About Me' color='rgb(216, 214, 221)' />

      <div className='interests'>


        <div className='interests_1 fs1'>
            Hi, nice to meet you! I'm a software engineer and Computer Science graduate from <b className="calstate-la">CalState Los Angeles</b> where I graduated summa cum laude. I'm naturally curious and enjoy understanding how systems work, improving them, and continuously expanding my skills as an engineer.
            <br/><br/>
            My main interests are backend software engineering, cloud technologies, distributed systems, and building scalable applications. I enjoy working on projects that push me beyond what I already know, especially when they involve system design, performance optimization, APIs, databases, or real-time systems.
            <br/><br/>
            I'm also passionate about teaching and mentorship. I enjoy breaking down complex technical concepts into approachable explanations and helping others develop the confidence to solve problems independently. That passion led me to found TIPSE, Technical Interview Preparation for Software Engineers, a student organization focused on helping computer science students strengthen their data structures, algorithms, technical interview, and problem-solving skills.
            <br></br>
            Whether I'm building software, learning a new technology, or mentoring others, I enjoy tackling challenging problems and creating things that have a meaningful real-world impact.
        </div>
        <div className='interests_2'>
          <div className='interests_2_intro1 fontblack fs1'><b>Technologies and Tools I am familiar with:</b></div>
          <ShowSkills />
          <div className='interests_2_intro2 fontblack fs1'><b>Contact and socials:</b></div>
          <ShowSocials />
        </div>



      </div>




    </div>
  )
}

export default Interests;
