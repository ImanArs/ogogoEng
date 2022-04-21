import axios from 'axios'
import React, { FC, useEffect, useState } from 'react'
import styles from './Slide.module.scss'

const Slide = () => {
	const [isActive, setIsActive] = useState(false)
	const [data, setData] = useState([])
	const [count, setCount] = useState(1)

	useEffect(() => {
		componentDidMount()
		setIsActive(false)
	}, [isActive])

	const active = last => {
		data.map(item => {
			if (item.bool === true) {
				item.bool = false
			}
			if (last == item.name) {
				setIsActive(true)
				item.bool = !isActive
			}
		})
		console.log(count)
	}
	const componentDidMount = () => {
		if (data.length < 1) {
			axios
				.get(`https://62176bfc71e7672e537e0afe.mockapi.io/tests`)
				.then(res => {
					const dat = res.data
					setData(dat)
				})
		}
	}

	return (
		<div className={styles.slider}>
			<div className={styles.slide__block}>
				{data.map(({ image, name, bool, id }, index) => {
					return (
						<div className={styles.slide__bar} key={id}>
							<div
								onClick={() => active(name)}
								style={{ backgroundImage: `url(${image})` }}
								className={
									bool ? styles.slide__bar__img__active : styles.slide__bar__img
								}
							></div>
						</div>
					)
				})}
			</div>
			<ul className={styles.slide__info}>
				<li>Думай.</li>
				<li>Учись.</li>
				<li>Создавай</li>
			</ul>
			<div className={styles.slide__info__none}>
				<span>Курсы</span>
				<svg
					width='18'
					height='9'
					viewBox='0 0 18 9'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path
						d='M16.9201 0.949997L10.4001 7.47C9.63008 8.24 8.37008 8.24 7.60008 7.47L1.08008 0.949997'
						stroke='#292D32'
						stroke-width='1.5'
						stroke-miterlimit='10'
						stroke-linecap='round'
						stroke-linejoin='round'
					/>
				</svg>
			</div>
			<div className={styles.slide__none}>
				{data.map(({ image, name, id }, index) => {
					return (
						<div className={styles.slide__bar__none} key={id}>
							<div
								style={{ backgroundImage: `url(${image})` }}
								className={styles.slide__bar__img__none}
								key={name}
							></div>
						</div>
					)
				})}
			</div>
		</div>
	)
}

export default Slide
