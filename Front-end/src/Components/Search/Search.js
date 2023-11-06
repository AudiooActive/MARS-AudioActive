import { useState } from "react"
import { createPortal } from "react-dom"

// Icon
import searchIcon from '../../assets/Icon/iconssearch.png'
import crossIcon  from '../../assets/Icon/icons8-cross-50.png'
import SearchPortal from "./SearchPortal"

export default function Search() {



    const [searchShow, setSearchShow] = useState(false)

    const handelShow = () => {
        setSearchShow(!searchShow)
    }
    
    return <>
                    <div className="search-bar" onClick={handelShow}>
                    <img src={searchIcon} alt="search" />
                    <p className='search-bar-p'>Search</p>
                    </div>
        {createPortal(
                <>
                    <SearchPortal crossIcon={crossIcon} searchShow={searchShow} handelShow={handelShow}/>
                </>
            , document.getElementById('search-root'))}
    </>
}