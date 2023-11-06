import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


import { getProducts } from '../../../services/api'

// Icons 
import arrow from '../../../assets/Icon/aroowToAll.png'


export default function MusicCards({ title }) {


    const [products, setProducts] = useState([])

    useEffect(() => {
        const fetchAPI = async () => {
            setProducts(await getProducts())
        }

        fetchAPI()

    }, [])

    if(!products) return (<p>loading...</p>)

    const count12 = products.slice(0, 12)
    const songs = count12.map(music => <Link to={`/play/${music.id}`}><div className="row-best" ><img key={music.id} src={music.cover} alt="" /><p>{music.singer}</p><p>{music.track}</p></div></Link> )



    return <>
        {
            !products.length ? <h1>Loading</h1> :
        <div className="list-music-container">
            <div className="recommend-music rn-container" >
                <p>{title}</p> 
                <div id="all-best" > 
                        <div className="all-best-items"> 
                            {songs}
                        </div> 
                    </div>
            </div>
            <Link to={"/musics"} >
            <div className='see-all'>
                <div className='see-all-items'>
                    <p>view all</p>
                    <div className='aroow-to-all'>
                        <img src={arrow} alt='arow'/>
                    </div>
                </div>
            </div>
            </Link>
            
        </div>
        }
    </>
}