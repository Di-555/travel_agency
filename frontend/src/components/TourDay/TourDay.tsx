import cn from 'classnames';
import { FC } from 'react';
import { Tour } from '../../types/Tour';
import styles from './TourDay.module.scss'

interface TourDayProps { className?: string, day: Tour['days'][0] }

export const TourDay: FC<TourDayProps> = (props) => {
	const { className, day } = props;
	return (
		<div className={cn(styles.TourDay, className)}>
			<div className={styles.left}>
				<p className={styles.number}>День {day.number}</p>
				<p className={styles.desc}>{day.desc}</p>
			</div>
			<img className={styles.img} src={day.img} alt={day.town} />
		</div>
	);
};