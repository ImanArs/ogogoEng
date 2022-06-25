import React from 'react'
import styles from './Slide.module.scss'
// import { useTranslation } from 'react-i18next'
import '../../i18next.js'
import OgogoImg from './img/ogogo.jpg'
import EduImg from './img/education.jpg'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

const Slide = () => {
	// const { t } = useTranslation()
	
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
				<SwiperSlide>
					<div className={styles.ogogo} >
						{/* <img src={OgogoImg} width={1350} alt="asd" /> */}
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className={styles.process} >
					{/* <img src={EduImg} width={1350} alt="asd" /> */}
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className={styles.study} >

					</div>
				</SwiperSlide>
				</Swiper>
		</div>
	)
}

export default Slide
