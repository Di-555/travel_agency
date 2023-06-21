import cn from 'classnames';
import { FC } from 'react';
import { Footer } from '../Footer/Footer';
import { Header } from '../Header/Header';
import styles from './Layout.module.scss'

interface LayoutProps {
	children: React.ReactNode
	staticHeader?: boolean
}

export const Layout: FC<LayoutProps> = (props) => {
	const { children, staticHeader } = props
	return (
		<div className={cn(styles.Layout)}>
			<Header staticPos={staticHeader} />
			<div className={styles.page}>
				{children}
			</div>
			<Footer />
		</div>
	);
};