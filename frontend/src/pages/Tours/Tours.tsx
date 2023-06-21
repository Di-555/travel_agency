import { FC, useContext, useEffect, useState } from 'react';
import cn from 'classnames';
import styles from './Tours.module.scss'
import { Layout } from '../../components/Layout/Layout';
import { Modal } from '../../shared/ui/Modal/Modal';
import { TourForm } from '../../components/TourForm/TourForm';
import { Button, ThemeButton } from '../../shared/ui/Button/Button';
import { useQuery } from 'react-query';
import { tourApi } from '../../services/toursApi';
import { TourCard } from '../../components/TourCard/TourCard';
import { SectionTitle } from '../../shared/ui/SectionTitle/SectionTitle';
import { Filters } from '../../components/Filters/Filters';
import { filterTour } from '../../shared/utils/filterTour';
import { UserContext } from '../../context/UserContext';

interface ToursProps { }

export const Tours: FC<ToursProps> = () => {
	const [openTour, setOpenTour] = useState(false)

	const [prices, setPrices] = useState<[number, number]>([0, 0])
	const [countries, setCountries] = useState<string[]>([])

	const [currentPrice, setCurrentPrice] = useState<[number, number]>([0, 0])
	const [currentCountries, setCurrentCountries] = useState<string[]>([])

	const closeHandlerTour = () => {
		setOpenTour(false)
	}

	const { data } = useQuery('tours', tourApi.getTours)
	const { user } = useContext(UserContext)

	useEffect(() => {
		if (data) {
			const tmpPrice: number[] = []
			const tmpCountries: string[] = []

			data.forEach((i) => { tmpPrice.push(i.price); tmpCountries.push(i.title) })

			setCountries([...tmpCountries])
			setCurrentCountries([...tmpCountries])

			setPrices([Math.min(...tmpPrice), Math.max(...tmpPrice)])
			setCurrentPrice([Math.min(...tmpPrice), Math.max(...tmpPrice)])
		}
	}, [data])

	return (
		<Layout staticHeader>
			<>
				<div className={cn(styles.Tours)}>
					<div className={styles.header}>
						<SectionTitle text='Каталог' withoutMargin />
						{user?.role === 'Админ' &&
							<Button
								className={styles.create}
								theme={ThemeButton.INVERTED}
								onClick={() => setOpenTour(true)}
							>
								Создать тур
							</Button>
						}
					</div>

					<Filters
						prices={prices}
						countries={countries}
						currentPrice={currentPrice}
						currentCountries={currentCountries}
						setCurrentCountries={setCurrentCountries}
						setCurrentPrice={setCurrentPrice}
						tours={data}
						className={styles.filters}
					/>

					<div className={styles.inner}>
						{!data
							? <p>Туров пока нет...</p>
							: data.map((tour) => {
								const show = filterTour(tour, currentPrice, currentCountries)
								return show ? <TourCard small item={tour} /> : null
							})}
					</div>
				</div>

				<Modal open={openTour} onClose={closeHandlerTour}>
					<TourForm />
				</Modal>
			</>

		</Layout>
	);
};