import { useEffect, useRef, useState } from 'react'

// Icon
import preveise from '../../../assets/Icon/icons8-privies-48.png'
import play from '../../../assets/Icon/icons8-play-48.png'
import next from '../../../assets/Icon/icons8-next-48.png'
import pause from '../../../assets/Icon/icons8-pause-48.png'
import Loader from '../../shared/Loader'



export default function Contorlos({ song, handelNext, handelPrev, incHart, hart }) {

    const [isPlaying, setIsPlaying] = useState(true)
    const [musicTime, setMusicTime] = useState({
        currentTime: 0,
        duration: 0,
        animationPercentage: 0
    })

    useEffect(() => {
        if(isPlaying) {
            setIsPlaying(!isPlaying)
        }
    }, [song.id])

    const musicRef = useRef(null)


    const handelPlay = () => {
        if(isPlaying) {
            musicRef.current.pause()
            setIsPlaying(!isPlaying)
        } else {
            musicRef.current.play()
            setIsPlaying(!isPlaying)
        }
    }

    const handelTime = (e) => {

        const currentTime = e.target.currentTime
        const duration = e.target.duration

        // Calculate Percentage
        const animationPer = Math.round((currentTime / duration) * 100)

        setMusicTime({
            ...musicTime,
            currentTime: currentTime,
            duration: duration,
            animationPercentage: animationPer
         }
         )
    }

    const TimeFormat = (time) => {
       return Math.floor(time / 60) + ':' + ('0' + Math.floor(time % 60)).slice(-2)
    }

    const handelDrag = (e) => {
        musicRef.current.currentTime = e.target.value
        setMusicTime({
            ...musicTime,
            currentTime: e.target.value
        })
    }


    // add inline style
    const traslateAnimation = {
        transform: `translateX(${musicTime.animationPercentage}%)`
    }

    return (
        <div className="play-Section">
            <div className="buttom-Container">
                <p className="track-name track-name-r">{song.track}</p>
                <p className="singer-name singer-name-r">{song.singer}</p>
                <div className="heart-container-r">
                    <p style={{color: 'red', cursor: 'pointer'}} onClick={incHart}>&#x2764;</p>
                    <p>{hart}</p>
                </div>
                <img src={preveise} alt="" onClick={handelPrev} />
                {isPlaying ? <img src={pause} onClick={handelPlay} alt="" /> : <img src={play} onClick={handelPlay} alt="" />}
                <img src={next} alt="" onClick={handelNext} />
            </div>
            <div className='controls-container'>
                <p>{TimeFormat(musicTime.currentTime)}</p>
                <div className='time-line-container'>
                 <input onChange={handelDrag} min={0} max={musicTime.duration} value={musicTime.currentTime} type='range' />
                 <div className='time-animation' style={traslateAnimation}></div>
                </div>
                <p>{!musicTime.duration ? <Loader /> : TimeFormat(musicTime.duration)}</p>
            </div>
            <audio onLoadedMetadata={handelTime} onTimeUpdate={handelTime} ref={musicRef} src={song.files}></audio>
        </div>
    )
}