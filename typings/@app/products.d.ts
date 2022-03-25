declare interface ProductLookup {
	slug: string;
	imgSrc: string;
	text: string;
	price: number;
	category: string;
	score: number;
}

declare interface Product extends ProductLookup {
	description: string;
}

declare interface FilterOption {
	value: string;
	text: string;
}

declare interface SortOption {
	value: string;
	text: string;
}
