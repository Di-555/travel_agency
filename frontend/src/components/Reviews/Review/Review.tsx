import cn from 'classnames';
import { FC } from 'react';
import styles from './Review.module.scss'
import ReviewsSrc from '../../../shared/assets/reviews.png';


interface ReviewProps {
	className?: string
	text: string
	userName: string
	userAva: string
}

export const Review: FC<ReviewProps> = (props) => {
	const { className, text, userAva, userName } = props;

	return (
		<div className={cn(styles.Review, className)}>
			<img className={styles.stars} src={ReviewsSrc} alt='revies' />
			<p className={styles.text}>{text} </p>
			<div className={styles.user}>
				<img src={userAva} alt="ava" />
				{userName}
			</div>
		</div>
	);
};