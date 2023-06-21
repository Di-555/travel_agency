import cn from 'classnames';
import { FC, useEffect } from 'react';
import { Tour } from '../../types/Tour';
import styles from './TourTowns.module.scss'

interface TourTownsProps {
	className?: string;
	days?: Tour['days'];
	activeIndex: number
}

export const TourTowns: FC<TourTownsProps> = (props) => {
	const { className, activeIndex, days } = props;

	return (
		<>
			{
				days &&
				<div className={cn(styles.TourTowns)} style={{ width: 100 * days.length }} >
					<span className={styles.line} style={{ backgroundSize: `${100 * activeIndex}px` }} />
					<div className={styles.days}>
						{days?.map((day) => (
							<div key={day.number} className={cn(styles.day, { [styles.active]: activeIndex === day.number })}>
								<p>День {day.number}</p>
								<span className={styles.dote} />
								<p>{day.town}</p>
							</div>
						))}
					</div>
				</div>
			}
		</>
	);
};