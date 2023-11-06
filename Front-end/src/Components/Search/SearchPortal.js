import { useState, useEffect } from "react"
import { Link } from 'react-router-dom'
import { getProducts } from "../../services/api"



export default function SearchPortal({ crossIcon, searchShow, handelShow }) {



    const [value, setValue] = useState()
    const [musics, setMusics] = useState([])
    const [filtered, setFiltered] = useState()

    useEffect(() => {
        const fetchAPI = async () => {
            setMusics(await getProducts())
        }

        fetchAPI()

    }, [])

    useEffect(() => {
        if(value && musics) {
        const shorten = (val) => {
            const splited = val.split(" ")
            return splited[0]
        }
        const singerFilter = musics.filter(music => music.track.toLowerCase().includes(shorten(value.toLowerCase())))
        const songFilter = musics.filter(music => music.singer.toLowerCase().includes(shorten(value.toLowerCase())))
        const mergFilter = [...singerFilter, ...songFilter]
        setFiltered(removeDuplicates(mergFilter))}
    }, [value])

    function removeDuplicates(filtered) {
        return filtered.filter((item,
            index) => filtered.indexOf(item) === index);
    }


    const handelSearch = () => {
        handelShow()
    }


    return (
        <div className={`${searchShow ? 'input-container' : 'none-container'}`}>
            <img src={crossIcon} alt="cross" onClick={handelShow} />
            <input type="text" placeholder="Search..." className="search-input" value={value} onChange={(e) => setValue(e.target.value)}/>
            <Link to='/test' state={filtered}>
            <div onClick={handelSearch}>
                <p>جستوجو</p>
            </div>  
            </Link>         
        </div>
    ) 
}