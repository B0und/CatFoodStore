import { Link } from 'react-router-dom';
import sadFace from '../assets/ic-notfound.svg?url';
import { Button } from './ui/button';

export const NoProducts = () => {
	return (
		<div className='m-auto flex w-full flex-col items-center justify-center gap-5'>
			<img className='h-20 w-20' src={sadFace} alt='' />
			<p>Простите, по вашему запросу товаров не надено.</p>
			<Button variant='secondary' asChild>
				<Link to='/'>На главную</Link>
			</Button>
		</div>
	);
};
