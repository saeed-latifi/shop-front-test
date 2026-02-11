import useSWRImmutable from "swr/immutable";
import { IProduct } from "./useProduct";
import toast from "react-hot-toast";

export interface ICart {
	id: number;
	count: number;
	info: IProduct;
}

export function useCart() {
	const { data, mutate, isLoading } = useSWRImmutable("cart", () => [] as ICart[]);

	function onAdd(product: IProduct) {
		const clone = structuredClone(data ?? []);
		const exist = clone.find((i) => i.id === product.id);

		if (exist) return onChangeCount({ count: exist.count + 1, id: exist.id });

		clone.push({ info: product, count: 1, id: product.id });

		mutate(clone, { revalidate: false });
	}

	function onChangeCount({ id, count }: { count: number; id: number }) {
		const clone = structuredClone(data ?? []);
		const exist = clone.find((i) => i.id === id);

		if (!exist) return toast.error("this product doesn't exist in cart");

		if (count <= 0) return onRemove(id);

		exist.count = count;

		mutate(clone, { revalidate: false });
	}

	function onRemove(id: number) {
		const clone = structuredClone(data ?? []);
		const filtered = clone.filter((i) => i.id !== id);

		mutate(filtered, { revalidate: false });
	}

	function clearCart() {
		mutate([], { revalidate: false });
	}

	function getTotalItems() {
		return data?.reduce((sum, item) => sum + item.count, 0) ?? 0;
	}

	function increment(id: number) {
		onChangeCount({ id, count: (data?.find((i) => i.id === id)?.count ?? 0) + 1 });
	}

	function decrement(id: number) {
		const current = data?.find((i) => i.id === id)?.count ?? 0;
		onChangeCount({ id, count: current - 1 });
	}

	function getTotalPrice() {
		return (
			data?.reduce((sum, item) => {
				const price = item.info.price;
				return sum + price * item.count;
			}, 0) ?? 0
		);
	}

	return { data, isLoading, onAdd, onChangeCount, onRemove, clearCart, getTotalItems, increment, decrement, getTotalPrice };
}
