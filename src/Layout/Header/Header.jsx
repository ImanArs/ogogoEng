import styles from './Header.module.scss'
import NavBar from '../NavBar/NavBar'
import ChangeLanguage from '../ChangeLanguage/ChangeLanguage'
import { Link, useLocation } from 'react-router-dom'

const Header = ({ setInfo, info }) => {
	let location = useLocation()
	return (
		<header className={styles.header}>
			<Link to='/'>
				<div className={styles.logo} >
					<img src='/logo.png' alt="logo" />
				</div>
			</Link>
			<NavBar />
			<div className={styles.header__right}>
				<ChangeLanguage setInfo={setInfo} info={info} />
			</div>
		</header>
	)
}

export default Header
