import cn from 'classnames';

import { type ButtonHTMLAttributes, type FC } from 'react';

import styles from './Button.module.scss';

export enum ThemeButton {
	PRIMARY = 'primary',
	OUTLINE = 'outline',
	INVERTED = 'inverted',
}

export enum ButtonSize {
	m = 'size_m',
	l = 'size_l',
	xl = 'size_xl',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	theme?: ThemeButton;
}

export const Button: FC<ButtonProps> = (props) => {
	const { className, theme = ThemeButton.PRIMARY, children, ...otherProps } = props;

	return (
		<button {...otherProps} className={cn(styles.Button, className, styles[theme])}>
			{children}
		</button>
	);
};
