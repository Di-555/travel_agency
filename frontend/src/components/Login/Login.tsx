import cn from 'classnames';
import { FC, useContext, useState } from 'react';
import { User } from '../../types/User'
import styles from './Login.module.scss'
import {
	useMutation, useQueryClient
} from 'react-query'
import { authApi } from '../../services/authApi';
import { Input } from '../../shared/ui/Input/Input';
import { UserContext } from '../../context/UserContext';
import { Button, ThemeButton } from '../../shared/ui/Button/Button';
import { useNavigate } from 'react-router-dom';

interface LoginProps {
	onLogin: () => void
}

export const Login: FC<LoginProps> = (props) => {
	const { onLogin } = props

	const { setUser } = useContext(UserContext)
	const queryClient = useQueryClient()

	const mutation = useMutation(authApi.login, {
		onSuccess: (res) => {
			setUser?.(res as User); 
			onLogin()
			// @ts-ignore
			queryClient.invalidateQueries('orders')
		},
		onError: (rej) => alert(rej)
	})

	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')

	return (
		<div className={cn(styles.wrapper)}>
			<Input placeholder='Логин' value={username} onChange={setUsername} />
			<Input type="password" placeholder='Пароль' value={password} onChange={setPassword} />
			<Button
				className={styles.btn}
				theme={ThemeButton.INVERTED}
				onClick={() => {
					mutation.mutate({
						username,
						password,
					})
				}}
			>
				Войти
			</Button>
		</div>
	);
};