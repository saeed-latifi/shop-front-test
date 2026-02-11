import { type InputHTMLAttributes, type ReactElement, useId } from "react";

interface InputProps extends InputHTMLAttributes<HTMLTextAreaElement> {
	label?: string;
}

export function TextArea({ label, className, id: propId, ...props }: InputProps) {
	const rawId = useId();
	const id = propId || rawId;

	return (
		<div className="flex w-full flex-col gap-2">
			{label && (
				<label className="text-base font-bold px-2" htmlFor={id}>
					{label}
				</label>
			)}
			<label className={"w-full border p-2 rounded-lg flex items-center gap-2 focus-within:border-base border-border"}>
				<textarea
					className="text-gray-900 resize-none overflow-y-auto showScroll w-full"
					value={props.value}
					rows={3}
					style={{ maxHeight: "120px" }} // 5 rows * 24px
					{...props}
				/>
			</label>
		</div>
	);
}
