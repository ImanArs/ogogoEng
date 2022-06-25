import React, {useState, useEffect} from 'react'
import styles from './Teachers.module.scss'
import axios from 'axios'
import { useTranslation } from 'react-i18next'
import '../../i18next'

const Teachers = ({info, setInfo}) => {

  const [data, setData ] = useState([])
  const [isActive, setIsActive] = useState(false)
  
    
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
          .get(`https://62176bfc71e7672e537e0afe.mockapi.io/ogogo-english`)
          .then(res => {
            const dat = res.data
            setData(dat)
          })
      }
    }
    
    const { t } = useTranslation()
    
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