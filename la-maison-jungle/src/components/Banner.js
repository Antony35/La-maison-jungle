import '../styles/Banner.css'
import logo from '../assets/logo.png'

const Banner = () => {
  return  <div className="lmj-banner">
            <img className='lmj-logo' src={logo} alt='La maison jungle' />
            <h1 className='lmj-title'>La maison jungle</h1>
          </div>
}
export default Banner