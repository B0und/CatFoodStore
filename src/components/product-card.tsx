import { Heart } from 'lucide-react';
import { MOCK_DATA } from '../mock';
import { Button } from './ui/button';
import { cn } from '../lib/utils';

interface ProductCardProps {
	product: (typeof MOCK_DATA)[number];
}

export const ProductCard = ({ product }: ProductCardProps) => {
	const isDiscount = product.discount > 0;
	const price = isDiscount ? Math.floor((product.price * (100 - product.discount)) / 100) : product.price;

	return (
		<div className='relative flex flex-col items-start gap-3'>
			{isDiscount && (
				<span className='absolute left-0 top-0 rounded-03 bg-custom_red px-2 py-[2px] font-extrabold text-white'>{`-${product.discount}%`}</span>
			)}
			<Button variant='ghost' className='absolute right-0 top-0'>
				<Heart />
				<span className='sr-only'>Добавить в избранное</span>
			</Button>
			<img src={product.picture} alt={product.description} className='mb-3 h-[125px] w-[168px] object-contain' />
			<div>
				<p className={cn('text-xs font-semibold ', isDiscount && 'line-through')}>
					{isDiscount ? `${product.price}  ₽` : <span>&nbsp;</span>}
				</p>
				<p
					className={cn('text-xl font-extrabold text-primary_text', isDiscount && 'text-custom_red')}>{`${price} ₽`}</p>
				<p className='text-xs text-secondary_text'>{product.weight}</p>
				<h3 className='line-clamp-2 text-sm font-semibold text-primary_text'>{product.name}</h3>
			</div>
			<Button className='mt-auto'>В корзину</Button>
		</div>
	);
};
