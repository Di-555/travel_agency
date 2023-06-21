import cn from 'classnames';
import { FC, useState } from 'react';
import styles from './LogAndReg.module.scss'

import { Registration } from '../Registration/Registration';
import { Login } from '../Login/Login';

import LoginBg from '../../shared/assets/logBg.png'
import RegistrBg from '../../shared/assets/regBg.png'

interface LogAndRegProps {
	className?: string
	onClose: () => void
}

export const LogAndReg: FC<LogAndRegProps> = (props) => {
	const { className, onClose } = props;

	const [isLogin, setIslogin] = useState(true)

	const setReg = () => {
		setIslogin(false)
	}
	const setLogin = () => {
		setIslogin(true)
	}

	return (
		<div className={cn(styles.logAndReg, className)}>
			<div className={styles.content}>
				<div className={styles.header}>
					<div className={styles.btns}>
						<button className={cn(styles.btn, { [styles.active]: isLogin })} onClick={setLogin}>Вход</button>
						<button className={cn(styles.btn, { [styles.active]: !isLogin })} onClick={setReg}>Регистрация</button>
					</div>
					<p className={styles.title}>Пора путешествовать!</p>
					<p className={styles.text}>Войдите, чтобы продолжить</p>
				</div>
				{isLogin ? <Login onLogin={onClose} /> : <Registration setLogin={setLogin} />}
			</div>
			<img src={isLogin ? LoginBg : RegistrBg} alt="girl" className={styles.img} />
		</div>
	);
};