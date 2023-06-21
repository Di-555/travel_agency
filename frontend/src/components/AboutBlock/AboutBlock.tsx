import cn from 'classnames';
import React, { FC } from 'react';
import styles from './AboutBlock.module.scss'

interface AboutBlockProps {
	className?: string
	text?: string;
	imgBlock: React.ReactNode
	reversed?: boolean
}

export const AboutBlock: FC<AboutBlockProps> = (props) => {
	const { className, imgBlock, text, reversed } = props;
	return (
		<div className={cn(styles.AboutBlock, className, { [styles.reversed]: reversed })}>
			<p className={styles.text}>{text}</p>
			<div className={styles.imgs}>
				{imgBlock}
			</div>
		</div>
	);
};