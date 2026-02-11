import { http } from "@/components/http";
import toast from "react-hot-toast";
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

export function useProductRecord(id: number) {
	return useSWRImmutable(`productRecord-${id}`, async () => {
		const { data } = await http.get<IProduct>(`/products/${id}`);
		return data;
	});
}

export function useProductCreate() {
	const swrInfo = useSWRImmutable(`productRecord-create`, () => {
		return {} as Partial<IProduct>;
	});

	function onChange(newData: Partial<IProduct>) {
		swrInfo.mutate(
			(u) => {
				if (!u) return undefined;
				const updatedData = { ...u, ...newData };
				return updatedData;
			},
			{ revalidate: false },
		);
	}

	async function onCreate(body: Partial<IProduct>) {
		const { data } = await http.post<IProduct>(`/products`, body);
		console.log(data);
		toast.success("new product create successfully ...");

		swrInfo.mutate((u) => ({}), { revalidate: false });
	}

	return { ...swrInfo, onChange, onCreate };
}

export function useProductUpdate(id: number) {
	const swrInfo = useSWRImmutable(`productRecord-${id}`, async () => {
		const { data } = await http.get<IProduct>(`/products/${id}`);
		return data;
	});

	function onChange(newData: Partial<IProduct>) {
		swrInfo.mutate(
			(u) => {
				if (!u) return undefined;
				const updatedData = { ...u, ...newData };
				return updatedData;
			},
			{ revalidate: false },
		);
	}

	async function onUpdate(body: Partial<IProduct>) {
		const { data } = await http.post<IProduct>(`/products`, body);
		console.log(data);
		toast.success("new product create successfully ...");

		swrInfo.mutate((u) => data, { revalidate: false });
	}

	return { ...swrInfo, onChange, onUpdate };
}
