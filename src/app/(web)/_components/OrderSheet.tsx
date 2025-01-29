import {
	Sheet,
	SheetContent,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";
import { ShoppingBasket } from "lucide-react";
import { useState } from "react";

export const OrderSheet = () => {
	// const [foodOrderItems, setOrderitems] = useState<OrderItem[]>([]);
	const existingOrderString = localStorage.getItem("orderItems");
	const existingOrder = JSON.parse(existingOrderString || "[]");
	return (
		<Sheet>
			<SheetTrigger>
				<ShoppingBasket />
			</SheetTrigger>
			<SheetContent>
				<SheetTitle>Order</SheetTitle>
				<div>
					{existingOrder.map((orderItem: any) => (
						<div key={orderItem?.food?._id}>
							<div>{orderItem?.food?.foodName}</div>
							<div>{orderItem?.quanity}</div>
						</div>
					))}
				</div>
			</SheetContent>
		</Sheet>
	);
};
