import cn from 'classnames';
import { FC } from 'react';
import { SwiperOptions } from 'swiper';
import { SectionTitle } from '../../shared/ui/SectionTitle/SectionTitle';
import Slider from '../../shared/ui/Slider/Slider';
import { Tour } from '../../types/Tour';
import { TeamCard } from '../TeamCard/TeamCard';
import styles from './TourTeam.module.scss'

interface TourTeamProps { className?: string, team?: Tour['team'] }

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
		
		.teammm swiper-slide{
			height:auto;
			width:auto !important;
	}
`,
	],
};


export const TourTeam: FC<TourTeamProps> = (props) => {
	const { className, team } = props;

	return (
		<div className={cn(styles.TourTeam, className)}>
			<SectionTitle text='Команда на тур' />
			<Slider
				class='teammm'
				init={false}
				config={sliderConfig}
				withNav
				topNav
				space-between={127}
				slides-per-view={3}
				slides={team?.map((i) => (
					<TeamCard img={i.img} job={i.job} name={i.name} />
				))}
			/>
		</div>
	);
};