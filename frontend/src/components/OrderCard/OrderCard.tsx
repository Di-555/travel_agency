import cn from 'classnames';
import { FC, useContext } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { UserContext } from '../../context/UserContext';
import { orderApi } from '../../services/orderApi';
import { Button, ThemeButton } from '../../shared/ui/Button/Button';
import { toPriceRU } from '../../shared/utils/toPriceRu';
import { Order } from '../../types/Order';
import { TourCard } from '../TourCard/TourCard';
import styles from './OrderCard.module.scss'
import { ReactComponent as DeleteIcon } from '../../shared/assets/icons/delete.svg'

interface OrderCardProps {
	className?: string;
	order: Order
}

export const OrderCard: FC<OrderCardProps> = (props) => {
	const { className, order } = props;

	const { user } = useContext(UserContext)

	const queryClient = useQueryClient()

	const mutationCreate = useMutation(orderApi.confirmOrder, {
		onSuccess: (res) => {
			//@ts-ignore
			queryClient.invalidateQueries('orders')
		},
		onError: () => alert('Что-то пошло не так')
	})

	const mutationDelete = useMutation(orderApi.deleteOrder, {
		onSuccess: (res) => {
			//@ts-ignore
			queryClient.invalidateQueries('orders')
		},
		onError: () => alert('Что-то пошло не так')
	})

	const confirmOrderHandler = () => {
		mutationCreate.mutate(order._id)
	}

	const deleteOrderHandler = () => {
		mutationDelete.mutate(order._id)
	}

	return (
		<div className={cn(styles.OrderCard)}>
			{order.virtualTour && <TourCard className={styles.tour} small item={order.virtualTour[0]} />}
			<div className={styles.info}>
				<table>
					<tr>
						<td>Заявка</td>
						<td>№ {order._id}</td>
					</tr>
					<tr>
						<td>Количество человек:</td>
						<td>{order.countPeoples}</td>
					</tr>
					<tr>
						<td>Общая стоимость:</td>
						<td>{toPriceRU(order.price)}</td>
					</tr>
					<tr>
						<td>Статус:</td>
						<td>{order.status}</td>
					</tr>
					{user?.role === 'Админ' &&
						<>
							<tr>
								<td>ФИО:</td>
								<td>{order.fio}</td>
							</tr>
							<tr>
								<td>Почта:</td>
								<td>{order.mail}</td>
							</tr>
						</>
					}
				</table>
				{user?.role === 'Админ' &&
					<button onClick={deleteOrderHandler} className={styles.delete}>
						<DeleteIcon />
					</button>
				}
				{user?.role === 'Админ' && order.status === 'На рассмотрении' &&
					<Button className={styles.confirm} theme={ThemeButton.INVERTED} onClick={confirmOrderHandler}>
						Подтвердить
					</Button>
				}
			</div>
		</div>
	);
};