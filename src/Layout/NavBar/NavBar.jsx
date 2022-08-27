import styles from './NavBar.module.scss'
import { useTranslation } from 'react-i18next'
import '../../i18next.js'
import {Link} from 'react-scroll'
 
const NavBar = () => {
	const { t } = useTranslation()
	return (
		<div>
				<ul className={styles.nav__active}>
					<li>
						<Link activeClass="active" to="about" spy={true} smooth={true} offset={-50} duration={500}  href='#about'>{t('navBar.about')}</Link>
					</li>
					<li>
						<Link activeClass="active" to="education" spy={true} smooth={true} offset={-50} duration={500} href='#installment'>{t('navBar.education')}</Link>
					</li>
					<li>
						<Link activeClass="active" to="study" spy={true} smooth={true} offset={-50} duration={500} href='#study'>{t('navBar.study')}</Link>
					</li>
					<li>
						<Link activeClass="active" to="teachers" spy={true} smooth={true} offset={-50} duration={500} href='#teachers'>{t('navBar.teachers')}</Link>
					</li>
					<li>
						<a target='_blank' rel="noreferrer" href='https://ogogoacademy.kg/'>{t('navBar.programming')}</a>
					</li>
					<li>
						<Link activeClass="active" to="reviews" spy={true} smooth={true} offset={-50} duration={500} href='#reviews'>{t('navBar.reviews')}</Link>
					</li>
					<li>
						<Link activeClass="active" to="footer" spy={true} smooth={true} offset={-50} duration={500} href='#footer'>{t('navBar.contacts')}</Link>
					</li>
				</ul>
			
		</div>
	)
}

export default NavBar
