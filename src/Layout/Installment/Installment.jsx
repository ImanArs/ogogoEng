import styles from './Installment.module.scss'

import { useTranslation } from 'react-i18next'
import '../../i18next.js'
import { t } from 'i18next'

const Installment = () => {
	return (
		<div className={styles.installment} id='installment'>
			<div className={styles.wrapper}>
				<div className={styles.installment__block}>
					<h2>{t('installment.installments')}</h2>
					<p>{t('installment.down')}</p>
					<a target='_blank' href="https://t.me/QuizBot">
						<button>{t('installment.req')}</button>
					</a>
				</div>
				<div className={styles.icon__block}>
					<svg className={styles.telegram} width="84" height="84" viewBox="0 0 64 64" fill="" xmlns="http://www.w3.org/2000/svg">
						<path d="M31.5 2C15.2036 2 2 15.2246 2 31.5469C2 47.8691 15.2036 61.0938 31.5 61.0938C47.7964 61.0938 61 47.8691 61 31.5469C61 15.2246 47.7964 2 31.5 2ZM45.9883 22.242L41.147 45.0932C40.7901 46.7135 39.8266 47.1066 38.4825 46.3441L31.1075 40.8994L27.5508 44.3307C27.1583 44.7238 26.8252 45.0574 26.0639 45.0574L26.5873 37.5396L40.2548 25.1729C40.8496 24.6486 40.124 24.3508 39.3389 24.875L22.4478 35.5262L15.1679 33.2506C13.5859 32.7502 13.5502 31.666 15.501 30.9035L43.9423 19.9187C45.2627 19.4422 46.4165 20.2404 45.9883 22.242V22.242Z" fill="black"/>
					</svg>	
					<svg className={styles.opros} width="84" height="84" viewBox="0 0 64 64" fill="" xmlns="http://www.w3.org/2000/svg">
						<rect x="15" y="9" width="34" height="40" rx="1" stroke="black" stroke-width="4" mask="url(#path-1-inside-1)"/>
						<rect x="12" y="6" width="40" height="52" rx="1" stroke="#D3CCC3" stroke-width="2"/>
						<rect x="30" y="52" width="4" height="3" stroke="#D3CCC3" stroke-width="2"/>
						<rect x="20" y="14" width="22" height="2" fill="black"/>
						<rect x="20" y="18" width="18" height="2" fill="black"/>
						<rect x="20" y="26" width="19" height="2" fill="black"/>
						<rect x="20" y="30" width="17" height="2" fill="black"/>
						<rect x="20" y="34" width="22" height="2" fill="black"/>
						<rect x="20" y="38" width="18" height="2" fill="black"/>
						<rect x="20" y="42" width="16" height="2" fill="black"/>
					</svg>
				</div>
			</div>
		</div>
	)
}

export default Installment
