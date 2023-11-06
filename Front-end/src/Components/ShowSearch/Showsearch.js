import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"


// Components
import LandingPage from "../LandingPage/LandingPage"
import NoSearch from "../noSearch/NoSearch"



export default function Showsearch() {

    const state = useLocation().state
    
    const [song, setSong] = useState()

    useEffect(() => {
        setSong(state)
    }, [state])



    const filterShow = song ? song.map(filter => 
        <div className="searchshow-containeer" key={filter.id}>
    <Link id="musics-link" to={`/play/${filter.id}`}>
        <div className="All-Musics-container row-best" key={filter.id}>
            <img className="All-Musics-img" src={filter.cover} alt="" />
            <div className="All-Musics-div" >{filter.singer}</div >
            <div className="All-Musics-div" >{filter.name}</div >
        </div>
    </Link>
        </div>)  : null

    return (
    <LandingPage>
        { song == null || song.length == 0 ? 
            <NoSearch /> 
        : [filterShow] } 
    </LandingPage>
    )
}