import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

// api
import { getProducts } from "../../services/api"



export default function AllMusics() {

    const [songs, setSongs] = useState([])

    useEffect(() => {
        const fetchAPI = async () => {
            setSongs(await getProducts())
        }

        fetchAPI()

    }, [])

    const musics = songs.map(song => 
    <Link id="musics-link" to={`/play/${song.id}`}>
        <div className="All-Musics-container row-best" key={song.id}>
            <img className="All-Musics-img" src={song.cover} alt="" />
            <div className="All-Musics-div" >{song.singer}</div >
            <div className="All-Musics-div" >{song.track}</div >
        </div>
    </Link>)

    return <>
        <div className="All-Musics"> 
            {musics}
        </div> 
    </>
}