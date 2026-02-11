import { IProduct } from "@/hooks/useProduct";

export function CardProduct({ product }: { product: IProduct }) {
	return (
		<div className="flex flex-col w-full border border-border rounded-lg overflow-hidden">
			<img src={product.image} alt="" className="w-full aspect-square" />
			<p className="w-full truncate text-xs sm:text-sm px-2 py-1 sm:px-4 sm:py-2 bg-gray-200">{product.title}</p>
		</div>
	);
}
