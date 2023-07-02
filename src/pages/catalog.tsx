import catFace from '../assets/cat-face.svg?url';
import { ChevronLeft, Menu } from 'lucide-react';
import { Button } from '../components/ui/button';
import { SearchInput } from '../components/search-input';
import { Link } from 'react-router-dom';
import { ComboboxDemo } from '../components/combobox';

export const CatalogPage = () => {
	return (
		<div>
			<header className='flex items-center justify-center gap-8 bg-main px-4 py-3'>
				<img className='h-10 w-10  ' src={catFace} alt='cute cat face' />
				<SearchInput placeholder='Поиск' />
				<Button variant='ghost' size='icon'>
					<Menu />
					<span className='sr-only'>Меню</span>
				</Button>
			</header>

			<section className='px-4 pt-3'>
				<Button className='-mb-4 -ml-4' variant='link' asChild>
					<Link className='text-sm font-normal text-secondary_text' to='/'>
						<ChevronLeft className='h-[14px] w-[14px]' /> Главная
					</Link>
				</Button>
				<h2 className='text-3xl font-extrabold '>Каталог</h2>
				<ComboboxDemo />
			</section>
		</div>
	);
};
