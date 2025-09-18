/* eslint-disable no-unused-vars */
import Header from './component/header/header.js';
import Think from './component/images/upleft.png';
import Brain from './component/images/brain.png';
import Card from './component/images/book.png';
import Sing from './component/images/downleft.png';
import './App.css';

function App() {
  return (
    <div>
      < Header />
      <div className='unlock'>
        <div className='unlock1'>
          <div className='trial1'>
            <div className='soft1'>
              <h4 className='top'>Unlock Your Software</h4> 
              <hr/>
              <h4 className='bot'>Engineering Skill for Free</h4>
              <p>Elevate Your Skills, Join The Curve Africa Academy for a Comprehensive Learning Experience, Hands-on Training, a Stellar Portfolio, and Potential Internship Opportunities – All at No Cost!</p>
              <button className='my-button'>Join the Waitlist!</button>
            </div>
            <div className='soft2'>
              <div className='pic'>
              </div>
            </div>
          </div>
          <div className='trial2'>
            <div className='count'>
            </div>
          </div>
        </div>
      </div>
      <div className='second'>
        <div className='inside'>
          <div className='inside1'>
            <h1>What's in for you?</h1>
            <img src= {Think} className='upleft'/>
          </div>
          <div className='inside2'>
            <div className='inter1'>
              <div className='cardlogo'>
                <img src='Card'/>
              </div>
              <div className='cardhold1'>
                Learn from our Experts
              </div>
              <div className='cardhold2'></div>
              <div className='cardhold3'>
                <p>Learn from the Best, Immerse Yourself in Fun and Impactful Learning with Our Expert Instructors. We Handpick Seasoned Professionals to Deliver an Exceptional Learning Experience.</p>
              </div>
            </div>
            <div className='inter2'>
              <div className='cardlog'>
                <img src='Brain'/>
              </div>
              <div className='cardhold1'>
                Hands on Experience
              </div>
              <div className='cardhold4'></div>
              <div className='cardhold3'>
                <p>Experience the Power of Doing: Embrace a Hands-on Learning Approach. At Our Academy, We Value Practicality and Empower You to Learn by Doing. Get Ready to Dive In and Unlock Your Full Potential!</p>
              </div>
            </div>
            <div className='inter3'>
              <div className='cardlo'>
                <img src='Brain'/>
              </div>
              <div className='cardhold1'>
                Open Door to Opportunities
              </div>
              <div className='cardhold5'></div>
              <div className='cardhold3'>
                <p>Open the Door to Opportunities: Secure a Paid Internship Placement Upon Successful Completion of Our Intensive Six-Month Training Program. Your Hard Work and Dedication Will Be Rewarded with a Valuable Real-World Experience and a Stepping Stone towards Your Future Success.</p>
              </div>
            </div>
            <div className='inter4'>
              <div className='cardle'>
                <img src='Brain'/>
              </div>
              <div className='cardhold1'>
                Guidance every step of the way
              </div>
              <div className='cardhold6'></div>
              <div className='cardhold3'>
                <p>Benefit from Personalized Mentorship Throughout Your Journey. We Pair You with a Dedicated Mentor who will Provide Expert Guidance and Support, Ensuring You Have the Best Possible Learning Experience and Guidance as You Progress Towards Your Goals.</p>
              </div>
            </div>
          </div>
          <div className='inside3'>
            <img src='Downny'/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
