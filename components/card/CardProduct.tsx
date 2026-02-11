import { IProduct } from "@/hooks/useProduct";
import Link from "next/link";
import { IconEdit } from "../icons/IconEdit";
import { IconAddToCart } from "../icons/IconAddToCart";
import { useCart } from "@/hooks/useCart";

export function CardProduct({ product, isDashboard }: { product: IProduct; isDashboard?: boolean }) {
	const { onAdd } = useCart();

	return (
		<Link href={isDashboard ? `/dashboard/products/${product.id}` : `/products/${product.id}`} className="flex flex-col w-full border border-border rounded-lg overflow-hidden">
			<div className="relative w-full aspect-square">
				<img src={product.image} alt="" className="w-full aspect-square" />

				{isDashboard ? (
					<div className="absolute right-1 top-1 flex items-center justify-center border border-action bg-white/70 p-1 rounded-full">
						<IconEdit className=" w-6 h-6 min-w-6 fill-action" />
					</div>
				) : (
					<button
						onClick={(e) => {
							e.preventDefault();
							e.stopPropagation();
							onAdd(product);
						}}
						className="absolute right-1 top-1 flex items-center justify-center border border-action bg-white/70 p-1 rounded-full"
					>
						<IconAddToCart className=" w-6 h-6 min-w-6 fill-action" />
					</button>
				)}
				<p className="absolute left-1 bottom-1 text-xs sm:text-sm  w-fit bg-gray-500/70 text-action p-1 rounded-lg">{product.price} $</p>
			</div>
			<p className="w-full truncate text-xs sm:text-sm px-2 py-1 sm:px-4 sm:py-2 bg-gray-200">{product.title}</p>
		</Link>
	);
}
