"use client";

import { ButtonPrimary } from "@/components/ButtonPrimary";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { WidthFixer } from "@/components/layout/WidthFixer";
import { ProductsList } from "@/components/ProductsList";
import { useRouter } from "next/navigation";

export default function DashboardProduct() {
	const router = useRouter();

	return (
		<>
			<Header />
			<WidthFixer>
				<div className="flex flex-col w-full gap-4">
					<ButtonPrimary onClick={() => router.push("/dashboard/products/create")}>create new product</ButtonPrimary>
					<ProductsList isDashboard />
				</div>
			</WidthFixer>
			<Footer />
		</>
	);
}
