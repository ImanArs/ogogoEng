import styles from './Works.module.scss'
import img__burul from './Бурул.png'
import img__faruh from './Фарух.png'
import img__ratmir from './Ратмир.png'
import img__firuza from './Фируза.png'
import img__alex from './Алекс.png'
import img__arrow from './arrow-down.png'
import ContactUs from '../ContactUs/ContactUs'

const Works = () => {
	return (
		<div className={styles.works} id='works'>
			<div className={styles.works__title}>
				<h2>Выпускные работы студентов</h2>
				<div className={styles.pointer}>
					<img src={img__arrow} alt='Указатель'></img>
				</div>
			</div>
			<div className={styles.works__block}>
				<div className={styles.works__block__left}>
					<div className={styles.burul__block}>
						<div className={styles.burul__img}>
							<img src={img__burul} alt='Работа Бурул' />
						</div>
						<div className={styles.burul__text}>
							<h4>3 группа </h4>
							<h3>Бурул</h3>
							<p>
								Я рада, что попала именно на 3-ый поток, именно с этими
								ребятами, я рада каждой оценке, пусть и не самой высшей, я рада
								каждой ошибке и горжусь каждой сделанной мною работой. Мне есть
								куда расти и спасибо, что первым курсом, началом моего пути,
								стал именно OGOGO Академия, ваша команда и ваш курс. Это большая
								ценность. Все верят, что вы станете топовой академией, и я верю,
								что будет так. Спасибо большое!
							</p>
							<p className={styles.burul__text__none}>
								Я рада, что попала именно на 3-ый поток, именно с этими
								ребятами, я рада каждой оценке, каждой ошибке и горжусь каждой
								сделанной работой. Мне есть куда расти и спасибо, что первым
								курсом стал именно OGOGO Академия, эта команда и ваш курс. Все
								верят, что вы станете топовой академией, и я верю, что будет
								так. Спасибо большое!
							</p>
						</div>
					</div>
					<div className={styles.faruh__block}>
						<div className={styles.faruh__img}>
							<img src={img__faruh} alt='Работа Фаруха' />
						</div>
						<div className={styles.faruh__text}>
							<h4>2 группа </h4>
							<h3>Фарух</h3>
							<p>
								Курс OGOGO Академии помог мне прокачать свой навык в дизайне и
								выйти на более уверенный уровень
							</p>
						</div>
					</div>
				</div>
				<div className={styles.works__middle}>
					<div className={styles.works__middle__none}>
						<div className={styles.ratmir__block}>
							<div className={styles.ratmir__img}>
								<img src={img__ratmir} alt='Работа Ратмира' />
							</div>
							<div className={styles.ratmir__text}>
								<h4>3 группа </h4>
								<h3>Ратмир</h3>
								<p>
									Курс OGOGO Академии помог мне прокачать свой навык в дизайне и
									выйти на более уверенный уровень и, так как за время обучения
									я практиковался почти каждый день, это вышло сделать
									достаточно быстро. Хочу сказать OGOGO Академии большое спасибо
									за классные уроки, поддержку, чувство стиля и высокий навык в
									дизайне!
								</p>
								<p className={styles.ratmir__text__none}>
									Курсы помогли мне прокачать свой навык в дизайне и выйти на
									более уверенный уровень и, так как за время обучения я
									практиковался почти каждый день.
								</p>
							</div>
						</div>
						<div className={styles.faruh__block__none}>
							<div className={styles.faruh__img__none}>
								<img src={img__faruh} alt='Работа Фаруха' />
							</div>
							<div className={styles.faruh__text__none}>
								<h4>2 группа </h4>
								<h3>Фарух</h3>
								<p>
									Курс OGOGO Академии помог мне прокачать свой навык в дизайне и
									выйти на более уверенный уровень
								</p>
							</div>
						</div>
					</div>
					<div className={styles.firuza__block}>
						<div className={styles.firuza__img}>
							<img src={img__firuza} alt='Работа Фирузы' />
						</div>
						<div className={styles.firuza__text}>
							<h4>3 группа </h4>
							<h3>Фируза</h3>
							<p>
								Хочу поблагодарить OGOGO Академию за такой ценный курс!) Здесь
								вас научат основам веб-дизайна и даже больше - вы сможете найти
								себе отличную компанию таких же заряженных людей, как и вы сами)
								Подача материала, проверка уроков - все это на высшем уровне!
							</p>
						</div>
					</div>
				</div>
				<div className={styles.as}>
					<div className={styles.alex__block}>
						<div className={styles.alex__text}>
							<h4>2 группа </h4>
							<h3>Алекс</h3>
							<p>
								Лучшее обучение, которое я когда-либо проходила! Никакой воды в
								курсе , только самые актуальные темы, практика и улучшение
								навыков! Спасибо за крутую прокачку меня, как веб-дизайнера!)
							</p>
						</div>
						<div className={styles.alex__img}>
							<img className={styles.as} src={img__alex} alt='Работа Алекса' />
						</div>
					</div>
				</div>
			</div>
			<ContactUs />
		</div>
	)
}

export default Works
