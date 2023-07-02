import './styles.css';
import catFace from './assets/cat-face.svg?url';
import { Search, Menu } from 'lucide-react';
import { Button } from './components/button';

export const App = () => {
	return (
		<div>
			<header className=''>
				<img className='h-[100px] w-6 ' src={catFace} alt='cute cat face' />
				<div>
					<input />
					<Search />
				</div>
				<Button variant='ghost' size='icon'>
					<Menu />
				</Button>
			</header>
		</div>
	);
};
