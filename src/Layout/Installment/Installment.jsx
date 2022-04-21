import styles from './Installment.module.scss'
import img from './Rectangle1278.png'

const Installment = () => {
	return (
		<div className={styles.installment} id='installment'>
			<div>
				<img src={img} alt='фон' />
			</div>
			<div className={styles.installment__block}>
				<h2>Беcпроцентная рассрочка</h2>
				<p>
					Рассрочка без первоначального взноса и переплат до 12 месяцев. Срок
					рассмотрения рассрочки от 2 до 30 минут. Оставляй заявку
				</p>
			</div>
		</div>
	)
}

export default Installment
