import cn from 'classnames';

import { type FC, type InputHTMLAttributes, useState, Dispatch, SetStateAction, forwardRef } from 'react';

import styles from './Input.module.scss';

type HtmlInput = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'placeholder'>;

interface InputProps extends HtmlInput {
	value?: string | number;
	placeholder?: string | null;
	onChange?: Dispatch<SetStateAction<any>>;
}

type Ref = HTMLInputElement;

export const Input: FC<InputProps> = forwardRef<Ref, InputProps>((props, ref) => {
	const { value, placeholder, readOnly, className, type = 'text', onChange, ...otherProps } = props;

	const [upper, setUpper] = useState(Boolean(value));

	const onUpper = () => {
		setUpper(true);
	};

	const onCancelUpper = () => {
		if (!value) {
			setUpper(false);
		}
	};

	return (
		<div className={styles.wrapper}>
			<input
				className={cn(styles.Input, {}, className)}
				autoComplete="new-password"
				ref={ref}
				type={type}
				value={value}
				readOnly={readOnly}
				onFocus={onUpper}
				onBlur={onCancelUpper}
				onChange={(e) => {
					onChange?.(e.target.value);
				}}
				{...otherProps}
			/>
			{placeholder && <span className={cn(styles.label, { [styles.upper]: upper })}>{placeholder}</span>}
		</div>
	);
});

Input.displayName = 'Input';
