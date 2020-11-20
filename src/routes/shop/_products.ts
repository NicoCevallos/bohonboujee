// Ordinarily, you'd generate this data from markdown files in your
// repo, or fetch them from a database of some kind. But in order to
// avoid unnecessary dependencies in the starter template, and in the
// service of obviousness, we're just going to leave it here.

import { Category } from "../../types/Category";

// This file is called `_posts.js` rather than `posts.js`, because
// we don't want to create an `/blog/posts` route — the leading
// underscore tells Sapper not to do that.

const products: Product[] = [
	{
		slug: "1",
		imgSrc: "/images/products/necklaces.png",
		text: "aMinimal Double-Strand Hoop Pendant Necklace",
		price: 34,
		category: Category.NECKLACES,
		description: "asdgh",
		score: 5,
	},
	{
		slug: "2",
		imgSrc: "/images/products/handbag.png",
		text: "Women's Crodia Crossbody Bag",
		price: 32,
		category: Category.HANDBAGS,
		description: "asdgh",
		score: 1,
	},
	{
		slug: "3",
		imgSrc: "/images/products/earrings_1.png",
		text: "Minimal Double-Strand Hoop Pendant Necklace",
		price: 50,
		category: Category.EARRINGS,
		description: "asdgh",
		score: 1,
	},
	{
		slug: "4",
		imgSrc: "/images/products/earrings_2.png",
		text: "Minimal Double-Strand Hoop Pendant Necklace",
		price: 38,
		category: Category.EARRINGS,
		description: "asdgh",
		score: 2,
	},
	{
		slug: "5",
		imgSrc: "/images/products/earrings_3.png",
		text: "Minimal Double-Strand Hoop Pendant Necklace",
		price: 40,
		category: Category.EARRINGS,
		description: "asdgh",
		score: 8,
	},
	{
		slug: "6",
		imgSrc: "/images/products/earrings_4.png",
		text: "Minimal Double-Strand Hoop Pendant Necklace",
		price: 35,
		category: Category.EARRINGS,
		description: "asdgh",
		score: 3,
	},
	{
		slug: "7",
		imgSrc: "/images/products/bracelet_1.png",
		text: "Minimal Double-Strand Hoop Pendant Necklace",
		price: 37,
		category: Category.BRACELETS,
		description: "asdgh",
		score: 10,
	},
	{
		slug: "8",
		imgSrc: "/images/products/bracelet_2.png",
		text: "Minimal Double-Strand Hoop Pendant Necklace",
		price: 35,
		category: Category.BRACELETS,
		description: "asdgh",
		score: 6,
	},
];

export default products;
