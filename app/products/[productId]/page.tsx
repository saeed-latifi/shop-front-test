"use client";

import { LoadingSpinner } from "@/components/animations/LoadingSpinner";
import { ButtonAccent } from "@/components/ButtonAccent";
import { CardCenter } from "@/components/card/CardCenter";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { WidthFixer } from "@/components/layout/WidthFixer";
import { useCart } from "@/hooks/useCart";
import { useProductRecord } from "@/hooks/useProduct";
import { useParams, useRouter } from "next/navigation";

export default function ProductInfo() {
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
	const params = useParams();
	const router = useRouter();

	const productId = parseInt(params.productId as string, 10);

	const { data: product, isLoading } = useProductRecord(productId);

	const { onAdd, isExist } = useCart();

	if (isLoading)
		return (
			<CardCenter>
				<LoadingSpinner style={{ width: "4rem", height: "4rem" }} />
			</CardCenter>
		);

	if (!product)
		return (
			<CardCenter>
				<p className="border-action">invalid product id : {params.productId as string}</p>
			</CardCenter>
		);

	return (
		<div className="flex flex-wrap w-full gap-4 overflow-hidden">
			<div className="relative w-full aspect-square border border-border rounded-lg max-w-80">
				<img src={product.image} alt="" className="w-full aspect-square" />
			</div>
			<div className="flex flex-col gap-2">
				<p className="w-full font-bold">{product.title}</p>
				<p>
					<span className="font-bold">price : </span>
					<span>{product.price} $</span>
				</p>
				<p className="w-full">{product.description}</p>
			</div>

			{isExist(product.id) ? <ButtonAccent onClick={() => router.push("/cart")}>go to cart</ButtonAccent> : <ButtonAccent onClick={() => onAdd(product)}>add to cart</ButtonAccent>}
		</div>
	);
}
