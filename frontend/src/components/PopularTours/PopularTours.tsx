import cn from 'classnames';
import { FC } from 'react';
import { useQuery } from 'react-query';
import { SwiperOptions } from 'swiper';
import { tourApi } from '../../services/toursApi';
import { SectionTitle } from '../../shared/ui/SectionTitle/SectionTitle';
import Slider from '../../shared/ui/Slider/Slider';
import { TourCard } from '../TourCard/TourCard';
import styles from './PopularTours.module.scss'

interface PopularToursProps {
	className?: string
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
		
		.reviews swiper-slide{
				height:auto;
				width:auto;
		}

		.popular swiper-slide{
			height:auto;
			width:auto !important;
	}
`,
	],
};


export const PopularTours: FC<PopularToursProps> = (props) => {
	const { className } = props;

	const { data } = useQuery('tours', tourApi.getTours)


	return (
		<div className={cn(styles.PopularTours, className)}>
			<SectionTitle text='Популярные туры' />
			<Slider
				config={sliderConfig}
				speed={1000}
				class='popular'
				// autoplay={true}
				init={false}
				withNav
				slides-per-view={3}
				slides-per-group={1}
				space-between={40}
				slides={data?.map((i) => <TourCard item={i} />)}
			/>
		</div>
	);
};