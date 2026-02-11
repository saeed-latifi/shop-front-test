"use client";

import { LoadingSpinner } from "@/components/animations/LoadingSpinner";
import { CardCenter } from "@/components/card/CardCenter";
import { CardProduct } from "@/components/card/CardProduct";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { WidthFixer } from "@/components/layout/WidthFixer";
import { useProductsList } from "@/hooks/useProduct";

export default function Home() {
	return (
		<>
			<Header />
			<WidthFixer>
				<Content />
			</WidthFixer>
			<Footer />
		</>
	);
}

function Content() {
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
				<CardProduct key={product.id} product={product} />
			))}
		</div>
	);
}
