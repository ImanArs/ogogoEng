import { Link, useLocation } from 'react-router-dom'
import styles from './NavBar.module.scss'

const NavBar = () => {
	let location = useLocation()
	return (
		<div>
			{location.pathname === '/' ? (
				<ul className={styles.nav__active}>
					<li>
						<a href='#works'>Работы студентов</a>
					</li>
					<li>
						<a href='#installment'>Рассрочка</a>
					</li>
					<li>
						<a href='#faq'>FAQ</a>
					</li>
					<li>
						<a href='#footer'>Контакты</a>
					</li>
				</ul>
			) : (
				<ul className={styles.nav}>
					<li>
						<Link to='/'>Работы студентов</Link>
					</li>
					<li>
						<Link to='/'>Рассрочка</Link>
					</li>
					<li>
						<Link to='/'>FAQ</Link>
					</li>
					<li>
						<Link to='/'>Контакты</Link>
					</li>
				</ul>
			)}
		</div>
	)
}

export default NavBar
