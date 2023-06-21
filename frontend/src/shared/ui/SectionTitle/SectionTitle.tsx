import cn from 'classnames';
import { FC } from 'react';
import styles from './SectionTitle.module.scss'

interface SectionTitleProps {
	className?: string
	text: string
	align?: SectionTitleAlign
	withoutMargin?: boolean
}

export enum SectionTitleAlign {
	CENTER = 'center',
	LEFT = 'left'
}

export const SectionTitle: FC<SectionTitleProps> = (props) => {
	const { className, text, align = SectionTitleAlign.LEFT, withoutMargin = false } = props
	return (
		<h2 className={cn(styles.SectionTitle, className, styles[align], { [styles.withoutMargin]: withoutMargin })}>
			{text}
		</h2>
	);
};