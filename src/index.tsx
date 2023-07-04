import { createRoot } from 'react-dom/client';

import { StrictMode } from 'react';

import './styles.css';

import { createBrowserRouter, RouterProvider, Link } from 'react-router-dom';
import { CatalogPage } from './pages/catalog';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Link to='/catalog'>Нажмите чтобы перейти на страницу Catalog</Link>,
	},
	{
		path: '/catalog',
		element: <CatalogPage />,
	},
]);

const domNode = document.getElementById('root') as HTMLDivElement;
const root = createRoot(domNode);
root.render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>
);
