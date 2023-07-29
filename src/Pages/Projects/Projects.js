import './Projects.sass';
import SectionHeading from '../../Components/SectionHeading/SectionHeading.js';


function ShowProjects() {
  const projects = [
    {
      name: 'Spotify Wrapped',
      description:'Spotify wrapped replica',
      technologies:'React · Flask',
      content:[
        '- Used flask to handle all the backend logic and communication with Spotify API',
        '- Then used React.js to handle the displaying of Spotify user data '
      ],
    },
    {
      name:'bryanbee.com',
      description:'Personal Portfolio Website',
      technologies:'React · JSX ',
      content:[
        '- Used React.js to develop a minimalistic and scalable SWE portfolio website',
        '- Utilized Sass variables and mapping of key-value objects and lists toward creating a scalable\
        and readable environment'
      ],
    },
    {
      name:'Hospital management system',
      description:'',
      technologies:'Java, MySQL, HTML/CSS(BootStrap)',
      link:'https://github.com/bryan-bee/Hospital-Management',
      content:[
        '- Designed and created a WebServlet that a hospital could use to view/edit patient and vaccine\
         information using HTML/CSS and Bootstrap which connected to an SQL server for data access. A logged in user could then view and edit information depending on their account privileges',
      ],
    },
    {
      name:'Metrics Automation',
      description:'',
      technologies:'Python',
      content:[
        '- Using Python, automated the displaying and presenting of metrics by using requests library \
        to make API calls to JIRA, gather and parse JSON data, and then used pandas and matplotlib to create visual graphs with the data',
      ],
    },
  ];

  return (
    <div className='projects_items'>

      {projects.map(i => (
        <div className='projects_items_card'>

          <a href={i.link} target='_blank' rel='noopener noreferrer' className='projects_items_card_link fs1'
            style={{fontWeight: 'bold'}}>{i.name}</a>
          <div className='projects_items_card_description fs1'>{i.description}</div>
          <div className='projects_items_card_technologies fs1'>{i.technologies}</div>
          {i.content.map(j => (
            <ul>
              <li className='projects_items_card_maintext fs1'>{j}</li>
            </ul>
          ))}



        </div>
      ))}


    </div>
  );
}


function Projects() {
  return (
    <div className='projects_main' id='projects'>

      <div className='projects'>

        <SectionHeading text='Technical Projects' color='white' />
        <ShowProjects />

      </div>

    </div>
  )
}


export default Projects;
