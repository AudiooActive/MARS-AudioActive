// Gifs
import logoGif from '../../assets/gifs/Audio Active.gif'

export default function NoSearch() {

    return <>
        <div className="contactUs">
            <div className='contact-elements'>
                <p>We did not find any music</p>
                <h3>please search the singer name or song name</h3>
                <p style={{color: 'red'}}>&#x2764;</p>
            </div>
            <div className='logo-container'>
                <img src={logoGif} alt='Logo'/>
            </div>
        </div>
    </>
}