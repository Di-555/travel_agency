import cn from 'classnames';
import { FC, useState } from 'react';
import styles from './ToggleTextBlock.module.scss'

interface ToggleTextBlockProps {
	className?: string
	text: string
	title: string
}

export const ToggleTextBlock: FC<ToggleTextBlockProps> = (props) => {
	const [open, setOpen] = useState(false)

	const { className, title, text } = props;

	return (
		<div className={cn(styles.ToggleTextBlock, className)}>
			<button className={styles.title} onClick={() => setOpen(prev => !prev)}>
				{title} <span>{open ? '-' : '+'}</span>
			</button>
			{open && <p className={styles.text}>{text}</p>}
		</div>
	);
};