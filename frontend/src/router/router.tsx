import { Main } from "../pages/Main/Main";

import {
	createBrowserRouter,
} from "react-router-dom";
import { Tours } from "../pages/Tours/Tours";
import { About } from "../pages/About/About";
import { TourPage } from "../pages/TourPage/TourPage";
import { Profile } from "../pages/Profile/Profile";

export const router = createBrowserRouter([
	{
		path: '/',
		element: <Main />,
	},
	{
		path: 'tours/:id',
		element: <TourPage />
	},
	{
		path: '/tours',
		element: <Tours />,
	},
	{
		path: '/about',
		element: <About />,
	}
	,
	{
		path: '/profile',
		element: <Profile />,
	}
]);

