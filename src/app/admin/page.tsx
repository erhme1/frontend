"use client";
import { useState } from "react";
import { CardComp } from "../admin/_components/Card";
import { useAuthFetch } from "../(Hooks)/FetchData";
import { Button } from "@/components/ui/button";
import { FilteredFood } from "./_components/FilteredFood";

type OrderItem = {
	food: string;
	quanity: number;
};

export default function Home() {
	const [foodOrderItems, setOrderitems] = useState<OrderItem[]>([]);

	const { isLoading, data: foods, onPost } = useAuthFetch("food");

	const clickOrder = () => {
		onPost("food-order", { foodOrderItems, totalPrice: 1000 });
	};
	return <div>admin page</div>;
}
