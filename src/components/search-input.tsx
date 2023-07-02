import React from 'react';
import { cn } from '../lib/utils';
import { Search, X } from 'lucide-react';
import { useSearchParams } from 'react-router-dom';
import { Button } from './ui/button';

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

const SearchInput = React.forwardRef<HTMLInputElement, InputProps>(({ className, type, ...props }, ref) => {
	const [searchParams, setSearchParams] = useSearchParams();
	const searchText = searchParams.get('search');

	return (
		<div className='relative'>
			<input
				type={type}
				className={cn(
					'flex h-12 w-full rounded-3xl border border-outline_bg px-5 py-[14px] pr-14 text-base text-primary_text placeholder:text-secondary_text  focus-visible:border-main focus-visible:outline-none  disabled:cursor-not-allowed',
					className
				)}
				ref={ref}
				value={searchText || ''}
				onChange={(e) => {
					setSearchParams({ search: e.target.value });
				}}
				{...props}
			/>
			{searchText ? (
				<Button
					variant='ghost'
					size='icon'
					onClick={() => {
						setSearchParams({ search: '' });
					}}
					className='absolute right-[12px] top-1/2 -translate-y-1/2 text-secondary_text hover:text-primary_text hover:ring-transparent'>
					<X className='text-current' />
				</Button>
			) : (
				<Search className='pointer-events-none absolute right-[20px] top-1/2 h-6 w-6 -translate-y-1/2 text-secondary_text' />
			)}
		</div>
	);
});

SearchInput.displayName = 'SearchInput';

export { SearchInput };
