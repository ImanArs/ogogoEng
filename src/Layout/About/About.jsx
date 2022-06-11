import React from 'react'
import styles from './About.module.scss'

const About = () => {
  return (
    <div id='about' >
      <div className={styles.aboutTitle} >
        <h2><span>About us</span></h2>
        <p>Ogogo English – лицензированное образовательное учреждение, открытое в 2020 году, в котором люди любого возраста за короткие сроки могут получить качественное знание английского языка. Целью компании является научить говорить на английском- без ошибок и справиться со страхом общения на этом языке!</p>
      </div>
    </div>
  )
}

export default About