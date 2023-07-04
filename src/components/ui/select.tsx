import React from 'react';
import * as Select from '@radix-ui/react-select';
import classnames from 'classnames';
import { Check, ChevronsUpDown } from 'lucide-react';
import { cn } from '../../lib/utils';

const SelectContent = React.forwardRef<
	React.ElementRef<typeof Select.Content>,
	React.ComponentPropsWithoutRef<typeof Select.Content>
>(({ className, children, position = 'popper', ...props }, ref) => (
	<Select.Portal>
		<Select.Content
			ref={ref}
			className={cn('w-full overflow-hidden rounded-md bg-white shadow-elevation04', className)}
			position={position}
			sideOffset={5}
			{...props}>
			<Select.Viewport
				className={cn(
					'p-1',
					position === 'popper' &&
						'h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] px-4 py-2'
				)}>
				{children}
			</Select.Viewport>
		</Select.Content>
	</Select.Portal>
));
SelectContent.displayName = Select.Content.displayName;

const SelectTrigger = React.forwardRef<
	React.ElementRef<typeof Select.Trigger>,
	React.ComponentPropsWithoutRef<typeof Select.Trigger>
>(({ className, children, ...props }, ref) => (
	<Select.Trigger
		ref={ref}
		className={cn(
			'relative inline-flex h-[44px] w-full items-center justify-start gap-2 rounded-02 bg-white px-4 text-sm  leading-none text-primary_text shadow-elevation04 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-main focus-visible:ring-offset-4',
			className
		)}
		{...props}>
		<Select.Icon asChild>
			<ChevronsUpDown className='h-5 w-5 text-secondary_text' />
		</Select.Icon>
		{children}
	</Select.Trigger>
));
SelectTrigger.displayName = Select.Trigger.displayName;

const SelectItem = React.forwardRef<
	React.ElementRef<typeof Select.Item>,
	React.ComponentPropsWithoutRef<typeof Select.Item>
>(({ children, className, ...props }, forwardedRef) => {
	return (
		<Select.Item
			className={classnames(
				'relative flex h-[44px] w-full select-none items-center rounded-01 pl-[30px] pr-[35px]  text-sm leading-none text-primary_text data-[disabled]:pointer-events-none  data-[highlighted]:bg-outline_bg/50 data-[highlighted]:outline-none',
				className
			)}
			{...props}
			ref={forwardedRef}>
			<Select.ItemText>{children}</Select.ItemText>
			<Select.ItemIndicator className='absolute left-0 inline-flex w-[25px] items-center justify-center'>
				<Check className='h-4 w-4' />
			</Select.ItemIndicator>
		</Select.Item>
	);
});
SelectItem.displayName = SelectItem.displayName;

const SelectGroup = Select.Group;
const SelectValue = Select.Value;
const SelectRoot = Select.Root;

export { SelectRoot, SelectItem, SelectContent, SelectTrigger, SelectGroup, SelectValue };
