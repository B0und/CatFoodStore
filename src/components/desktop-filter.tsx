import { filterItems } from './mobile-filter-select';
import { Button } from './ui/button';

export const DesktopFilter = () => {
	return (
		<div className='hidden w-full gap-4 rounded-02 py-3 text-sm text-secondary_text shadow-elevation04 md:flex'>
			{filterItems.map((filter) => (
				<Button variant='link' key={filter}>
					{filter}
				</Button>
			))}
		</div>
	);
};
