import './Work.sass';
import SectionHeading from '../../Components/SectionHeading/SectionHeading.js';


function ShowWork() {
  const work = [
    {
      name:'Northrop Grumman',
      description:'Software Engineer Intern',
      technologies:'JavaScript, Python',
      date:'Jun 2023 - Aug 2023',
      content:['Worked as part of a team to help automate metrics by', ' using python to make API calls, gather and parse JSON', 
      'data, and use the data to performs necessary', 'calculations and present metrics and graphs'
      ],
      
    },
    {
      name:'Starbucks Coffee Comapany',
      description:'Shift Supervisor',
      date:'April 2018 - Oct 2022',
      content:['Helped lead the team to help meet store ' ,'goals and manage daily operations'
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
