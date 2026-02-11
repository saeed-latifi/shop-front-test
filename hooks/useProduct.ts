import { http } from "@/components/http";
import useSWRImmutable from "swr/immutable";

export interface IProduct {
	id: number;
	title: string;
	price: number;
	description: string;
	category: string;
	image: string;
}

export function useProductsList() {
	return useSWRImmutable("productsList", async () => {
		const { data } = await http.get<IProduct[]>("/products");
		return data;
	});
}
