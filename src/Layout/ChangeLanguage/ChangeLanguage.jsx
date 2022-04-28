import React, { useEffect, useState } from 'react'
import styles from './ChangeLanguage.module.scss'
import { useTranslation } from 'react-i18next'
import '../../i18next'

export default function ChangeLanguage() {
	const [localRU, setLocalRU] = useState(true)
	const [localEN, setLocalEN] = useState(true)
	const [isActive, setIsActive] = useState(false)

	const { t, i18n } = useTranslation()
	const changleLanguage = lang => {
		i18n.changeLanguage(lang)
	}

	const check = lank => {
		changleLanguage(lank)
		if (localStorage.getItem('i18nextLng')) {
			const info = localStorage.getItem('i18nextLng')
			if (info === 'ru') {
				setLocalRU(false)
				setLocalEN(true)
			} else {
				setLocalEN(false)
				setLocalRU(true)
			}
		}
	}
	useEffect(() => {
		check()
		changleLanguage()
		setIsActive(true)
	}, [localRU, localEN])

	return (
		<div className={styles.language__wrapper}>
			<button
				className={localRU ? '' : styles.active}
				onClick={() => check('ru')}
			>
				RU
			</button>
			<div></div>
			<button
				className={localEN ? '' : styles.active}
				onClick={() => check('eng')}
			>
				EN
			</button>
		</div>
	)
}
