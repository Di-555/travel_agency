import cn from 'classnames';
import { FC, useEffect, useState } from 'react';
import { SwiperOptions } from 'swiper';
import { SectionTitle } from '../../shared/ui/SectionTitle/SectionTitle';
import Slider from '../../shared/ui/Slider/Slider';
import { Tour } from '../../types/Tour';
import { TourDay } from '../TourDay/TourDay';
import { TourTowns } from '../TourTowns/TourTowns';
import styles from './TourPlan.module.scss'

interface TourPlanProps {
	className?: string;
	tour?: Tour
}

const sliderConfig: SwiperOptions = {
	injectStyles: [
		`
		.swiper-button-disabled{
			background: #2d2d2d !important;
			cursor: default !important;
		}
		.swiper-button-disabled svg{
			stroke: white !important;
		}
		.swiper-button-disabled:hover svg{
			stroke: white !important;
		}
		
		.plan swiper-slide{
			height:auto;
	}
`,
	],
};


export const TourPlan: FC<TourPlanProps> = (props) => {
	const { className, tour } = props;

	const [activeTown, setActiveTown] = useState(1)

	const onChange = (slideIndex: number) => {
		setActiveTown(slideIndex + 1)
	}

	return (
		<div className={cn(styles.TourPlan, className)}>
			<SectionTitle text='План тура' />
			<Slider
				init={false}
				class='plan'
				slides-per-view={1}
				topNav
				onChange={onChange}
				withNav
				config={sliderConfig}
				slides={tour?.days.map((day) => (
					<TourDay day={day} />
				))}
			/>
			<TourTowns days={tour?.days} activeIndex={activeTown} />
		</div>
	);
};