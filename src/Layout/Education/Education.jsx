import React from 'react'
import Installment from '../Installment/Installment'
import styles from './Education.module.scss'
import OgogoElla from './img/ogogoElla.JPG'
import { useTranslation } from 'react-i18next'
import '../../i18next'

const Education = () => {
  const { t } = useTranslation()

  return (
    <>
      <Installment/>
      <div className={styles.edu} id='education'>
            <h3><span>{t('education.title')}</span></h3>
        <div className={styles.education} >
          <div className={styles.eduText} >
            <p>{t('education.text')}</p>
          </div>
          <div>
            <img src={OgogoElla} alt="" />
          </div>
        </div>
          <p>{t('education.text2')}</p>
          <div   id="study">
            <h3><span>{t('studyEU.title')}</span></h3>
            <p>{t('studyEU.text')} </p>
          </div>
      <div className={styles.eduEurope}>
        <div className={styles.eduCard} >
          <ul>
            <p>{t('studyEU.column.title')} </p>
            <li>{t('studyEU.column.li1')} </li>
            <li>{t('studyEU.column.li2')} </li>
            <li>{t('studyEU.column.li3')} </li>
            <li>{t('studyEU.column.li4')} </li>
            <li>{t('studyEU.column.li5')} </li>
            <li>{t('studyEU.column.li6')} </li>
            <li>{t('studyEU.column.li7')} </li>
          </ul>
        </div>
        <div className={styles.eduCard} >
          <ul>
            <p>{t('studyEU.column2.title')} </p>
            <li>{t('studyEU.column2.li1')} </li>
            <li>{t('studyEU.column2.li2')} </li>
            <li>{t('studyEU.column2.li3')} </li>
            <li>{t('studyEU.column2.li4')} </li>
            <li>{t('studyEU.column2.li5')} </li>
          </ul>
        </div>
      </div>
    </div>
    </>
  )
}

export default Education