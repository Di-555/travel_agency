import { FC } from 'react';
import cn from 'classnames';
import styles from './About.module.scss'
import { Layout } from '../../components/Layout/Layout';
import { SectionTitle, SectionTitleAlign } from '../../shared/ui/SectionTitle/SectionTitle';
import { AboutBlock } from '../../components/AboutBlock/AboutBlock';

import Japan from '../../shared/assets/Japan.png';
import Korea from '../../shared/assets/Korea.png';
import Girl from '../../shared/assets/girl.png';
import Man from '../../shared/assets/man.png';
import Changan from '../../shared/assets/ChanganBig.png';
import { ContactUs } from '../../components/ContactUs/ContactUs';
import { OurTeam } from '../../components/OurTeam/OurTeam';

interface AboutProps { }

export const About: FC<AboutProps> = () => {
	return (
		<Layout staticHeader>
			<div className={cn(styles.About)}>
				<SectionTitle text='О нас' />
				<div className={styles.inner}>

					<AboutBlock
						imgBlock={<img src={Japan} alt='Japan' />}
						text='Многодневные и однодневные туры с командой гидов и фотографов для тех, кто хочет увидеть мир
						с другой стороны и погрузиться в местную культуру. Наши туры позволяют туристам узнать больше о местной истории 
						и культуре, а также насладиться видами и достопримечательностями, которые каждый город предлагает.'
					/>

					<AboutBlock
						reversed
						imgBlock={<img src={Korea} alt='Korea' />}
						text='Во время нашего путешествия мы предлагаем множество интересных мест для посещения, 
						чтобы Ваше путешествие было незабываемым. Вы сможете насладиться красотами и увидеть места, которые не сможете забыть. 
						Будь то красивые пейзажи, исторические места, музеи, рестораны или магазины, наши туры охватывают все, 
						что может заинтересовать туристов.'
					/>

					<AboutBlock
						imgBlock={
							<div className={styles.gids}>
								<img src={Girl} alt='Girl' />
								<img src={Man} alt='Man' />
							</div>
						}
						text='Наша команда гидов и фотографов помогут вам максимально удовлетворить все ваши потребности в ходе путешествия. Гиды наших туров - это профессионалы своего дела, которые знают все о достопримечательностях и интересных местах городов, которые мы посещаем. Они смогут ответить на все ваши вопросы и рассказать много интересного о местах, которые вы посетите. 
						Наши фотографы запечатлят самые запоминающиеся моменты Вашего путешествия, чтобы у вас остались незабываемые воспоминания о поездке.'
					/>

					<AboutBlock
						reversed
						imgBlock={<img src={Changan} alt='Changan' />}
						text='Каждый наш тур разработан с учетом интересов и потребностей туристов. Наши туры для любителей искусства и архитектуры, для тех, кто хочет познакомиться с местной кухней, для любителей природы и многих других. Мы постоянно обновляем наши маршруты и добавляем новые экскурсии, чтобы наши туристы могли получить максимум удовольствия от путешествия.'
					/>
					<OurTeam />
					<ContactUs />
				</div>

			</div>
		</Layout>
	);
};