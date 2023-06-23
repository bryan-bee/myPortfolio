import './Footer.sass'
import Resume from '../../Components/Images/resume.pdf';


function ShowSocials() {

    const s = [
      {
        name: 'Résumé',
        link: Resume,
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
      <div className='footer_socials'>
        {s.map(i => (
          <a className='footer_socials_button fs1' href={i.link} target='_blank' rel='noopener noreferrer'>{i.name}</a>
        ))}
      </div>
    )

}


function Footer() {
  return (
    <div className='footer_main'>

      <div className='footer'>

        <a className='footer_name fs3' href={'#'}><b>Bryan Bee</b></a>
        <div className='footer_text fs1'>Thanks for visiting!</div>

        <ShowSocials />

      </div>


    </div>
  )
}


export default Footer;
