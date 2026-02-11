"use client";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { WidthFixer } from "@/components/layout/WidthFixer";
import { ProductsList } from "@/components/ProductsList";

export default function Home() {
	return (
		<>
			<Header />
			<WidthFixer>
				<ProductsList />
			</WidthFixer>
			<Footer />
		</>
	);
}
