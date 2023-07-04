import catFace from '../assets/cat-face.svg?url';
import { ChevronLeft, Menu } from 'lucide-react';
import { Button } from '../components/ui/button';
import { SearchInput } from '../components/search-input';
import { Link, useSearchParams } from 'react-router-dom';
import { MobileFilterSelect } from '../components/mobile-filter-select';
import { MOCK_DATA } from '../mock';
import { ProductCard } from '../components/product-card';
import { NoProducts } from '../components/no-products';

export const CatalogPage = () => {
	const [searchParams] = useSearchParams();
	const searchText = searchParams.get('search');

	const filteredProducts = MOCK_DATA.filter((product) =>
		product.name.toLowerCase().includes(searchText?.toLowerCase() ?? '')
	);

	const isNothingFound = filteredProducts.length === 0;

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
				<h2 className='mb-5 text-3xl font-extrabold'>Каталог</h2>
				{searchText && (
					<p className='pb-5 text-2xl'>
						По запросу <strong className='font-extrabold'>{searchText}</strong> найдено {filteredProducts.length}{' '}
						товаров
					</p>
				)}
				{!isNothingFound && <MobileFilterSelect />}
			</section>

			<section className='grid grid-cols-product-sm gap-x-[6px] gap-y-5 px-4 pt-10'>
				{filteredProducts.map((product) => (
					<ProductCard key={product.picture} product={product} />
				))}
			</section>
			{isNothingFound && <NoProducts />}
		</div>
	);
};
