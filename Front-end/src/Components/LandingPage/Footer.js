import { Link } from 'react-router-dom'

// Icon
import instagram from '../../assets/Icon/instagram.svg'
import telegram from '../../assets/Icon/telegram.svg'



export default function Footer() {

    return <>
            <div id="fotter">
                <div className="right-fotter">
                    <p>Fallow us on social medias</p>
                    <div className="media-img">
                    <img src={instagram} alt="" />
                    <a href='https://t.me/AudioActivated' ><img src={telegram} alt="" /></a>
                    </div>
                </div>
                <div className="left-fotter">
                    <div className="left-left-fotter">
                    <ul>
                        <Link to='comingsoon'><li>Top singers</li></Link>
                        <Link to='comingsoon'><li>Top musics</li></Link>
                        <Link to='comingsoon'><li>Remixes</li></Link>
                    </ul>
                    </div>
                    <div className="left-right-fotter">
                        <ul>
                        <Link to='/comingsoon'><li>Share your Artwork</li></Link>
                        <Link to='/contactus'><li>Contact Us</li></Link>
                        </ul>
                    </div>
                </div>
        </div>
    </>
}