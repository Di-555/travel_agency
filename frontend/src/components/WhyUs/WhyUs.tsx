import cn from 'classnames';
import { FC } from 'react';
import { SectionTitle } from '../../shared/ui/SectionTitle/SectionTitle';
import styles from './WhyUs.module.scss'

import PhotographerSrc from '../../shared/assets/photographer.png'
import VietnamSrc from '../../shared/assets/Вьетнам.png'
import СhanganSrc from '../../shared/assets/Чанган.png'


interface WhyUsProps {
	className?: string
}

export const WhyUs: FC<WhyUsProps> = (props) => {
	const { className } = props
	return (
		<div className={cn(styles.WhyUs, className)}>
			<SectionTitle text='Кто мы и почему нас выбирают' />
			<div className={styles.inner}>
				<p className={styles.text}><span>Культура</span> - это туристическая компания, которая поможет вам не только окунуться в культуру страны, которую вы посещаете, но и сохранить воспоминания о ней навсегда.
					<br />
					<br />
					Наша особенность - команда профессиональных фотографов, которые сделают для вас потрясающие фотографии во время экскурсий и туров. Вы не только узнаете об истории и культуре местных жителей, но и сможете сохранить эти моменты на фото.
					<br />
					<br />
					Путешествие с Культурой - это незабываемый опыт, который вы захотите повторить снова и снова.</p>
				<div className={styles.gallery}>
					<img className={styles.photographer} src={PhotographerSrc} alt="photographer" />
					<img className={styles.changan} src={СhanganSrc} alt="Чанган" />
					<img className={styles.vietnam} src={VietnamSrc} alt="Вьетнам" />
				</div>
			</div>
			<div className={styles.tags}>
				<div className={styles.tag}>
					Более <span>10</span> <br />
					стран Мира
				</div>
				<div className={styles.tag}>
					Более<span> 5000  </span><br />
					туристов путешествовали <br /> с нами
				</div>
				<div className={styles.tag}>
					Создано более <span>15000</span> <br />
					фотографий
				</div>
				<div className={styles.tag}>
					Наша команда регулярно <br />  <span>повышает</span> квалификацию
				</div>
				<div className={styles.tag}>
					Регулярно <span>создаем</span><br /> новые туры и экскурсии
				</div>

			</div>
		</div>
	);
};