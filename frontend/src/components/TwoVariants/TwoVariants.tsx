import cn from 'classnames';
import { FC } from 'react';
import { SectionTitle, SectionTitleAlign } from '../../shared/ui/SectionTitle/SectionTitle';
import styles from './TwoVariants.module.scss'

interface TwoVariantsProps {
	className?: string
}

export const TwoVariants: FC<TwoVariantsProps> = (props) => {
	const { className } = props;
	return (
		<div className={cn(styles.TwoVariants, className)}>
			<SectionTitle align={SectionTitleAlign.CENTER} text='У вас 2 варианта путешествия' />
			<div className={styles.question}><span>Какой выберете вы?</span></div>
			<div className={styles.inner}>
				<div className={styles.variant}>
					<p className={styles.title}>1 Вариант</p>
					<p className={styles.name}>Обычный тур</p>
					<p className={styles.text}>Многодневные туры для тех, кто хочет увидеть мир с другой стороны и погрузиться в местную культуру. Наши туры охватывают несколько городов за короткий период времени, что позволяет туристам узнать больше о местной истории и культуре, а также насладиться видами и достопримечательностями, которые каждый город предлагает.</p>
				</div>
				<div className={styles.variant}>
					<p className={styles.title}>2 Вариант</p>
					<p className={styles.name}>Экскурсия</p>
					<p className={styles.text}>Разнообразные однодневные экскурсии для туристов, которые хотят увидеть самые интересные и значимые места в городе.</p>
				</div>
			</div>
		</div>
	);
};