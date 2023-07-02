import React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../lib/utils';

const buttonVariants = cva(
	'inline-flex items-center justify-center gap-2 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-main_darker focus-visible:ring-offset-2 disabled:pointer-events-none font-bold',
	{
		variants: {
			variant: {
				default: 'bg-main text-primary_text  hover:bg-main_darker disabled:bg-outline_bg disabled:text-white',
				secondary:
					'bg-white text-primary_text border-[1px] border-outline_bg disabled:text-outline_bg hover:bg-main hover:border-main',
				ghost: 'hover:ring-2 hover:ring-primary_text',
				link: 'underline-offset-4 hover:underline focus-visible:underline focus-visible:ring-0 focus-visible:ring-offset-0		',
			},
			size: {
				default: 'h-8 px-4 py-[9px] rounded-[55px]',
				large: 'h-10 py-[10px] px-[18px] rounded-[60px]',
				icon: 'rounded-full p-2',
			},
		},
		defaultVariants: {
			variant: 'default',
			size: 'default',
		},
	}
);

export interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement>,
		VariantProps<typeof buttonVariants> {
	asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	({ className, variant, size, asChild = false, ...props }, ref) => {
		const Comp = asChild ? Slot : 'button';
		return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
	}
);
Button.displayName = 'Button';

export { Button, buttonVariants };
