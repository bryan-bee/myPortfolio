import './Page1.sass';
import HomeImage from '../../Components/Images/homeimage.jpg';
import Resume from '../../Components/Images/resume.pdf';
import SectionHeading from '../../Components/SectionHeading/SectionHeading.js';


function menuDisactivate() {
  document.querySelector('.home_menu_links_parent').classList.toggle('toggleMenuChange');
}
function menuActivate() {
  document.querySelector('.home_menu_links_parent').classList.toggle('toggleMenuChange');
}
function ShowMenuLinks() {
  const menulinkslist = [
      {name:'Interests',id:'#interests'},
      {name:'Work Experience', id:'#work'},
      {name:'Technical Projects',id:'#projects'},
      {name:'Teaching Involvements',id:'#teaching'},
    ];
    return (
      <div className='home_menu_links_parent' onClick={menuDisactivate}>
        <div className='home_menu_links_child'>
        {menulinkslist.map(item => (
          <a className='home_menu_links fs1' href={item.id}><b>{item.name}</b></a>
        ))}
        </div>
      </div>
    )
}


function ShowContents_Page1() {
  const contentspage1 = [
    {
      line1: 'Greetings, I\'m Bryan',
      line2: 'Currently a junior at CalState LA, I am an aspiring software engineer and fullstack web developer',
      button_link: Resume,
      button_text: 'Résumé',
      photo: HomeImage
    },
  ]
  return (
    <div className='page1_showcontents_main'>
      {contentspage1.map(i => (
        <div className='page1_showcontents'>

          <div className='page1_showcontents_textdiv'>
            <div className='page1_showcontents_line1 fontwhite fs4'>{i.line1}</div>
            <div className='page1_showcontents_line2 fontwhite fs1'>{i.line2}</div>
            <a href={i.button_link} className='page1_showcontents_button fontwhite fs1' target='_blank' rel='noopener noreferrer'>{i.button_text}</a>
          </div>
          <div className='page1_showcontents_imagediv'>
            <img className='page1_showcontents_image' src={i.photo} />
          </div>

        </div>
      ))}

    </div>
  )
}



function Page1() {
  return (
    <div className='page1_main' id='page1'>

      <div className='home_menu'>
        <a className='home_menu_name fs1' href={'#'}><b>Bryan Bee</b></a>
        <ShowMenuLinks />
        <div className='home_menu_button' onClick={menuActivate}>
          <div className='home_menu_button_line home_menu_button_line1' />
          <div className='home_menu_button_line home_menu_button_line2' />
        </div>
      </div>

      <div className='page1'>

        <ShowContents_Page1 />

      </div>



    </div>
  )
}

export default Page1
