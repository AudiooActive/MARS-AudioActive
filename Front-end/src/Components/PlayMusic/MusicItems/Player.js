import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'

// API
import { getProducts } from '../../../services/api';

// Componennts
import Contorlos from './Contorols'

// Toast
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function Player() {

    const params = useParams()

    const id = params.id

    const [songs, setSongs] = useState()
    const [current, setCurrent] = useState(id - 2)
    const [hart, setHart] = useState(0)
    const [hartone, setHartone] = useState(false)

    useEffect(() => {
        const fetchAPI = async () => {
            setSongs(await getProducts())
        }

        fetchAPI()

    }, [])


    useEffect(() => {
      setCurrent(id - 2)
      setHartone(false)
    }, [id])


    console.log(songs);

    const handelNext = () => {
       const cursor =  current + 1 < songs.length ? current + 1 : 0
       setCurrent(cursor)
    }

    const handelPrev = () => {
        const cursor = current - 1 < 0 ? (songs.length) - 1 : current - 1
        setCurrent(cursor)
    }

    const incHart = () => {
        if(!hartone) {
           setHart(hart + 1) 
           setHartone(!hartone)
        } else {
            toast.success('you have rate it before 💖', {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: "dark",
                });
        }
        
    }

    if(!songs) return <h1>Loding</h1>

    return <>
        <div className="play-Music-Container">
        <div className="play-Music-Items">
            <div><img className="play-Music-img" src={songs[current].cover} alt="" /></div>
            <div className="play-Music-Right-Items">
                <div className="play-Music-Items-Deteals">
                    <p className="track-name">{songs[current].track}</p>
                    <p className="singer-name">{songs[current].singer}</p>
                </div>
                <div className="sh-Continer">
                    <div className="speace"></div>
                    <div className="heart-container">
                    <p style={{color: 'red', cursor: 'pointer'}} onClick={incHart}>&#x2764;</p>
                        <p>{hart}</p>
                    </div>
                </div>
                <div className="Download-320"><a href={songs[current].files}> Download  320 </a></div>
                <div className="Download-128"><a href={songs[current].files}> Download  128 </a></div>
            </div>
        </div>
        <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover={false}
        theme="dark"
        />
    </div>
    <Contorlos song={songs[current]} handelNext={handelNext} handelPrev={handelPrev} incHart={incHart} hart={hart}/>
    <div className='Download-320-r-container'>
        <div className="Download-320-r Download-320"><a href={songs[current].files}>Download  320</a></div>
        <div className="Download-128-r Download-128"><a href={songs[current].files}>Download  128</a></div>
    </div>
    </>
}