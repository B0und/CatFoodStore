import { SelectContent, SelectItem, SelectRoot, SelectTrigger, SelectValue } from './ui/select';

export const filterItems = [
	'Популярные',
	'Новинки',
	'Сначала дешёвые',
	'Сначала дорогие',
	'По рейтингу',
	'По скидке',
] as const;

export const MobileFilterSelect = () => {
	return (
		<SelectRoot defaultValue={filterItems[0]}>
			<SelectTrigger className='md:hidden'>
				<SelectValue />
			</SelectTrigger>
			<SelectContent>
				{filterItems.map((filter) => (
					<SelectItem key={filter} value={filter}>
						{filter}
					</SelectItem>
				))}
			</SelectContent>
		</SelectRoot>
	);
};
