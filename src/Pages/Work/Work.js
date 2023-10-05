import './Work.sass';
import SectionHeading from '../../Components/SectionHeading/SectionHeading.js';


function ShowWork() {
  const work = [
    {
      name:'Northrop Grumman',
      description:'Software Engineer Intern',
      technologies:'Python, Git, REST-API, Pandas, Matplotlib, NumPy',
      date:'Jun 2023 - Aug 2023',
      content:['• Collaborated with stakeholders, product owners, and my team of engineers to automate metric generation in Python, resulting in a 90% reduction in manual workload for metrics collection across all projects and teams.',
      '• Spearheaded the development of our backend data pipeline by designing, implementing, and testing the code base, which provided half the metrics for our automation platform.',
      '• Systematically conducted code testing, including bug replication, debugging, and post-resolution testing.'
      ],
      
    },
  ];
  return (
    <div className='work_items'>

      {work.map(i => (
        <div className='work_items_card'>

          <a href={i.link} target='_blank' rel='noopener noreferrer' className='work_items_card_link fs1'
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

        <SectionHeading text='Work Experience' color='black' />
        <ShowWork />

      </div>

    </div>
  )
}


export default Work;
