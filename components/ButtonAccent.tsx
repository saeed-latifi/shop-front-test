import { ButtonHTMLAttributes } from "react";

export function ButtonAccent({ children, ...others }: ButtonHTMLAttributes<HTMLButtonElement>) {
	return (
		<button className="flex items-center justify-center px-4 py-2 rounded-lg bg-action text-white font-bold" {...others}>
			{children}
		</button>
	);
}
