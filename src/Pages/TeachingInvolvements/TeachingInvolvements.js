import './TeachingInvolvements.sass';
import SectionHeading from '../../Components/SectionHeading/SectionHeading.js';
import Logo from '../../Components/Images/logo.jpg';


function ShowTi() {
  const ti = [
    {
      place:'Cal State LA Technical Intervew Preparation for Software Engineers (TIPSE)',
      title:'Founder and President',
      date:'Sep 2022 - Present',
      content:[
        '- Put together and created a student organization dedicated to helping students have a place to learn, practice, and tutor \
         each other to improve their data structures, algorithms, and leetcode skills',
      ],
      image: Logo,
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
