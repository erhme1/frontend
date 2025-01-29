export type FoodCategory = {
	_id: string;
	categoryName: string;
	count: number;
	foods: {
		_id: string;
		foodName: string;
		price: number;
		image: string;
		ingredients: string;
		createdAt?: string;
		updatedAt?: string;
	}[];
};
export type Food = {
	foodName: string;
	price: number;
	ingredients: string;
	image: string;
	_id: string;
};
