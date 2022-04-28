import { useTranslation } from 'react-i18next'
import styles from './ContactUs.module.scss'
import '../../i18next.js'

const ContactUs = () => {
	const { t } = useTranslation()
	return (
		<div className={styles.contact__wrapper} id='contact'>
			<div className={styles.contact__left}>
				<h3>{t('contacts.contact')}</h3>
				<p>
					Если у Вас ещё остались вопросы, то оставьте Ваши контакты в форме
					заявки и наш менеджер свяжется с Вами в близжайшее время.
				</p>
			</div>
			<form
				target='_blank'
				action='https://formsubmit.co/islamjan.m.m@gmail.com'
				method='POST'
				className={styles.contact__right}
			>
				<input
					type='number'
					className={styles.input}
					placeholder='Введите номер'
					required
					name='phone'
				></input>
				<button className={styles.send} type='submit'>
					Отправить
				</button>
			</form>
		</div>
	)
}

export default ContactUs
