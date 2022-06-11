import React from 'react'
import Installment from '../Installment/Installment'
import styles from './Education.module.scss'
import EduImg from './img/education.jpg'
import OgogoImg from './img/ogogo.jpg'
import OgogoElla from './img/ogogoElla.JPG'
const Education = () => {
  return (
    <>
      <Installment/>
      <div className={styles.edu} id='education'>
            <h3><span>Обучение</span></h3>
        <div className={styles.education} >
          <div className={styles.eduText} >
            <p>Лицензированное образовательное учреждение Ogogo English имеет гибридный подход к обучению студентов 3/2, то есть совмещает  talking и grammar через день, а именно<br/>3 дня grammar <br/> 2 дня talking club.</p>
          </div>
          <div>
            <img src={OgogoElla} alt="" />
          </div>
        </div>
          <div   id="study">
            <h3><span>учеба в европе</span></h3>
            <p>Компания “Next Generation” открылась  в 2020 году . Мы помогаем школьникам/ студентам поступить в Европу на бакалавриат и магистратуру. Отправили более 200 человек. Наша команда сопровождает  студентов от... </p>
          </div>
      <div className={styles.eduEurope}>
        <div className={styles.eduCard} >
          <ul>
            <p>Наша команда сопровождает  студентов от «А до Я» : </p>
            <li>Консультацию по всем аспектам жизни в Европе</li>
            <li>Помощь в выборе профессии и университета</li>
            <li>Мотивация и поддержка на всех этапах поступления</li>
            <li>Визовая поддержка</li>
            <li>Встреча в аэропорту</li>
            <li>Совместный поход в университет</li>
            <li>И помощь в адаптации в стране</li>
          </ul>
        </div>
        <div className={styles.eduCard} >
          <ul>
            <p>Отправляем в такие страны как :</p>
            <li>-Польшу - Lazarski, PJATK, Colleqium Civitas и др.</li>
            <li>-Италию - La Sapienza University, Tor Vergata University, Bologna University и др.</li>
            <li>-Австрия- University of Vienna, University of Economics and Business</li>
            <li>-Германия - Berufsschule</li>
            <li>-Венгрия - METU, Debreceni Egyetem, University of Szeged и др </li>
          </ul>
        </div>
      </div>
    </div>
    </>
  )
}

export default Education