import { FC } from 'react';
import cn from 'classnames';
import styles from './FAQ.module.scss'
import { SectionTitle } from '../../shared/ui/SectionTitle/SectionTitle';
import { ToggleTextBlock } from '../ToggleTextBlock/ToggleTextBlock';

interface FAQProps {
	className?: string
}

export const FAQ: FC<FAQProps> = (props) => {
	const { className } = props
	//ответы на вопросы
	return (
		<div className={cn(styles.FAQ, className)}>
			<SectionTitle text='Ответы на часто задаваемые вопросы' />
			<ToggleTextBlock text='1' title='Что входит / не входит в стоимость тура?' />
			<ToggleTextBlock text='2' title='Что нужно брать с собой в тур?' />
			<ToggleTextBlock text='3' title='Нужно ли сдавать тест на COVID 19?' />
			<ToggleTextBlock text='4' title='Нужна ли физичесая подготовка к туру?' />
		</div>
	);
};