import cn from 'classnames';
import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { formatDate } from '../../shared/utils/formatDate';
import { toPriceRU } from '../../shared/utils/toPriceRu';
import { Tour } from '../../types/Tour';
import styles from './TourCard.module.scss'
import { ReactComponent as CalendarIcon } from '../../shared/assets/icons/Calendar.svg'

interface TourCardProps {
	className?: string;
	item: Tour
	small?: boolean
}

export const TourCard: FC<TourCardProps> = (props) => {
	const { item, small = false } = props;

	const router = useNavigate()

	const redirectHandler = () => {
		item._id && router('/tours/' + item._id)
	}

	return (
		<div onClick={redirectHandler} className={cn(styles.TourCard, { [styles.small]: small })}>
			<img src={item.mainImg} className={styles.img} alt={item.title} />
			<p className={styles.title}>{item.title}</p>
			<div className={styles.footer}>
				<p className={styles.date} >
					<CalendarIcon />
					{formatDate(item.startDate)}-{formatDate(item.endDate)}
				</p>
				<p className={styles.price} >{toPriceRU(item.price)}</p>
			</div>
			<div className={styles.shadow} />
		</div>
	);
};