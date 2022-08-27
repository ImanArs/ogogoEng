import React, { useEffect, useState } from 'react'
import Header from './Header/Header'
import ContactUs from './ContactUs/ContactUs'
import About from './About/About'
import Slide from './Slide/Slide'
import styles from './Home.module.scss'
import { useTranslation } from 'react-i18next'
import '../i18next'
import image from './london_bg.png'
import Education from './Education/Education'
import Reviews from './Reviews/Reviews'
import Teachers from './Teachers/Teachers'

const Home = () => {
	const { t } = useTranslation()
	const [info, setInfo] = useState()
	useEffect(() => {
		if (localStorage.getItem('i18nextLng') !== '') {
			setInfo(localStorage.getItem('i18nextLng'))
		}
	}, [info])

	return (
		<>
			<Header setInfo={setInfo} info={info} />
			<div className={styles.block}>
				{info === 'ru' ? (
					<div className={styles.home__container}>
						<div className={styles.home__wrapper}>
							<div className={styles.home__block}>
								<span>{t('home.Courses')}</span>
								<span>{t('home.prog')}</span>
							</div>
							{/* <h1>{t('home.academy')}</h1> */}
							<h2>OGOGO</h2>
							<h3>English</h3>
						</div>

						<img className={styles.img} src={image} alt='img' />
					</div>
				) : (
					<div className={styles.home__container_en}>
						<div className={styles.home__wrapper_en}>
							<div className={styles.home__block_en}>
								<span>{t('home.prog')}</span>
							</div>
							{/* <h1>{t('home.academy')}</h1> */}
							<h2>OGOGO</h2>
							<h3>English</h3>
						</div>

						<img className={styles.img} src={image} alt='img' />
					</div>
				)}
			</div>
			<ContactUs id='contact' />
			<Slide />
			<About />
			<Education />
			<Teachers info={info} setInfo={setInfo} />
			<Reviews />
		</>
	)
}

export default Home
