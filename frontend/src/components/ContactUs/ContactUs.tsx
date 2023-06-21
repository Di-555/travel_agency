import cn from 'classnames';
import { FC } from 'react';
import styles from './ContactUs.module.scss'

interface ContactUsProps { className?: string }

export const ContactUs: FC<ContactUsProps> = (props) => {
	const { className } = props;

	return (
		<div className={cn(styles.ContactUs, className)}>
			<p className={styles.text}><span>Свяжитесь с нами</span><br /> любым удобным <br />для вас способом</p>
			<div className={styles.contacts}>
				Контактный телефон
				<span>+ 7 (950) 858-50-05</span>
				Почта
				<span>kulturatravel@mail.ru</span>
			</div>
		</div>
	);
};