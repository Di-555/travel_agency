import cn from 'classnames';
import { FC } from 'react';
import { Tour } from '../../types/Tour';
import styles from './Filters.module.scss'
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import { toPriceRU } from '../../shared/utils/toPriceRu';
import { Checkbox } from '../../shared/ui/Checkbox/Checkbox';

interface FiltersProps {
	className?: string;
	tours?: Tour[]
	setCurrentCountries: (cts: string[]) => void
	setCurrentPrice: (price: [number, number]) => void
	prices: [number, number];
	countries: string[];
	currentPrice: [number, number];
	currentCountries: string[];
}

export const Filters: FC<FiltersProps> = (props) => {
	const { countries, currentCountries, currentPrice, prices, setCurrentCountries, setCurrentPrice } = props;

	const sliderHandler = (value: number | number[]) => {
		setCurrentPrice(value as [number,number])
	}

	const countryClick = (country: string) => {
		const tmp = new Set([...currentCountries]);

		if (!tmp.has(country)) {
			tmp.add(country);
		} else {
			tmp.delete(country);
		}

		setCurrentCountries([...tmp])
	}

	return (
		<div className={cn(styles.Filters)}>
			<p className={styles.suptitle} >Страна</p>
			<div className={styles.checkboxes}>
				{countries.map((i) => (
					<Checkbox text={i} onChange={() => { countryClick(i) }} checked={currentCountries.includes(i)} />
				))}
			</div>


			<p className={styles.suptitle}>Cтоимость</p>
			<p className={styles.price}>
				<span>{toPriceRU(currentPrice[0])}</span>
				<span>{toPriceRU(currentPrice[1])}</span>
			</p>

			<Slider
				range
				min={prices[0]}
				step={100}
				max={prices[1]}
				value={currentPrice}
				onChange={sliderHandler}
			/>
		</div>
	);
};