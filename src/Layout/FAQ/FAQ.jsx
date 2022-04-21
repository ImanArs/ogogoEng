import React, { FC, useEffect, useRef, useState } from 'react'
import styles from './FAQ.module.scss'
import coolicon from './coolicon.png'
import axios from 'axios'

const FAQ = () => {
	const [data, setData] = useState([])
	const [handleData, setHandleData] = useState([])
	const [isActive, setIsActive] = useState(false)
	const [count, setCount] = useState([])
	const [lem, setLem] = useState()

	useEffect(() => {
		getData()
		setIsActive(false)
	}, [isActive])

	const getData = () => {
		if (data.length < 1) {
			axios
				.get('https://62176bfc71e7672e537e0afe.mockapi.io/slide-V2')
				.then(res => {
					const dat = res.data
					dat.map(item => {
						if (item.id == 1) {
							data.push(item)
						}
					})
					setHandleData(dat)
				})
		}
		if (count.length < 1) {
			axios
				.get('https://62176bfc71e7672e537e0afe.mockapi.io/slide-v2-bool')
				.then(res => {
					const dat = res.data
					setCount(dat)
				})
		}
	}

	const addData = (index, id) => {
		handleData.map(item => {
			let i = 0
			if (item.id == id) {
				data[i] = item
			}
		})
	}

	const changeItem = (index, id) => {
		count.map(item => {
			if (item.bool === true) {
				item.bool = false
			}
			if (item.name === index) {
				setIsActive(true)
				item.bool = true
			}
		})
		addData(index, id)
	}
	const check = () => {
		console.log(handleData)
	}
	return (
		<div className={styles.faq__block} id='faq'>
			<div className={styles.faq__left}>
				<div className={styles.faq__left__imgOne}>
					<img src={coolicon} alt='icon' />
				</div>
				<span>Часто задаваемые вопросы</span>
				<div className={styles.faq__left__imgTwo}>
					<img src={coolicon} alt='icon' />
				</div>
				<div className={styles.faq__left__imgThree}>
					<img src={coolicon} alt='icon' />
				</div>
			</div>
			<div className={styles.faq__block__two}>
				<div className={styles.faq__middle}>
					{count.map(({ bool, id }, index) => {
						return (
							<div
								key={index}
								className={
									bool ? styles.faq__middle__item : styles.faq__middle__none
								}
								onClick={bool ? undefined : () => changeItem(index, id)}
							></div>
						)
					})}
				</div>
				<div className={styles.faq__middle_none}>
					{count.map(({ bool, id }, index) => {
						return (
							<div
								key={index}
								className={
									bool ? styles.faq__middle__item : styles.faq__middle__none
								}
								onClick={bool ? undefined : () => changeItem(index, id)}
							></div>
						)
					})}
				</div>
				<div className={styles.faq__right}>
					{handleData.map(({ name, image, description, style, id }) => {
						return (
							<div key={id} className={styles.faq__right__item}>
								<img src={image} alt='icon' />
								<h2>{name}</h2>
								<p>{description}</p>
							</div>
						)
					})}
				</div>
			</div>
		</div>
	)
}

export default FAQ
