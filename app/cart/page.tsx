"use client";

import { LoadingSpinner } from "@/components/animations/LoadingSpinner";
import { ButtonPrimary } from "@/components/ButtonPrimary";
import { CardCart } from "@/components/card/CardCart";
import { CardCenter } from "@/components/card/CardCenter";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { WidthFixer } from "@/components/layout/WidthFixer";
import { useCart } from "@/hooks/useCart";
import toast from "react-hot-toast";

export default function Cart() {
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
	const { data: cart, isLoading, getTotalPrice } = useCart();

	if (isLoading)
		return (
			<CardCenter>
				<LoadingSpinner style={{ width: "4rem", height: "4rem" }} />
			</CardCenter>
		);

	if (!cart?.length)
		return (
			<CardCenter>
				<p className="border-action border text-action font-bold p-8 rounded-lg bg-white">No any products in your cart !</p>
			</CardCenter>
		);

	return (
		<div className="flex flex-col w-full gap-4 overflow-hidden">
			<p className="font-bold">
				<span>total : </span>
				<span>{getTotalPrice()} $</span>
			</p>
			<ButtonPrimary onClick={() => toast.error("It is just for show ...")}>Go To Pay</ButtonPrimary>

			{cart.map((cart) => (
				<CardCart key={cart.id} cart={cart} />
			))}

			<ButtonPrimary onClick={() => toast.error("It is just for show ...")}>Go To Pay</ButtonPrimary>
		</div>
	);
}
