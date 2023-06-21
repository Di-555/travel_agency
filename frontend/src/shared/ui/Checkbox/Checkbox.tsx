import cn from 'classnames';

import React, { FC, InputHTMLAttributes } from 'react';

import styles from './Checkbox.module.scss';
import { ReactComponent as Mark } from '../../assets/icons/mark.svg'

interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
	className?: string;
	text: string;
	onChange: () => void;
}

export const Checkbox: FC<CheckboxProps> = (props) => {
	const { className, text, checked, onChange, disabled, } = props;
	return (
		<button
			disabled={disabled}
			onClick={onChange}
			className={cn(className, styles.wrapper)
			}
		>
			<span className={cn(styles.box, { [styles.checked]: checked })}>
				<Mark />
			</span>
			<span className={styles.text}>{text}</span>
		</button>
	)
}
