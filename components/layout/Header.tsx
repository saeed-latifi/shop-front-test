"use client";

import toast from "react-hot-toast";
import { IconAccount } from "../icons/IconAccount";
import { IconCart } from "../icons/IconCart";
import { useCart } from "@/hooks/useCart";
import { useRouter } from "next/navigation";

export function Header() {
	const { getTotalItems } = useCart();
	const itemCounts = getTotalItems();
	const router = useRouter();

	return (
		<header className="sticky top-0 w-full flex items-center justify-center z-50 text-text bg-background bg-tile shadow px-2 md:px-4 py-2">
			<div className="w-full flex items-center justify-between flex-1 max-w-5xl gap-4">
				<button className="rounded-full border border-accent p-1" onClick={() => toast.error("It is just for show, this project doesn't account feature yet!")}>
					<IconAccount className="w-6 h-6 min-w-6" />
				</button>
				<button className="rounded-full border border-accent p-1 relative" onClick={() => router.push("/cart")}>
					<IconCart className="w-6 h-6 min-w-6" />
					{!!itemCounts && <div className="flex items-center justify-center p-1 absolute -bottom-1 -left-1  text-white bg-badge rounded-full text-xs w-5 h-5">{itemCounts}</div>}
				</button>
			</div>
		</header>
	);
}
