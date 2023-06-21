import cn from 'classnames';
import { FC, useContext, useState } from 'react';
import { Button, ThemeButton } from '../../shared/ui/Button/Button';
import { Input } from '../../shared/ui/Input/Input';
import styles from './TravelWithUs.module.scss'
import Travel from '../../shared/assets/TravelWithUs.png'
import { Tour } from '../../types/Tour';
import { useMutation, useQueryClient } from 'react-query';
import { orderApi } from '../../services/orderApi'
import { UserContext } from '../../context/UserContext';

interface TravelWithUsProps {
	className?: string
	tour?: Tour
}

export const TravelWithUs: FC<TravelWithUsProps> = (props) => {
	const { className, tour } = props;

	const [fio, setFio] = useState('')
	const [mail, setMail] = useState('')
	const [peoples, setPeoples] = useState(1)

	const { user } = useContext(UserContext)

	const queryClient = useQueryClient()

	const mutation = useMutation(orderApi.createOrder, {
		onSuccess: (res) => {
			//@ts-ignore
			queryClient.invalidateQueries('orders')
			alert('Успешно')
		},
		onError: () => alert('Что-то пошло не так')
	})

	const createOrderHandler = () => {
		if (user?._id && tour) {
			mutation.mutate({
				seats: Number(peoples),
				price: peoples * tour.price,
				tourId: tour._id,
				userId: user._id,
				fio,
				mail
			})
		} else {
			alert('Сначала авторизуйтесь')
		}

	}

	return (
		<div className={cn(styles.TravelWithUs)}>
			<img src={Travel} alt="Путешествуй с нами" />
			{tour && <div className={styles.content}>
				<h2 className={styles.title}>Путешествуй с нами</h2>
				<Input placeholder={'фио'} value={fio} onChange={setFio} />
				<Input placeholder={'почта'} value={mail} onChange={setMail} />
				<Input placeholder={'количество человек'} type='number' value={peoples} onChange={setPeoples} />

				{Number(peoples) > tour.allSeats - tour.busySeats && <p style={{ color: 'red' }}>Нет столько билетов</p>}

				<Button
					disabled={tour.busySeats === tour.allSeats || Number(peoples) > tour.allSeats - tour.busySeats}
					className={styles.button}
					onClick={createOrderHandler}
					theme={ThemeButton.INVERTED}
				>
					{tour.busySeats !== tour.allSeats || Number(peoples) > tour.allSeats - tour.busySeats
						? 'Забронировать'
						: 'К сожалению мест нет'
					}
				</Button>
			</div>}
		</div>
	);
};