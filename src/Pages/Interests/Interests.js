import './Interests.sass';
import SectionHeading from '../../Components/SectionHeading/SectionHeading.js';
import Resume from '../../Components/Images/resume.pdf';



function ShowSkills() {

    const s = ['Python', 'Flask', 'Java', 'Kotlin', 'C++', 'JavaScript','React',
    'CLI', 'HTML', 'CSS', 'BootStrap', 'MySQL', 'Git', 'JSP'];

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
            Hi, nice to meet you! I'm a senior at <b className="calstate-la">CalState Los Angeles</b> pursuing
            a bachelor's degree in computer science. I'm a very curious person by nature and am always looking for
            new ways to improve my skills as a software engineer.
            <br/><br/>
            My main interests are in both frontend development with JavaScript, HTML/CSS, and backend development with 
            Python and Java. I am also familiar with different frameworks such as Spring Boot, React, and Flask.  
            I love being able to use my skills and knowledge to help
            others in ways that have real world impact.
            <br/><br/>
            I'm passionate about both learning and teaching, and am almost
            always working on a new project to expand my skillset. Additionally, I take pride in my ability to deconstruct and 
            effectively teach complex concepts to others, enabling them to grasp and overcome any challenges they may face.
            My passion for learning and teaching has driven me to establish and lead a student organization in my school called TIPSE, 
            which stands for Technical Interview Preparation for Software Engineers. The organization is committed to creating a 
            nurturing environment for like-minded and motivated computer science students to enhance their knowledge of data structures, 
            algorithms, and LeetCode skills.
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
