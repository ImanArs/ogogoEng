import React from 'react'
import styles from './About.module.scss'
import { useTranslation } from 'react-i18next'
import '../../i18next'

const About = () => {
  const { t } = useTranslation()
  return (
    <div id='about' >
      <div className={styles.aboutTitle} >
        <h2><span>{t('about.title')}</span></h2>
        <p>{t('about.text')}</p>
      </div>
    </div>
  )
}

export default About