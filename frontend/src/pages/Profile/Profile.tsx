import cn from 'classnames';
import { FC, useContext } from 'react';
import { useQuery } from 'react-query';
import { Layout } from '../../components/Layout/Layout';
import { OrderCard } from '../../components/OrderCard/OrderCard';
import { UserContext } from '../../context/UserContext';
import { orderApi } from '../../services/orderApi';
import { SectionTitle } from '../../shared/ui/SectionTitle/SectionTitle';
import styles from './Profile.module.scss'

interface ProfileProps { className?: string }

export const Profile: FC<ProfileProps> = (props) => {
	const { className } = props;

	const { user } = useContext(UserContext)

	const { data: orders } = useQuery('orders', () => {
		return user?.role === 'Админ'
			? orderApi.getOrders()
			: orderApi.getOrdersByUserId(user?._id)
	})

	return (
		<Layout>
			<div className={cn(styles.Profile)}>
				<SectionTitle text={user?.role === 'Админ' ? 'Заявки' : 'Ваши заявки'} />
				<div className={styles.inner}>
					{orders?.map((i) => (
						<OrderCard order={i} />
					))}
				</div>
			</div>
		</Layout>

	);
};