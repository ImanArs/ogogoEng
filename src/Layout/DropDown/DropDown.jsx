import { Link } from 'react-router-dom'
import styles from './DropDown.module.scss'

const DropDown = () => {
	return (
		<div className={styles.dropdown}>
			<div className={styles.dropdown__select}>
				<span className={styles.select}>Курсы</span>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					fill='none'
					viewBox='0 0 24 24'
					stroke='currentColor'
				>
					<path
						strokeLinecap='round'
						strokeLinejoin='round'
						strokeWidth='3'
						d='M19 9l-7 7-7-7'
					/>
				</svg>
			</div>
			<div className={styles.dropdown__list}>
				<div className={styles.dropdown__list__item}>
					<Link to='/js'>JavaScript</Link>
				</div>
				<div className={styles.dropdown__list__item}>
					<Link to='/ux'>UX/UI design</Link>
				</div>
				<div className={styles.dropdown__list__item}>
					<Link to='/python'>Python</Link>
				</div>
			</div>
		</div>
	)
}

export default DropDown
