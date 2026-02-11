"use client";

import { ButtonPrimary } from "@/components/ButtonPrimary";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { WidthFixer } from "@/components/layout/WidthFixer";
import { useRouter } from "next/navigation";

export default function Dashboard() {
	const router = useRouter();

	return (
		<>
			<Header />
			<WidthFixer>
				<div className="flex flex-col w-full gap-4">
					<ButtonPrimary onClick={() => router.push("/dashboard/products")}>manage products</ButtonPrimary>
				</div>
			</WidthFixer>
			<Footer />
		</>
	);
}
