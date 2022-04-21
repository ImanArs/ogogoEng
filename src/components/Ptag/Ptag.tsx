// { Props }
import { PtagProps } from './Ptag.props';
// { Lib }
import cn from 'classnames';
// { Styles }
import styles from './Ptag.module.scss';

const Ptag = ({ size, children, ...props }: PtagProps): JSX.Element => {
	return (
		<p
			className={cn(styles.p, {
				[styles.s]: size == 's',
				[styles.m]: size == 'm',
				[styles.l]: size == 'l',
			})}
			{...props}
		>
			{children}
		</p>
	);
};

export default Ptag;
