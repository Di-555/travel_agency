export interface Day {
	number: number,
	desc: string,
	town: string,
	img: string,
}

export interface People {
	name: string,
	job: string,
	img: string,
}

export interface Tour {
	_id?: string;
	duration: number;
	title: string;
	days: Day[];
	price: number;
	busySeats: number;
	allSeats: number;
	team: People[];
	mainImg: string;
	startDate: Date | null
	endDate: Date | null
}