import { Link } from 'react-router-dom'
import {  useState } from 'react'

// icons
import HamburgerMenu from '../../assets/Icon/hamburgerMenu.png'

// Components
import Search from '../Search/Search'
import HamburgerMennu from '../HamburgerMenu/HamburgerMennu'

export default function NavBar() {

    const [bgChanger, setBgChanger] = useState(false)

    const changeBackground = () => {
        if(window.scrollY >= 50) {
            setBgChanger(true)
        } else {
            setBgChanger(false)
        }
    }

    window.addEventListener('scroll', changeBackground)



    return <>
            <div  className={bgChanger ? 'navBar active' : 'navBar'}>
            <ul className="left-Nav nav-Item">
                <Link to='/' ><li className="nav-Select">Home Page</li></Link>
                <Link to='/contactus'><li className="nav-Select">Contact Us</li></Link>
                <HamburgerMennu />
            </ul>
            <div id="Audio-Active">Audio Active</div>
            <div className="right-Nav nav-Item">
                <Search/>
            </div>
        </div>
    </>
}