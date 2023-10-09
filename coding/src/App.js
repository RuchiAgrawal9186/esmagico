
import './App.css';
import Footer from './components/Footer';
import Learning from './components/Learning';
import MiddleSection from './components/MiddleSection';
import Session from './components/Session';
import Speakers from './components/Speakers';
import TopSection from './components/TopSection';

function App() {
  return (
    <div className="App">

      <TopSection></TopSection>
      <MiddleSection></MiddleSection>

      <Learning></Learning>
      <Session></Session>
      <div className='bluediv'>
        <div className='blueleft'>
          <h2>Real People Real Learnning</h2>
          <p>SpeakIn is Asia's largest on-demand network providing access to top regional speakers.</p>

        </div>

        <div className='blueright'>

          <div className='imagediv'></div>

          <svg xmlns="http://www.w3.org/2000/svg" width="64" height="10" viewBox="0 0 64 10" fill="none" margin="auto">
            <circle cx="5" cy="5" r="5" fill="white" />
            <circle opacity="0.5" cx="23" cy="5" r="5" fill="white" />
            <circle opacity="0.5" cx="41" cy="5" r="5" fill="white" />
            <circle opacity="0.5" cx="59" cy="5" r="5" fill="white" />
          </svg>




        </div>
      </div>



      <div className="whitediv">

        <div className="text">Your SpeakIn is Trusted by the Best of Clients</div>
        <div className="text1">SpeakIn speakers have enthralled audiences across top-of-the-line businesses in varied sectors globally.</div>
        <div className="imagediv"></div>

      </div>


      {/* <svg xmlns="http://www.w3.org/2000/svg" width="1800px" height="500px" viewBox="0 0 1440 495" fill="none">
<path opacity="0.1" d="M0 141C0 141 640 91.5 937 28.5C1234 -34.5 1440 28.4998 1440 28.4998V424C1440 424 1170.5 174 730.5 347C290.5 520 0 493 0 493V141Z" fill="#538DD7"/>
</svg> */}
      <div className="yellowdiv">

        <div className="yellowleft">

          <div className='imagediv'> </div>

        </div>

        <div className="yellowright">
          <h2>About SpeakIn</h2>
          <p>SpeakIn is Asia's largest on-demand network providing access to top regional speakers, thought leaders and their content. Enabling organizations to build performance agility and win over disruption, at SpeakIn only the best come together to inform, inspire and motivate.</p>

        </div>

      </div>

      <Speakers></Speakers>
      <Footer></Footer>



    </div>
  );
}

export default App;
