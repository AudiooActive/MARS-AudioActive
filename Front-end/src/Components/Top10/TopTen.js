import { useEffect, useState } from "react"


// Context
import { Link } from "react-router-dom"
import { getProducts } from "../../services/api"

export default function TopTen() {



    const [songs, setSongs] = useState([])

    useEffect(() => {
        const fetchAPI = async () => {
            setSongs(await getProducts())
        }

        fetchAPI()

    }, [])

    if(!songs.length ) (<h1>Loading</h1>)

    const music10 = songs.slice(0, 10)
    const musics = music10.map(song => <Link to={`/play/${song.id}`} key={song.id}><div className="row-best" ><img src={song.cover} alt="" /><p>{song.singer}</p><p>{song.track}</p></div></Link>)
    const music3 = songs.filter((song, idx) => idx <= 2)
    const music3top = music3.map(music => <Link to={`/play/${music.id}`} key={music.id}><div className="best3 first-best" ><img src={music.cover} alt="" /><div><p>{music.singer}</p><p>{music.track}</p></div></div></Link>)


    return <>
        {
            !songs.length ? <h1>Loading</h1> :
            <div className="topTen">
                <div className="topTen-container">
                    <h2 id="top10" >TOP 10</h2>
                    <div id="best3-container" >
                            {music3top}
                    </div>
                    <div id="all-best" > 
                        <div className="all-best-items"> 
                            {musics}
                        </div> 
                    </div>
                </div>
          </div>
        }
    </>
}