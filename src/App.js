import './App.sass';
import Work from './Pages/Work/Work.js';
import Interests from './Pages/Interests/Interests.js';
import Page1 from './Pages/Page1/Page1.js';
import Page2 from './Pages/Page2/Page2.js';
import Footer from './Pages/Footer/Footer.js';
import Projects from './Pages/Projects/Projects.js';
import Ti from './Pages/TeachingInvolvements/TeachingInvolvements.js';

function App() {
  return (
    <div className='app_main'>

      <Page1 />
      <Interests />
      <Work />
      <Projects />
      <Ti />
      <Footer />

    </div>
  );
}

export default App;
