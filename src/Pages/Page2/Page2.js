import './Page2.sass';
import PlaceholderImage from '../../Components/Images/placeholderimage.jpg';
import SectionHeading from '../../Components/SectionHeading/SectionHeading.js';


function ShowContents_Page2() {
  const contentspage2 = [
    {
      line1: 'Cal State LA Technical Intervew Preparation for Software Engineers (TIPSE)',
      line2: 'President and Founder',
      line3: 'Nov 2022 - Present',
      line4content: [
        '● Founded and led a student organization to help aspiring software engineers prepare for technical interviews.',
        '● Responsible for organizing meetings for members, leading sessions using online resources, facilitating mock interviews, and teaching members common technical interview topics such as BFS/DFS, two-pointers, etc'
      ],
      photo: PlaceholderImage
    },
    {
      line1: 'line',
      line2: 'line',
      line3: 'line',
      line4content: [
        'line',
        'line',
        'line'
      ],
      photo: PlaceholderImage
    },
    {
      line1: 'line',
      line2: 'line',
      line3: 'line',
      line4content: [
        'line',
        'line',
        'line'
      ],
      photo: PlaceholderImage
    },
    {
      line1: 'line',
      line2: 'line',
      line3: 'line',
      line4content: [
        'line',
        'line',
        'line'
      ],
      photo: PlaceholderImage
    },
  ]
  return (
    <div className='page2_showcontents_main' id='page2'>
      {contentspage2.map(i => (
        <div className='page2_showcontents'>

          <div className='page2_showcontents_textdiv'>
            <div className='page2_showcontents_line1 fontwhite fs4'>{i.line1}</div>
            <div className='page2_showcontents_line2 fontwhite fs3'>{i.line2}</div>
            <div className='page2_showcontents_line3 fontwhite fs2'>{i.line3}</div>
            {i.line4content.map(j => ( <div className='page2_showcontents_line4 fontwhite fs1'>{j}</div> ))}
          </div>
          <div className='page2_showcontents_imagediv'>
            <img className='page2_showcontents_image' src={i.photo} />
          </div>

        </div>
      ))}

    </div>
  )
}



function Page2() {
  return (
    <div className='page2_main' id='page2'>

      <div className='page2'>

        <SectionHeading text='Things' color='black' />
        <ShowContents_Page2 />

      </div>



    </div>
  )
}

export default Page2
