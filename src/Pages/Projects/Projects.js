import './Projects.sass';
import SectionHeading from '../../Components/SectionHeading/SectionHeading.js';


function ShowProjects() {
  const projects = [
    {
      name:'Housing Price Predicter Model',
      description:'October 2023- In Progress',
      technologies:'Python, TensorFlow, PyTorch, Pandas, Scikit-Learn',
      content:[
        '● Trained various machine learning and deep learning models, including SVM, ANN, and CNN, to predict human emotions from grayscale images, achieving accurate emotion classification through image analysis.',
        '● Preprocessed a dataset of 37,000+ human emotion images taken from Kaggle, utilized Pandas, Keras, and NumPy to optimize them as training data for machine learning models, achieving an average prediction accuracy of 60%.'
      ],
    },
    {
      name: 'Spotify Wrapped',
      description:'June 2023 - In Progress',
      technologies:'REST API, Python, Flask, JSON, OAuth, React.js',
      content:[
        '● Creating a web application emulating Spotify\'s \'Spotify Wrapped\' feature, providing users with personalized Spotify metrics based on their music preferences and listening habits',
        '● Enables users to access their custom Spotify metrics at any time, offering a unique and engaging experience.'
      ],
    },
    {
      name:'Metrics Automation',
      description:'June 2023- August 2023',
      technologies:'REST API, Git, Python, NumPy, Pandas',
      content:[
        '● Collaborated with stakeholders, product owners, and my team of engineers to automate metric generation in Python, which resulted in a 90% reduction in manual workload for metrics collection across all projects and teams.',
        '●  Spearheaded the development of our backend data pipeline by designing, implementing, and testing the code base, which provided half the metrics for our automation platform.'
      ],
    },
    {
      name: 'ChatGPT-Powered Monkey Bot',
      description:'December 2022 - August 2023',
      technologies:'REST API, Python',
      content:[
        '● Crafted a fun and interactive Discord bot to help moderate and entertain server members.',
        '● The bot helped to actively monitor server chats, apply temporary chat and voice chat restrictions to rule violators, and used API calls to provide entertaining ChatGPT-powered responses'
      ],
    },
    
    {
      name:'Hospital management system',
      description:'January 2023 – May 2023',
      technologies:'Java, HTML, CSS, Bootstrap, MySQL',
      link:'https://github.com/bryan-bee/Hospital-Management',
      content:[
        '● Engineered a web application designed to provide hospitals with an intuitive interface for viewing and editing patient and vaccine information.',
        '● The service offered user-friendly patient and vaccine data management for healthcare providers'
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
