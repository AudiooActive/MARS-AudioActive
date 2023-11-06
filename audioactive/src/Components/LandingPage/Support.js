

// Icons
import { Link } from 'react-router-dom'
import SupportIcon from '../../assets/Icon/icons8-customer-support-64.png'


export default function Support() {

    return <>
        <Link to='/contactus'>
            <div id="support">
                <a>
                    <abbr title="support">
                        <img src={SupportIcon} alt="" />
                    </abbr>
                </a>
            </div>
        </Link>
    </>
}