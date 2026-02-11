import type { CSSProperties, ReactNode } from "react";

export function CardCenter({ style, children }: { children?: ReactNode; style?: CSSProperties }) {
	return (
		<div className={"flex flex-col flex-1 items-center justify-center w-full h-full gap-4 p-4 rounded-lg"} style={style}>
			{children}
		</div>
	);
}
