import React, {useState, useEffect} from 'react'
import styles from './Teachers.module.scss'
import axios from 'axios'
import { useTranslation } from 'react-i18next'
import '../../i18next'
// import { t } from 'i18next'

// import Ella from './img/Ella.jpg'

const Teachers = ({info, setInfo}) => {

  const [data, setData ] = useState([])
  const [isActive, setIsActive] = useState(false)
  
    
    useEffect(() => {
      componentDidMount()
      setIsActive(false)
    }, [isActive])

    const componentDidMount = () => {
      if (data.length < 1) {
        axios
          .get(`https://620f994cec8b2ee28345f5a4.mockapi.io/teachersOgogo`)
          .then(res => {
            const dat = res.data
            setData(dat)
            console.log(dat);
          })
      }
    }
      const { t } = useTranslation()
      useEffect(() => {
        if (localStorage.getItem('i18nextLng') !== '') {
          setInfo(localStorage.getItem('i18nextLng'))
        }
      }, [info])


  return (
    <div className={styles.teachers} id='teachers' >
      <h2><span>{t('teachers.title')}</span></h2>
      <div className={styles.tchList} >

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

      </div>
    </div>
  )
}

export default Teachers