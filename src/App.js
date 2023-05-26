import './App.css';
import { AboutMe } from './components/AboutMe';
import { ContactDetails } from './components/ContactDetails';
import { Education } from './components/Education';
import { Proyects } from './components/Proyects';
import { Skills } from './components/Skills';
import { SocialMedia } from './components/SocialMedia';





function App() {
  return (
    <div className="App">
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
            <p>Curiculum</p>
            <hr/>
            <Education/>
            <hr/>
            <Proyects/>
          </div>
        </div>       
      </div>
    </div>
  );
}

export default App;

