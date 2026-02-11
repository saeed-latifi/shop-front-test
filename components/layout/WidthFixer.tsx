import type { ReactNode } from "react";

export function WidthFixer({ children }: { children: ReactNode }) {
	return (
		<div className="w-full h-max flex flex-col flex-1 p-2 md:p-4 items-center bg-background bg-tile">
			<div className="w-full h-max flex flex-col flex-1 max-w-5xl">{children}</div>
		</div>
	);
}
