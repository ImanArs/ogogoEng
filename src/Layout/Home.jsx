import React from 'react'
import ContactUs from './ContactUs/ContactUs'
import FAQ from './FAQ/FAQ'
import Slide from './Slide/Slide'
import Works from './Works/Works'
import Installment from './Installment/Installment'
import styles from './Home.module.scss'

const Home = () => {
	return (
		<div>
			<div className={styles.block}>
				<div className={styles.img}></div>
			</div>

			<ContactUs />
			<Slide />
			<FAQ />
			<Installment />
			<Works />
		</div>
	)
}

export default Home
