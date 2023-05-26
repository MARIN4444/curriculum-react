import './App.css';
import { AboutMe } from './components/AboutMe';
import { ContactDetails } from './components/ContactDetails';
import { Education } from './components/Education';
import { FormContact } from './components/FormContact';
import { Me } from './components/Me';
import { Proyects } from './components/Proyects';
import { Skills } from './components/Skills';
import { SocialMedia } from './components/SocialMedia';


function App() {
  return (
    <div className="App">
      <meta name='author' content='Manuela Velásquez - Jhonatan Marín'></meta>
      <meta name='keywords' content='curriculum, react, html, css'></meta>
      <div className='Container'>
        <div className='Container_Left'>
          <AboutMe/>
          <hr/>
          <ContactDetails/>
          <hr/>
          <SocialMedia/>
          <hr/>
          <Skills/>
        </div>
        <div className='Container_Right'>
          <div>
            <Me/>
            <hr/>
            <Education/>
            <hr/>
            <Proyects/>
            <FormContact/>
          </div>
        </div>       
      </div>
    </div>
  );
}

export default App;

