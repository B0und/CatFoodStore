declare module '*.svg' {
	import React = require('react');
	export const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
	const src: string;
	export default src;
}
declare module '*.png' {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const content: any;
	export default content;
}
declare module '*.jpg' {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const content: any;
	export default content;
}
declare module '*.json' {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const content: any;
	export default content;
}

declare module '*.module.css' {
	const classes: { [key: string]: string };
	export default classes;
}

declare module '*.module.scss' {
	const classes: { [key: string]: string };
	export default classes;
}

declare module '*.module.sass' {
	const classes: { [key: string]: string };
	export default classes;
}
