import React, {useState, useEffect} from 'react'
import styles from './Teachers.module.scss'
import axios from 'axios'
import { useTranslation } from 'react-i18next'
import '../../i18next'


import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';


const Teachers = ({info, setInfo}) => {

  const [data, setData ] = useState([])
  const [isActive, setIsActive] = useState(false)
  
  const [state, setState] = useState(0)
  
    
    useEffect(() => {
      if (localStorage.getItem('i18nextLng') !== '') {
        setInfo(localStorage.getItem('i18nextLng'))
      }
      componentDidMount()
      setIsActive(false)
    },[isActive], [info])

    const componentDidMount = () => {
      if (data.length < 1) {
        axios
        // .get(`https://62176bfc71e7672e537e0afe.mockapi.io/ogogo-english`)
          .get(`https://620f994cec8b2ee28345f5a4.mockapi.io/teachersOgogo`)
          .then(res => {
            const dat = res.data
            setData(dat)
          })
      }
    }
    
    const { t } = useTranslation()

    let change = () => {

      if (window.screen.availWidth <= 425 ) {
        setState(1)
      } else if (window.screen.availWidth <= 850 ) {
        setState(2)
      } else {
        setState(3)
      }
    }
  
    useEffect(() => {
      if (state === 0) {
        change()
      }
      setIsActive(!isActive)
      
    }, [isActive])
    
  return (
    <div className={styles.teachers} id='teachers' >
      <h2><span className={styles.underSlide}>{t('teachers.title')}</span></h2>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        pagination
        autoplay={ {delay: 4000} }
				spaceBetween={30}
				slidesPerView={state}
        className={styles.mySwiper}
				>
           {data.map(item => {
            return (
                <SwiperSlide key={item.id} className={styles.tchCard}>
                  <div className={styles.tchWrapper}>
                  <div className={styles.tchImg} >
                    <img src={item.img} alt='img'/>
                  </div>
                  <div className={styles.tchText} >
                    {info === 'ru' ? (
                    <>
                      <h3>{item.name}</h3>
                      <p>{item.text}</p>
                    </>
                    ):(
                    <>
                      <h3>{item.engName}</h3>
                      <p>{item.engText}</p>
                    </>
                    )}
                  </div>
                  </div>
                  
                </SwiperSlide>
            )
          })}
        </Swiper>
    </div>
  )
}
{/* <div className={styles.tchList} >

          {data.map(item => {
            return (
                <div key={item.id} className={styles.tchCard}>
                  <div className={styles.tchImg} >
                    <img src={item.img} alt='img'/>
                  </div>
                  <div className={styles.tchText} >
                    {info === 'ru' ? (
                    <>
                      <h3>{item.name}</h3>
                      <p>{item.text}</p>
                    </>
                    ):(
                    <>
                      <h3>{item.engName}</h3>
                      <p>{item.engText}</p>
                    </>
                    )}
                  </div>
                </div>
            )
          })}

      </div> */}
export default Teachers