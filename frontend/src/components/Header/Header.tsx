import cn from 'classnames';
import { FC, useContext, useState } from 'react';
import styles from './Header.module.scss'
import { Link } from 'react-router-dom'
import { Button, ThemeButton } from '../../shared/ui/Button/Button';
import { Modal } from '../../shared/ui/Modal/Modal';
import { LogAndReg } from '../LogAndReg/LogAndReg';
import { UserContext } from '../../context/UserContext';



interface HeaderProps { staticPos?: boolean }

export const Header: FC<HeaderProps> = (props) => {
	const { staticPos } = props
	const [open, setOpen] = useState(false)

	const { user } = useContext(UserContext)

	const closeHandler = () => {
		setOpen(false)
	}

	const openHandler = () => {
		setOpen(true)
	}


	return (
		<>
			<div className={cn(styles.Header, { [styles.static]: staticPos })}>
				<div className={cn(styles.inner)}>
					<Link to={'/'} className={cn(styles.logo, styles.link)}>Kulltura</Link>
					<div className={styles.links}>
						<Link to={'/tours'} className={styles.link}>Туры</Link>
						<Link to={'/about'} className={styles.link}>О нас</Link>
					</div>
					{user?._id
						? <Link to={'/profile'} className={styles.link}>Профиль</Link>
						: <Button onClick={openHandler} theme={ThemeButton.OUTLINE}>Вход</Button>
					}
				</div>
			</div>
			<Modal open={open} onClose={closeHandler}>
				<LogAndReg onClose={closeHandler} />
			</Modal>
		</>

	);
};