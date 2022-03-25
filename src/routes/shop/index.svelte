<script context="module" lang="ts">
	export function preload(/* { params, query } */): void {
		return this.fetch(`shop.json`)
			.then((r: Body) => r.json())
			.then((products: ProductLookup[]) => {
				return { products };
			});
	}
</script>

<script lang="ts">
	import HeroTitle from "../../components/HeroTitle.svelte";
	import Button from "../../components/Button.svelte";
	import List from "../../components/List.svelte";
	import ImagesWithTitleLooking from "../../components/ImagesWithTitleLooking.svelte";
	import FilterShop from "../../components/FilterShop.svelte";
	import { Category } from "../../types/Category";

	export let products: ProductLookup[];

	const filterOptions: FilterOption[] = [
		{ value: "", text: "All categories" },
		{ value: Category.BRACELETS, text: "Bracelets" },
		{ value: Category.EARRINGS, text: "Earrings" },
		{ value: Category.HANDBAGS, text: "Handbags" },
		{ value: Category.NECKLACES, text: "Necklaces" },
	];
	const sortOptions: SortOption[] = [
		{ value: "MORE", text: "More Relevant" },
		{ value: "LOWER", text: "Lower price" },
		{ value: "HIGHER", text: "Higher price" },
		{ value: "NAME", text: "Name" },
	];

	let selectedFilterOption = filterOptions[0];
	let selectedSortOption = sortOptions[0];

	$: filteredProducts = selectedFilterOption?.value
		? products.filter(
				(product) => product.category === selectedFilterOption?.value,
		  )
		: products;
	$: sorteredProducts = filteredProducts.sort((a, b) => {
		if (selectedSortOption?.value === "NAME") {
			return a.text.localeCompare(b.text);
		} else if (selectedSortOption?.value === "LOWER") {
			return a.price - b.price;
		} else if (selectedSortOption?.value === "HIGHER") {
			return b.price - a.price;
		} else if (selectedSortOption?.value === "MORE") {
			return a.score - b.score;
		}
	});

	$: productsLength = filteredProducts.length;
</script>

<style>
	.positionButton {
		text-align: center;
		margin-top: 90px;
	}
</style>

<svelte:head>
	<title>Shop</title>
</svelte:head>
<!--
<Filter products="{products}" bind:filteredProducts />
 -->
<HeroTitle
	desktopImgSrc="/images/hero/shop_desktop.png"
	mobileImgSrc="/images/hero/shop_mobile.png"
	title="Boujee Buys"
/>

<!-- svelte-ignore a11y-label-has-associated-control -->

<FilterShop
	filterOptions="{filterOptions}"
	bind:selectedFilterOption
	sortOptions="{sortOptions}"
	bind:selectedSortOption
	productsLength="{productsLength}"
/>

<!-- <FilterShop bind:value="{options}" /> -->

{#if productsLength}
	<List products="{sorteredProducts}" />
{:else}
	<p>There are no products for the selected filter</p>
{/if}

<div class="positionButton">
	<Button type="golden">LOAD MORE</Button>
</div>

<ImagesWithTitleLooking />
