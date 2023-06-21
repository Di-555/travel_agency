import cn from 'classnames';
import { FC } from 'react';
import { SectionTitle } from '../../shared/ui/SectionTitle/SectionTitle';
import Slider from '../../shared/ui/Slider/Slider';
import { Review } from './Review/Review';
import styles from './Reviews.module.scss'

import User1Src from '../../shared/assets/user1.png';
import User2Src from '../../shared/assets/user2.png';
import { SwiperOptions } from 'swiper';

interface ReviewsProps {
	className?: string
}

export const Reviews: FC<ReviewsProps> = (props) => {
	const { className } = props
	return (
		<div className={cn(styles.Reviews, className)}>
			<SectionTitle text='У нас более 3 тысяч  довольных клиентов' />
			<Slider
				init={false}
				withNav
				slides-per-view={2}
				class='reviews'
				space-between={40}
				slides={[
					<Review
						text='Моя поездка в Китай была незабываемой! Я была поражена красотой природы и разнообразием ландшафтов. Горные вершины, зеленые долины, красивейшие реки и озера - все это создавало впечатляющую картину! Культура Китая - это настоящее сокровище, которое я с удовольствием изучала каждый день. '
						userAva={`${User1Src}`}
						userName='Наталья Ковальчук'
					/>,
					<Review
						text='В этой поездке я познакомился с культурой Китая. Я узнал о традиционной музыке и танцах, а также посетил местный базар, где продавались различные сувениры и изделия ручной работы.
						Я очень благодарен за этот опыт и надеюсь вернуться в Китай снова в будущем.'
						userAva={`${User2Src}`}
						userName='Дмитрий Воронцов'
					/>,
					<Review
						text='Моя поездка в Китай была незабываемой! Я была поражена красотой природы и разнообразием ландшафтов. Горные вершины, зеленые долины, красивейшие реки и озера - все это создавало впечатляющую картину! Культура Китая - это настоящее сокровище, которое я с удовольствием изучала каждый день. '
						userAva={`${User1Src}`}
						userName='Наталья Ковальчук'
					/>,
					<Review
						text='В этой поездке я познакомился с культурой Китая. Я узнал о традиционной музыке и танцах, а также посетил местный базар, где продавались различные сувениры и изделия ручной работы.
						Я очень благодарен за этот опыт и надеюсь вернуться в Китай снова в будущем.'
						userAva={`${User2Src}`}
						userName='Дмитрий Воронцов'
					/>
				]}
			/>
		</div>
	);
};