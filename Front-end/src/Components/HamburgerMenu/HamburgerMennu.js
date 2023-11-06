import { Link } from "react-router-dom"

// Icons
import crossIcon from '../../assets/Icon/icons8-cross-50.png'
import HamburgerMenu from '../../assets/Icon/hamburgerMenu.png'
import { createPortal } from "react-dom"
import { useState } from "react"



export default function HamburgerMennu() {

    const [showBurger, setShowBurger] = useState(false)

    const handelShow = () => {
        setShowBurger(!showBurger)
    }


    return ( <>
        <li className={`${showBurger ? 'none' : 'hamburger-Menu'}`} onClick={handelShow}><img src={HamburgerMenu} alt="" /></li>
      
        {createPortal(        
            <div className={`${showBurger ? 'burger-container' : 'none'}`}>
                <div className="burger-elments-container">
                    <img src={crossIcon} alt="croos" onClick={handelShow}/>
                    <ul>
                        <Link to='/' ><li>Home Page</li></Link>
                        <Link to='/contactus'><li>Contact Us</li></Link>
                    </ul>
                </div>
            </div>, document.getElementById('burger'))}
        </>
    )
}