import React, { type FC, memo } from 'react';
import cn from 'classnames'

import styles from './Modal.module.scss';

interface ModalProps {
	children: React.ReactNode;
	open: boolean;
	onClose: () => void;
}

export const Modal: FC<ModalProps> = memo((props) => {

	const { children, open, onClose } = props

	return (
		<div
			className={cn(styles.modal, { [styles.open]: open })}
			onClick={onClose}
		>
			<div
				className={styles.content}
				onClick={(e) => {
					e.stopPropagation();
				}}
			>
				{children}
			</div>
		</div>
	);
});

Modal.displayName = 'Modal';