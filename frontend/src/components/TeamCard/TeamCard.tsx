import { FC } from 'react';
import styles from './TeamCard.module.scss';

interface TeamCardProps {
	className?: string;
	img: string;
	name: string;
	job: string;
}

export const TeamCard: FC<TeamCardProps> = (props) => {
	const { img, job, name } = props;

	return (
		<div className={styles.TeamCard} >
			<img className={styles.img} src={img} alt={name} />
			<p className={styles.name}>{name}</p>
			<p className={styles.job}>{job}</p>
		</div>
	);
};