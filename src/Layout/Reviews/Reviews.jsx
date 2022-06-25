import React, {useEffect, useState} from 'react'
import styles from './Reviews.module.scss'
import { useTranslation } from 'react-i18next'
import '../../i18next.js'


import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

const Reviews = () => {
  const [isActive, setIsActive] = useState(false)
  const [state, setState] = useState(0)
	const { t } = useTranslation()
  
  
  

  let change = () => {

    if (window.screen.availWidth <= 425 ) {
      setState(1)
    } else if (window.screen.availWidth <= 850 ) {
      setState(2)
    } else {
      setState(3)
    }
    console.log(window.screen.availWidth);
  }


  // console.log(window.screen);
  useEffect(() => {
    if (state === 0) {
      change()
    }
    setIsActive(!isActive)
    
  }, [isActive])
  

	return (
		<div id='reviews' >
			<Swiper
        modules={[Navigation, Pagination, Autoplay]}
        pagination
        autoplay={ {delay: 4000} }
				spaceBetween={30}
				slidesPerView={state}
        className={styles.mySwiper}
				>
        
				<SwiperSlide className={styles.revCard} >
            <div className={styles.revWrapper} >
              <div className={styles.revName} >
                <h2>{t('reviews.rev1.revName')} <span>{t('reviews.student')} </span></h2>
              </div>
              <div className={styles.revText} >
                <p>{t('reviews.rev1.revText')} </p>
              </div>
            </div>
            <div className={styles.revImg} >
              <img src="./logo.png" alt="img" />
            </div>
        </SwiperSlide>
        <SwiperSlide className={styles.revCard} >
            <div className={styles.revWrapper} >
              <div className={styles.revName}>
                <h2>{t('reviews.rev2.revName')} <span>{t('reviews.student')} </span></h2>
              </div>
              <div className={styles.revText} >
                <p>{t('reviews.rev2.revText')}</p>
              </div>
            </div>
            <div className={styles.revImg} >
              <img src="./logo.png" alt="img" />
            </div>
        </SwiperSlide>
        <SwiperSlide className={styles.revCard} >
            <div className={styles.revWrapper} >
              <div className={styles.revName}>
                <h2>{t('reviews.rev3.revName')} <span>{t('reviews.student')} </span></h2>
              </div>
              <div className={styles.revText} >
                <p>{t('reviews.rev3.revText')}</p>
              </div>
            </div>
            <div className={styles.revImg} >
              <img src="./logo.png" alt="img" />
            </div>
        </SwiperSlide>
        <SwiperSlide className={styles.revCard} >
            <div className={styles.revWrapper} >
              <div className={styles.revName}>
                <h2>{t('reviews.rev4.revName')} <span>{t('reviews.student')} </span></h2>
              </div>
              <div className={styles.revText} >
                <p>{t('reviews.rev4.revText')}</p>
              </div>
            </div>
            <div className={styles.revImg} >
              <img src="./logo.png" alt="img" />
            </div>
        </SwiperSlide>
			</Swiper>
		</div>
	)
}

export default Reviews

