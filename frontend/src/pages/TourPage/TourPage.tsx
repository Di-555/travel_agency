import cn from 'classnames';
import { FC, useContext } from 'react';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { useNavigate, useParams } from 'react-router-dom';
import { FAQ } from '../../components/FAQ/FAQ';
import { Layout } from '../../components/Layout/Layout';
import { TourData } from '../../components/TourData/TourData';
import { TourPlan } from '../../components/TourPlan/TourPlan';
import { TourTeam } from '../../components/TourTeam/TourTeam';
import { TravelWithUs } from '../../components/TravelWithUs/TravelWithUs';
import { UserContext } from '../../context/UserContext';
import { orderApi } from '../../services/orderApi';
import { tourApi } from '../../services/toursApi';
import styles from './TourPage.module.scss'
import { Button } from '../../shared/ui/Button/Button';

interface TourPageProps { className?: string }

export const TourPage: FC<TourPageProps> = (props) => {
	const { className } = props;
	const router = useNavigate()

	const params = useParams<{ id: string }>()
	const { data } = useQuery('tour', () => tourApi.getTour(params.id))
	
	const { user } = useContext(UserContext)

	const queryClient = useQueryClient()

	const mutationDelete = useMutation(tourApi.deleteTour, {
		onSuccess: (res) => {
			//@ts-ignore
			queryClient.invalidateQueries('tours')
			queryClient.invalidateQueries('tour')
			router('/tours')
		},
		onError: () => alert('Что-то пошло не так')
	})

	const deleteHandler = () => {
		mutationDelete.mutate(data?._id)
	}

	return (
		<Layout staticHeader>
			<div className={cn(styles.TourPage)}>
				<div className={styles.intro}>
					<p>{data?.title}</p>
					<img src={data?.mainImg} alt="" />
					<div className={styles.introShadow} />
				</div>
				<div className={styles.container}>
					{user?.role === 'Админ' && <Button className={styles.delete} onClick={deleteHandler}>Удалить тур</Button>}
					<TourData tour={data} className={styles.section} />
					<TourPlan tour={data} className={styles.section} />
					<TourTeam team={data?.team} className={styles.section} />
					<TravelWithUs tour={data} className={styles.section} />
					<FAQ className={styles.section} />
				</div>
			</div>
		</Layout>
	);
};