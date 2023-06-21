import { FC } from "react";
import { ContactUs } from "../../components/ContactUs/ContactUs";
import { FAQ } from "../../components/FAQ/FAQ";
import { Layout } from "../../components/Layout/Layout";

import { PopularTours } from "../../components/PopularTours/PopularTours";
import { Reviews } from "../../components/Reviews/Reviews";
import { TwoVariants } from "../../components/TwoVariants/TwoVariants";
import { WhyUs } from "../../components/WhyUs/WhyUs";
import { Button } from "../../shared/ui/Button/Button";
import styles from './Main.module.scss';
import { useNavigate } from "react-router-dom";

export const Main: FC = () => {
	const router = useNavigate()

	return (
		<Layout>
			<div className={styles.intro}>
				<div className={styles.introInner}>
					<p className={styles.introText}>Создаем воспоминания, которые <br /> останутся на всю жизнь.</p>
				</div>
			</div>
			<div className={styles.container}>
				<PopularTours className={styles.section} />
				<WhyUs className={styles.section} />
				<TwoVariants className={styles.section} />
				<Reviews className={styles.section} />
				<FAQ className={styles.section} />
				<ContactUs className={styles.section} />
			</div>
		</Layout>
	);
};