// Gifs
import logoGif from '../../../assets/gifs/Audio Active.gif'

export default function Contactus() {

    return <>
        <div className="contactUs">
            <div className='contact-elements'>
                <p>Use the following email to contact us</p>
                <p style={{color: 'red'}}>&#x2764;</p>
                <h3>Audioactive71@gmail.com</h3>
            </div>
            <div className='logo-container'>
                <img src={logoGif} alt='Logo'/>
            </div>
        </div>
    </>
}