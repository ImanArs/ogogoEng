import React, {useState, useEffect} from 'react'
import styles from './Slide.module.scss'
// import { useTranslation } from 'react-i18next'
import '../../i18next.js'
import axios from 'axios'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

const Slide = () => {
	// const { t } = useTranslation()

	const [data, setData ] = useState([])
  const [isActive, setIsActive] = useState(false)
  
    
    useEffect(() => {
      componentDidMount()
      setIsActive(false)
    },[isActive])

    const componentDidMount = () => {
        axios
        // .get(`https://62176bfc71e7672e537e0afe.mockapi.io/ogogo-english`)
          .get(`https://620f994cec8b2ee28345f5a4.mockapi.io/slider`)
          .then(res => {
            const dat = res.data
            setData(dat)
			console.log(dat);
          })
    }
	
	return (
		<div>
			<Swiper
        modules={[Navigation, Pagination, Autoplay]}
        pagination
        autoplay={ {delay: 3000} }
				spaceBetween={0}
				slidesPerView={1}
        className={styles.mySwiper}
				>
					{data.map( item => {
						return (
							<SwiperSlide key={item.id}>
							<div className={styles.slideImg} >
								{/* <img src={OgogoImg} width={1350} alt="asd" /> */}
								<img src={item.img} alt="img" />
							</div>
						</SwiperSlide>
						)
					})}
				
				</Swiper>
		</div>
	)
}

export default Slide
