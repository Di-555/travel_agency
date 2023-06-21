import cn from 'classnames';
import { FC } from 'react';
import { SectionTitle } from '../../shared/ui/SectionTitle/SectionTitle';
import Slider from '../../shared/ui/Slider/Slider';
import styles from './OurTeam.module.scss'
import { TeamCard } from '../TeamCard/TeamCard';

import Dmitryi from '../../shared/assets/Dmitryi.png'
import Ivan from '../../shared/assets/Ivan.png'
import Albert from '../../shared/assets/Albert.png'

import { SwiperOptions } from 'swiper';

interface OurTeamProps { className?: string }

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
		
		.team swiper-slide{
			height:auto;
			width:auto !important;
	}
`,
	],
};


export const OurTeam: FC<OurTeamProps> = (props) => {
	const { className } = props;

	return (
		<div className={cn(styles.OurTeam)}>
			<SectionTitle text='Наша команда' />
			<Slider
				class='team'
				init={false}
				config={sliderConfig}
				withNav
				topNav
				space-between={127}
				slides-per-view={3}
				slides={[
					<TeamCard img={Dmitryi} job='Гид, инструктор' name='Дмитрий' />,
					<TeamCard img={Albert} job='Гид' name='Альберт' />,
					<TeamCard img={Ivan} job='Гид' name='Иван' />,
					<TeamCard img={Dmitryi} job='Гид, инструктор' name='Дмитрий' />,
					<TeamCard img={Albert} job='Гид' name='Альберт' />,
					<TeamCard img={Ivan} job='Гид' name='Иван' />,
				]}
			/>
		</div>
	);
};