import Logo from '../images/curve.png'

const Header = () => {
    return(
<div>
      <header className='header-contain'>
        <div className='header-wrapper'>
        <img src= {Logo} className='logo'/>
        <div className='nav-contain'>
          <a href='' className='homey'>Home</a>
          <a href='' className='clone'>About</a>
          <a href='' className='clone'>Contact</a>
          <a href='' className='clone'>Gallery</a>
          <button className='my-button'>Join the Waitlist!</button>
        </div>
        </div>
        <div className='down'>
          <marquee>Registration for The Curve Africa Academy cohort 6.0 is now closed! Join the wait list for Cohort 7!</marquee>
        </div>
      </header>
    </div>
    )
}
export default Header