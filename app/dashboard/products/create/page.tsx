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
import { useProductCreate } from "@/hooks/useProduct";

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
	const { data: product, isLoading, onChange, onCreate } = useProductCreate();

	if (isLoading)
		return (
			<CardCenter>
				<LoadingSpinner style={{ width: "4rem", height: "4rem" }} />
			</CardCenter>
		);

	return (
		<form
			className="flex flex-col w-full gap-4 overflow-hidden"
			onSubmit={(e) => {
				e.preventDefault();
				if (product) onCreate(product);
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
			<ButtonPrimary>create new product</ButtonPrimary>

			<p className="text-gray-400 pt-20">image must upload separately and assign url to this API. this image picker is just for show</p>
			<ImageUploader />
		</form>
	);
}
