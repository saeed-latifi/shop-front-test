"use client";

import { LoadingSpinner } from "@/components/animations/LoadingSpinner";
import { ButtonPrimary } from "@/components/ButtonPrimary";
import { CardCenter } from "@/components/card/CardCenter";
import { Input } from "@/components/form/Input";
import { TextArea } from "@/components/form/TextArea";
import { ImageUploader } from "@/components/ImageUploader";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { WidthFixer } from "@/components/layout/WidthFixer";
import { useProductUpdate } from "@/hooks/useProduct";
import { useParams } from "next/navigation";

export default function ProductEdit() {
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
	const productId = parseInt(params.productId as string, 10);

	const { data: product, isLoading, onChange, onUpdate } = useProductUpdate(productId);

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
		<form
			className="flex flex-col w-full gap-4 overflow-hidden"
			onSubmit={(e) => {
				e.preventDefault();
				if (product) onUpdate(product);
			}}
		>
			<Input label="title" value={product?.title} onChange={(e) => onChange({ title: e.target.value })} />
			<Input label="category" value={product?.category} onChange={(e) => onChange({ category: e.target.value })} />
			<TextArea label="description" value={product?.description} onChange={(e) => onChange({ description: e.target.value })} />
			<Input
				label="price"
				value={product?.price}
				onChange={(e) => {
					if (isNaN(parseInt(e.target.value))) onChange({ price: 0 });
					else onChange({ price: parseInt(e.target.value) });
				}}
			/>
			<ButtonPrimary>update product</ButtonPrimary>

			<p className="text-gray-400 pt-20">image must upload separately and assign url to this API. this image picker is just for show</p>
			<ImageUploader />
		</form>
	);
}
