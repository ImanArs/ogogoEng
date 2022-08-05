import { Link, useLocation } from 'react-router-dom'
import styles from './NavBar.module.scss'
import { useTranslation } from 'react-i18next'
import '../../i18next.js'
// import Link from 'react-scroll'
 
const NavBar = () => {
	let location = useLocation()
	const { t } = useTranslation()
	return (
		<div>
			{location.pathname === '/' ? (
				<ul className={styles.nav__active}>
					<li>
						<a activeClass="active" to="about" spy={true} smooth={true} offset={50} duration={500}  href='#about'>{t('navBar.about')}</a>
					</li>
					<li>
						<a href='#installment'>{t('navBar.education')}</a>
					</li>
					<li>
						<a href='#study'>{t('navBar.study')}</a>
					</li>
					<li>
						<a href='#teachers'>{t('navBar.teachers')}</a>
					</li>
					<li>
						<a target='_blank' href='https://ogogoacademy.kg/'>{t('navBar.programming')}</a>
					</li>
					<li>
						<a href='#reviews'>{t('navBar.reviews')}</a>
					</li>
					<li>
						<a href='#footer'>{t('navBar.contacts')}</a>
					</li>
				</ul>
			) : (
				<ul className={styles.nav}>
					<li>
						<Link to='/#about'>{t('navBar.about')}</Link>
					</li>
					<li>
						<Link to='/#installment'>{t('navBar.education')}</Link>
					</li>
					<li>
						<Link to='/#study'>{t('navBar.study')}</Link>
					</li>
					<li>
						<Link to='/#teachers'>{t('navBar.teachers')}</Link>
					</li>
					<li>
						<Link to='/#footer'>{t('navBar.programming')}</Link>
					</li>
					<li>
						<Link to='/#reviews'>{t('navBar.reviews')}</Link>
					</li>
					<li>
						<Link to='/#footer'>{t('navBar.contacts')}</Link>
					</li>
				</ul>
			)}
		</div>
	)
}

export default NavBar
