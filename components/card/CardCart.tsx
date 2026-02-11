"use client";
import { ICart, useCart } from "@/hooks/useCart";

export function CardCart({ cart }: { cart: ICart }) {
	const { increment, decrement } = useCart();
	const product = cart.info;
	return (
		<div className="border border-border rounded-lg overflow-hidden">
			<img src={product.image} alt="" className="w-full aspect-square max-h-32" />
			<p className="w-full truncate text-xs sm:text-sm px-2 py-1 sm:px-4 sm:py-2 bg-gray-200 border-b border-border">{product.title}</p>
			<p className="flex items-center justify-center gap-1 text-sm p-1 border-b border-border">
				<span className="font-bold">{cart.count}</span>
				<span>*</span>
				<span className="font-bold">{product.price}</span>
				<span>=</span>
				<span className="font-bold">{cart.count * product.price} $</span>
			</p>
			<div className="flex w-full overflow-hidden">
				<button
					className="flex items-center justify-center font-bold w-full bg-accent text-white text-lg"
					onClick={() => {
						increment(cart.id);
					}}
				>
					+
				</button>
				<button
					className="flex items-center justify-center font-bold w-full bg-action text-white text-lg"
					onClick={() => {
						decrement(cart.id);
					}}
				>
					-
				</button>
			</div>
		</div>
	);
}
