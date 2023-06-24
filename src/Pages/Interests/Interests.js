import './Interests.sass';
import SectionHeading from '../../Components/SectionHeading/SectionHeading.js';
import Resume from '../../Components/Images/resume.pdf';



function ShowSkills() {

    const s = ['Python','Java', 'C++', 'JavaScript','React',
    'Sass', 'HTML', 'CSS', 'BootStrap', 'MySQL', 'Git'];

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
        link: 'https://www.linkedin.com/in/bryanbee97/'
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



      <SectionHeading text='Interests' color='black' />

      <div className='interests'>


        <div className='interests_1 fs1'>
            Hi, thanks for visiting! I'm a junior at <b className="calstate-la">CalState Los Angeles</b> pursuing
            a bachelor's degree in computer science. I am always looking for
            new ways to improve my skills as a software engineer.
            <br/><br/>
            My main interests are in both frontend and backend software engineering with 
            Python and Java. I also enjoy web development using HTML/CSS and JavaScript.
            I love being able to use my skills and knowledge to help
            both myself and others achieve real results.
            <br/><br/>
            I'm passionate about learning and teaching, especially in being able to explain
            difficult concepts to my peers in different ways so that they can understand whatever it is that
            they're struggling with.
            My passion for learning and teaching has led me to found and lead
            my school student organiztion called TIPSE which stands for Technical Intervew Preparation for Software 
            Engineers. The organization is dedicated to provide a space for other likeminded motivated
            computer science students learn and improve their data structures, algorithms, and leetcode skills.
        </div>
        <div className='interests_2'>
          <div className='interests_2_intro1 fontblack fs1'><b>Technologies I am familiar with:</b></div>
          <ShowSkills />
          <div className='interests_2_intro2 fontblack fs1'><b>Contact and socials:</b></div>
          <ShowSocials />
        </div>



      </div>




    </div>
  )
}

export default Interests;
