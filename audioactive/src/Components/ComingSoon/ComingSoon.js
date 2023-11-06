// Componenets
import LandingPage from "../LandingPage/LandingPage";

// Gifs
import logoGif from '../../assets/gifs/Audio Active.gif'


export default function ComingSoon() {


    return (
        <LandingPage>
            <div className="contactUs">

                <h1 className="coming-soon-h1">COMING SOON ...</h1>

                <div className='logo-container'>
                    <img src={logoGif} alt='Logo'/>
                </div>
            </div>
        </LandingPage>
    )
}