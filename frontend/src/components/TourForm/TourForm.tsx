import cn from 'classnames';
import { ButtonHTMLAttributes, FC, forwardRef, useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { tourApi } from '../../services/toursApi';
import { Button, ThemeButton } from '../../shared/ui/Button/Button';
import { Input } from '../../shared/ui/Input/Input';
import { Day, People } from '../../types/Tour';
import styles from './TourForm.module.scss'
import { ReactComponent as CalendarIcon } from '../../shared/assets/icons/Calendar.svg'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface TourFormProps { }

export const TourForm: FC<TourFormProps> = (props) => {
	const router = useNavigate()

	const queryClient = useQueryClient()

	const mutation = useMutation(tourApi.createTour, {
		onSuccess: (res) => {
			//@ts-ignore
			queryClient.invalidateQueries('tours')
			res._id && router(res._id)
		},
		onError: () => alert('Что-то пошло не так')
	})

	const createTourHandler = () => {
		mutation.mutate({
			title: title,
			busySeats: 0,
			allSeats: seats,
			days,
			price,
			duration,
			team,
			mainImg,
			endDate,
			startDate
		})
	}

	const [title, setTitle] = useState('')
	const [duration, setDuration] = useState(1)
	const [price, setPrice] = useState(1)
	const [seats, setSeats] = useState(1)

	const [memberName, setMemberName] = useState('')
	const [memberJob, setMemberJob] = useState('')
	const [memberImg, setMemberImg] = useState('')

	const [team, setTeam] = useState<People[]>([])

	const [dayDesc, setDayDesc] = useState('')
	const [dayNum, setDayNum] = useState(1)
	const [dayTown, setDayTown] = useState('')
	const [dayImg, setDayImg] = useState('')
	const [days, setDays] = useState<Day[]>([])

	const [mainImg, setMainImg] = useState('')

	const addMember = () => {
		setTeam([...team, { img: memberImg, job: memberJob, name: memberName }])
		setMemberName('')
		setMemberJob('')
		setMemberImg('')
	}

	const addDay = () => {
		setDays([...days, { desc: dayDesc, img: dayImg, number: dayNum, town: dayTown }])
		setDayDesc('')
		setDayNum(prev => Number(prev) + 1)
		setDayTown('')
		setDayImg('')
	}

	const [startDate, setStartDate] = useState<Date | null>(new Date());
	const [endDate, setEndDate] = useState<Date | null>(null);

	const onChange = (dates: [Date, Date | null]) => {
		const [start, end] = dates;
		setStartDate(start);
		setEndDate(end);
	};

	return (
		<div className={cn(styles.TourForm)}>
			<div className={styles.inner}>
				<p className={styles.title}>Создание тура</p>
				<Input placeholder='Название тура' value={title} onChange={setTitle} />
				<Input placeholder='Длительность в днях' type={'number'} value={duration} onChange={setDuration} />
				<DatePicker
					dateFormat="dd.MM"
					customInput={<DateInput />}
					onChange={onChange}
					startDate={startDate}
					endDate={endDate}
					selectsStart
					selectsRange
				/>
				<Input placeholder='Заставку' value={mainImg} onChange={setMainImg} />
				<Input placeholder='Цена' type={'number'} value={price} onChange={setPrice} />
				<Input placeholder='Всего мест' type={'number'} value={seats} onChange={setSeats} />

				<p className={styles.suptitle}>Добавление дней</p>
				<Input placeholder='Номер' type={'number'} value={dayNum} onChange={setDayNum} />
				<Input placeholder='Город' value={dayTown} onChange={setDayTown} />
				<Input placeholder='Фото' value={dayImg} onChange={setDayImg} />
				<textarea
					className={styles.desc}
					placeholder='Описание'
					value={dayDesc}
					onChange={e => setDayDesc(e.currentTarget.value)}
				/>
				<Button onClick={addDay} theme={ThemeButton.INVERTED}>Добавить день</Button>

				<p className={styles.suptitle}>Добавление членов команды</p>
				<Input placeholder='Имя' value={memberName} onChange={setMemberName} />
				<Input placeholder='Должность' value={memberJob} onChange={setMemberJob} />
				<Input placeholder='Фото' value={memberImg} onChange={setMemberImg} />
				<Button onClick={addMember} theme={ThemeButton.INVERTED}>Добавить в команду</Button>


				{team.length > 0 &&
					<>
						<p className={styles.suptitle}>Команда на тур:</p>
						{team.map((i) => (
							<>
								<p>{i.name} - {i.job}</p>
								{i.img && <img className={styles.img} src={i.img} alt={i.name} />}
							</>
						))}
					</>
				}

				{days.length > 0 &&
					<>
						<p className={styles.suptitle}>Указанные дни:</p>
						{days.map((i) => (
							<>
								<p>День {i.number} {i.town}</p>
								<p>{i.desc}</p>
								{i.img && <img className={styles.img} src={i.img} alt={i.town} />}
							</>
						))}
					</>
				}

				<Button onClick={createTourHandler} theme={ThemeButton.INVERTED}>
					Создать тур
				</Button>
			</div>
		</div>
	);
};


type Ref = HTMLButtonElement;
type HtmlButton = ButtonHTMLAttributes<HTMLButtonElement>

const DateInput = forwardRef<Ref, HtmlButton>(({ value, onClick }, ref) => (
	<button className={styles.date} onClick={onClick} ref={ref}>
		<span className={styles.header}>Дата</span>
		<span className={styles.main}>
			{value}
			<CalendarIcon />
		</span>
	</button>
));