import { type InputHTMLAttributes, type ReactElement, useId } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	label?: string;
	icon?: ReactElement;
}

export function Input({ label, className, id: propId, icon, ...props }: InputProps) {
	const rawId = useId();
	const id = propId || rawId;

	return (
		<div className="flex w-full flex-col gap-2">
			{label && (
				<label className="text-base font-bold px-2" htmlFor={id}>
					{label}
				</label>
			)}
			<label className={"w-full border bg-re px-4 py-2 rounded-lg flex items-center gap-2 focus-within:border-base border-border"}>
				{icon && <>{icon}</>}

				<input {...props} value={props.value ?? ""} className="min-w-0 flex-1 text-text" id={id} />
			</label>
		</div>
	);
}
