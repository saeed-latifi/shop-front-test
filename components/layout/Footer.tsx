"use client";

import toast from "react-hot-toast";
import { IconShop } from "../icons/IconShop";
import { IconSetting } from "../icons/IconSetting";
import Link from "next/link";

export function Footer() {
	return (
		<footer className="sticky bottom-0 w-full px-2 md:px-4 pb-3 pt-1 flex items-center justify-center z-20 bg-background text-xs bg-tile ">
			<div className="w-full flex items-center justify-evenly flex-1 max-w-5xl gap-1 bg-white px-4 py-1 rounded-full border border-accent">
				<Link href={"/"} className="rounded-full p-1">
					<IconShop className="w-8 h-8" />
				</Link>
				<Link href={"/dashboard"} className="rounded-full p-1">
					<IconSetting className="w-8 h-8" />
				</Link>
			</div>
		</footer>
	);
}
