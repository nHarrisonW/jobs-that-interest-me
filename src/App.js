
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import myLogo from './Assets/nhw-logo-removebg-preview 1.png'
import armyLogo from './Assets/Army-logo.png'
import ngLogo from './Assets/Northrop-Grumaman-logo.png'
import intelLogo from './Assets/intel-logo.png';
import usafLogo from './Assets/USAF-logo.png'
import usnLogo from './Assets/USN-logo.png'
import { Container } from "react-bootstrap";
import { BrowserRouter} from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <div id='main-bg'>
        <Container>
          <div className='header'>
            <img src={myLogo} alt="" />
            <h1>My name is Nigel Harrison Wilkins, and this website features 5 places I would be happy to work at! To learn more about me, visit my <a className='repo-link' href="https://github.com/nHarrisonW">Github Repository</a> and check out some of my other work!</h1>
          </div>
          <div className='content-box'>
            <div className='first-box'>
              <div className='block-content'>
                {/* Link for title */}
                <h1>1. <a className='large-link' href="https://www.goarmy.com/careers-and-jobs/career-match/signal-intelligence/locations-stats-frequencies/94f-computer-detection-systems-repairer.html">U.S. Army</a></h1>
                {/* My reasoning */}
                <h4>My Mother, Father, and sister have all served in the Army, and I would be honored to as well.  Mos 35L (Counterintelligence Agent), and 94F (Computer / Detection Systems Repairer), these postions only require a diploma. The rest of the training will be done while serving. This is my top option to work at because I can be payed during job training, and the military has a plethora of benefits such as vacation, opportunity to travel, housing, and many more benefits included in the G.I. Bill. As a son of veterans, I have felt these benefits many times throughout my life, and I would be happy to continue !</h4>
                {/* Goals */}
                <h1>Goals</h1>
                <h4>Serve my country, earn a living, and benefits for myself when I am done!</h4>
                {/* Values */}
                <h1>Company Values</h1>
                <h4>The military is rooted in strong work ethic, discipline, and readiness.</h4>
              </div>
              {/* Corp. Logo */}
              <img className='logo' src={armyLogo} alt="" />
            </div>
          </div>
          {/* SECOND JOB */}
          <div className='content-box'>
            <div className='first-box'>
              <div className='block-content'>
                {/* Link for title */}
                <h1>2. <a className='large-link' href="https://www.northropgrumman.com/jobs?_job_experience=entry-level">Northrop Grumman</a></h1>
                {/* My reasoning */}
                <h4>As a leading global aerospace and defense technology company, Northrop Grumman provides innovative solutions to its customers, including the development of advanced aircraft, spacecraft, and autonomous systems. I would most-likely need additional knowledge in these technologies before working here. They also have a history of employing veterans and their families.</h4>
                {/* Goals */}
                <h1>Goals</h1>
                <h4>Learn as much as possible about the company's processes, products, and technologies!</h4>
                {/* Values */}
                <h1>Company Values</h1>
                <h4>Design and development of cutting-edge technologies that are critical to the success of missions in both the commercial and military sectors.</h4>
              </div>
              {/* Corp. Logo */}
              <img id='ngLogo' className='logo' src={ngLogo} alt="" />
            </div>
          </div>
          {/* THIRD JOB */}
          <div className='content-box'>
            <div className='first-box'>
              <div className='block-content'>
                {/* Link for title */}
                <h1>3. <a className='large-link' href="">Intel Corporation</a></h1>
                {/* My reasoning */}
                <h4>Intel offers competitive compensation packages and benefits, including health care, retirement savings, and tuition reimbursement, among others. They are also well-known and at the forefront of the tech industry.</h4>
                {/* Goals */}
                <h1>Goals</h1>
                <h4>Learn as much as possible from more experienced engineers. Move up!</h4>
                {/* Values */}
                <h1>Company Values</h1>
                <h4>Good customer relations, quality products, results, and collaboration are all things I find Important in the workplace.</h4>
              </div>
              {/* Corp. Logo */}
              <img id='intelLogo' className='logo' src={intelLogo} alt="" />
            </div>
          </div>
          {/* FOURTH JOB */}
          <div className='content-box'>
            <div className='first-box'>
              <div className='block-content'>
                {/* Link for title */}
                <h1>4. <a className='large-link' href="https://www.airforce.com/careers/intelligence/computer-systems-programming">U.S. Air Force</a></h1>
                {/* My reasoning */}
                <h4>I would be honored to serve my country, and the Air Force would be a great place to do it because of the emphasis on technological capability that the Air Foce is known for. Many of these positions could require additional schooling, which the military will commonly pay for. For these jobs, I would like more knowledge in back-end and data-collecting.</h4>
                {/* Goals */}
                <h1>Goals</h1>
                <h4>Serve my country, earn a living, and benefits for myself when I am done!</h4>
                {/* Values */}
                <h1>Company Values</h1>
                <h4>The military is rooted in strong work ethic, discipline, and readiness.</h4>
              </div>
              {/* Corp. Logo */}
              <img id='intelLogo' className='logo' src={usafLogo} alt="" />
            </div>
          </div>
          {/* Last JOB */}
          <div className='content-box'>
            <div className='first-box'>
              <div className='block-content'>
                {/* Link for title */}
                <h1>5. <a className='large-link' href="https://www.navy.com/careers/cyber-warfare-engineer">U.S. Navy</a></h1>
                {/* My reasoning */}
                <h4>The U.S Navy has many positions involving tech, as the United States military sports the most technologically advanced military in the world. Many of these positions are very high priority as well, as the United States needs a fully capable navy at all times.</h4>
                {/* Goals */}
                <h1>Goals</h1>
                <h4>Serve my country, earn a living, and benefits for myself when I am done!</h4>
                {/* Values */}
                <h1>Company Values</h1>
                <h4>The military is rooted in strong work ethic, discipline, and readiness.</h4>
              </div>
              {/* Corp. Logo */}
              <img id='intelLogo' className='logo' src={usnLogo} alt="" />
            </div>
          </div>
        </Container>
      </div>
    </BrowserRouter>
  );
}

export default App;
