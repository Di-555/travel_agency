import cn from 'classnames';
import { FC } from 'react';
import { formatDate } from '../../shared/utils/formatDate';
import { slantWords } from '../../shared/utils/slantWords';
import { toPriceRU } from '../../shared/utils/toPriceRu';
import { Tour } from '../../types/Tour';
import styles from './TourData.module.scss'

interface TourDataProps { className?: string, tour?: Tour }

export const TourData: FC<TourDataProps> = (props) => {
	const { className, tour } = props;
	return (
		<div className={cn(styles.TourData, className)}>
			<div className={styles.item}>
				<p>Длительность:</p>
				{tour?.duration && <p>{tour.duration} {slantWords(tour.duration, ['день', 'дня', 'дней'])}</p>}
			</div>
			<div className={styles.item}>
				<p>Дата:</p>
				<p>{formatDate(tour?.startDate)} - {formatDate(tour?.endDate)}</p>
			</div>
			<div className={styles.item}>
				<p>Стоимость:</p>
				<p>{toPriceRU(tour?.price)}</p>
			</div>
			<div className={styles.item}>
				<p>Количетсво мест:</p>
				<p>{tour?.busySeats}/{tour?.allSeats}</p>
			</div>
		</div>
	);
};