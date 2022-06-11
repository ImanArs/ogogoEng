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
    } else if (window.screen.availWidth <= 768 ) {
      setState(2)
    } else {
      setState(3)
    }
    
  }

  useEffect(() => {
    if (state == 0) {
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
              <div>
                <h2>арсен <span>ученик огого инглиш</span></h2>
              </div>
              <div className={styles.revText} >
                <p>В 21 веке английский язык - неотъемлемая часть нашей жизни, я думаю, что все с этим согласятся. Знание разных языков - это наше будущее, это основа основ и это наш фундамент. Так вот я считаю, что если вы хотите иметь надежный фундамент и быть в хороших руках, то Ogogo Eng несомненно вам в этом поможет!</p>
              </div>
            </div>
            <div className={styles.revImg} >
              <img src="./logo.png" alt="img" />
            </div>
        </SwiperSlide>
        <SwiperSlide className={styles.revCard} >
            <div className={styles.revWrapper} >
              <div>
                <h2>арсен <span>ученик огого инглиш</span></h2>
              </div>
              <div className={styles.revText} >
                <p>Когда я пришел в первые на курсы «OGOGO English», у меня был очень плохой английский и проблема с временами английского. А мне нужно знать английский, так как английский нужен для моей будущей профессии. Они дали мне очень большой толчок и мотивацию в изучении  языка. И благодаря преподователям, я начал понимать и разговаривать на английском не запутываясь во временах.</p>
              </div>
            </div>
            <div className={styles.revImg} >
              <img src="./logo.png" alt="img" />
            </div>
        </SwiperSlide>
        <SwiperSlide className={styles.revCard} >
            <div className={styles.revWrapper} >
              <div>
                <h2>арсен <span>ученик огого инглиш</span></h2>
              </div>
              <div className={styles.revText} >
                <p>Я пришла в школу "English Master " чтобы научится свободно и правильно говорить и понимать английский язык. Для меня английский язык это прежде всего, возможность работать в перспективной компании и путешествовать.На сегодняшний день, я довольна своими успехами и это все благодаря педагогам из Ogogo English.</p>
              </div>
            </div>
            <div className={styles.revImg} >
              <img src="./logo.png" alt="img" />
            </div>
        </SwiperSlide>
        <SwiperSlide className={styles.revCard} >
            <div className={styles.revWrapper} >
              <div>
                <h2>арсен <span>ученик огого инглиш</span></h2>
              </div>
              <div className={styles.revText} >
                <p>В 21 веке английский язык - неотъемлемая часть нашей жизни, я думаю, что все с этим согласятся. Знание разных языков - это наше будущее, это основа основ и это наш фундамент. Так вот я считаю, что если вы хотите иметь надежный фундамент и быть в хороших руках, то Ogogo Eng несомненно вам в этом поможет!</p>
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

