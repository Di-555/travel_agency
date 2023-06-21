import cn from 'classnames';
import styles from './Registration.module.scss'
import { FC, useState } from 'react';
import { authApi } from '../../services/authApi';
import {
	useMutation,
} from 'react-query'
import { Input } from '../../shared/ui/Input/Input';
import { Button, ThemeButton } from '../../shared/ui/Button/Button';

interface RegistrationProps {
	setLogin: () => void
}

export const Registration: FC<RegistrationProps> = (props) => {
	const { setLogin } = props

	const [password, setPassword] = useState('')
	const [username, setUsername] = useState('')

	const mutation = useMutation(authApi.registration, {
		onSuccess: setLogin,
		onError: () => alert('Пользователь с таким ником уже существует')
	})

	return (
		<div className={cn(styles.wrapper)}>
			<Input placeholder='Логин' value={username} onChange={setUsername} />
			<Input placeholder='Пароль' type='password' value={password} onChange={setPassword} />

			<Button
				theme={ThemeButton.INVERTED}
				className={styles.btn}
				onClick={() => {
					mutation.mutate({
						password,
						username,
					})
				}}
			>
				Регистрация
			</Button>
		</div>
	);
};