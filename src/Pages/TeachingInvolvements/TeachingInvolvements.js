import './TeachingInvolvements.sass';
import SectionHeading from '../../Components/SectionHeading/SectionHeading.js';
import Logo from '../../Components/Images/logo.jpg';
import STEM from '../../Components/Images/STEM.png';

function ShowTi() {
  const ti = [
    {
      place:'Cal State LA Technical Intervew Preparation for Software Engineers (TIPSE)',
      title:'Founder and President',
      date:'Sep 2022 - Present',
      content:[
        '● Founded and led a student organization to help aspiring software engineers prepare for technical interviews.',
        '● Responsible for organizing meetings for members, leading sessions using online resources, facilitating mock interviews, and teaching members common technical interview topics such as BFS/DFS, two-pointers, etc'
      ],
      image: Logo,
    },
    {
      place:'STEM Advantage Program',
      title:'Scholar',
      date:'October 2022 - Present',
      content:[
        '● Cultivated a mentorship relationship with a STEM industry professional with a biweekly touch-base',
        '● Participates in professional development workshops and industry career panels.'
      ],
      image: STEM,
    },
  ];

  return (
    <div className='ti_items'>

      {ti.map(i => (
        <div className='ti_items_card'>

          <img src={i.image} className='ti_items_card_image' /><br/>
          <a href={i.link} className='ti_items_card_link fs1' target='_blank' rel='noopener noreferrer' style={{fontWeight: 'bold'}}>{i.place}</a>
          <div className='ti_items_card_title fs1'>{i.title}</div>
          <div className='ti_items_card_date fs1'>{i.date}</div>
          {i.content.map(j => (
            <ul>
            <li className='ti_items_card_maintext fs1'>{j}</li>
            </ul>
          ))}

        </div>
      ))}


    </div>
  );
}



function Ti() {
  return (
    <div className='ti_main' id='misc'>

      <div className='ti'>

        <SectionHeading text='Miscellaneous Involvements' color='white' />
        <ShowTi />

      </div>

    </div>
  )
}


export default Ti;
