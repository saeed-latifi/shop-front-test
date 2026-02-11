"use client";
import { LoadingSpinner } from "@/components/animations/LoadingSpinner";
import { CardCenter } from "@/components/card/CardCenter";
import { CardProduct } from "@/components/card/CardProduct";
import { useProductsList } from "@/hooks/useProduct";

export function ProductsList({ isDashboard }: { isDashboard?: boolean }) {
	const { data, isLoading } = useProductsList();

	if (isLoading)
		return (
			<CardCenter>
				<LoadingSpinner style={{ width: "4rem", height: "4rem" }} />
			</CardCenter>
		);

	return (
		<div className="grid gap-2 md:gap-4 grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6">
			{data?.map((product) => (
				<CardProduct key={product.id} product={product} isDashboard={isDashboard} />
			))}
		</div>
	);
}
