import { Tour } from "./Tour";
import { User } from "./User";

export interface Order {
	_id?: string;
	virtualTour?: Tour[];
	virtualUser?: User[];
	countPeoples?: number;
	price?: number;
	status?: 'Подтвержден' | 'На рассмотрении';
	fio?: string;
	mail?: string;
}