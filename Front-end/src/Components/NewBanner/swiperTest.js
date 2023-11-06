// Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper'


// Modules
import { Navigation, Pagination, Scrollbar, A11y, Thumbs, Autoplay } from 'swiper/modules';


// Styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

// Context
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getProducts } from '../../services/api';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Thumbs, Autoplay])


export default function SwiperTest() {

    const [product, setProducts] =  useState([])

    useEffect(() => {
        const fetchAPI = async () => {
            setProducts(await getProducts())
        }

        fetchAPI()

    }, [])

    const musics = product.slice( 0, 4 )

    const navigate = useNavigate()

    const handelPush = (index) => {
        
        navigate(`/play/${musics[index].id}`)
    }

    if(!product.length) return <p>Loading</p>

    return (
        <>
        {
            !product.length ? <h1>Looding</h1> : 
        
        <div className='nigger' style={{
            width: '100%',
            height:'110%',
            padding:'5px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius:'5px',
            }}>
                <Swiper
                    modules={[Navigation, Pagination]}
                    spaceBetween={80}
                    loop={true}
                    autoplay={{
                        disableOnInteraction: false
                    }}

                    pagination={{
                        clickable: true,
                    }}

                    navigation={true}
                >
                    <SwiperSlide>
                        
                            <div className='name'>
                                <img src={musics[0].cover} alt='img' onClick={() => handelPush(0)} />
                            </div>

                    </SwiperSlide>
                    <SwiperSlide>
                        
                            <div className='name'>
                                <img src={musics[1].cover} alt='img' onClick={() => handelPush(1)} />
                            </div>

                    </SwiperSlide>
                    <SwiperSlide>
                        
                            <div className='name'>
                                <img src={musics[2].cover} alt='img' onClick={() => handelPush(2)} />
                            </div>

                    </SwiperSlide>
                    <SwiperSlide>

                        <div className='name'>
                            <img src={musics[3].cover} alt='img' onClick={() => handelPush(3)} />
                        </div>

                    </SwiperSlide>
                </Swiper>
        </div>
    }</>)
}