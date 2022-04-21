import { ButtonProps } from './Button.props'
import cn from 'classnames'
import styles from './Button.module.scss'

const Button = ({
	children,
	appearances,
	border,
	type,
}: ButtonProps): JSX.Element => {
	return (
		<button
			type={type}
			className={cn(styles.button, {
				[styles.sign]: appearances == 'sign',
				[styles.send]: appearances == 'send',
				[styles.bb]: border == 'bb',
				[styles.bw]: border == 'bw',
			})}
		>
			{children}
		</button>
	)
}

export default Button
