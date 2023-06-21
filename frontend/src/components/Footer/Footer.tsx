import cn from 'classnames';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.scss'
import { ReactComponent as InstagramIcon } from '../../shared/assets/icons/Instagram.svg'
import { ReactComponent as TelegramIcon } from '../../shared/assets/icons/Telegram.svg'

interface FooterProps {
	className?: string
}

export const Footer: FC<FooterProps> = (props) => {
	const { className } = props
	return (
		<div className={cn(styles.Footer, className)}>
			<div className={styles.inner}>
				<Link to={'/'} className={cn(styles.logo, styles.link)}>Kulltura</Link>
				<div className={styles.links}>
					<Link to={'/tours'} className={styles.link}>Туры</Link>
					<Link to={'/about'} className={styles.link}>О нас</Link>
				</div>
				<div className={styles.socials}>
					<Link className={styles.social} to={'##'}><InstagramIcon /></Link>
					<Link className={styles.social} to={'##'}><TelegramIcon /></Link>
				</div>
			</div>
		</div>
	);
};