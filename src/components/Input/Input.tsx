import styles from './Input.module.scss'
import { InputProps } from './Input.props'

const Input = ({
	placeholder,
	type,
	name,
	...props
}: InputProps): JSX.Element => {
	return (
		<input
			type={type}
			name={name}
			placeholder={placeholder}
			required
			{...props}
			className={styles.input}
		/>
	)
}

export default Input
