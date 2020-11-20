<script lang="ts">
	import Select from "./Select.svelte";
	export let filterOptions: FilterOption[];
	export let selectedFilterOption: FilterOption;
	export let sortOptions: SortOption[];
	export let selectedSortOption: SortOption;
	export let productsLength = 1;
</script>

<style>
	section {
		margin-top: 30px;
		height: 89px;
		border-top: 1px solid #bda37b;
		border-bottom: 1px solid #bda37b;
		position: relative;
		box-sizing: border-box;
	}
	.container {
		display: flex;
		height: 89px;
		box-sizing: border-box;
	}
	p {
		font-family: Prompt;
		font-style: italic;
		font-size: 22px;
		line-height: 33px;
		letter-spacing: 0.02em;
		margin: 0;
		color: #000000;
		position: absolute;
	}
	@media (max-width: 767.88px) {
		.container {
			margin: 0 20px;
			padding: 16px 0;
		}
		p {
			top: 110%;
		}
		.filterPosition {
			margin-right: 4%;
		}
	}
	@media (min-width: 768px) {
		.container {
			width: 89%;
			margin: auto;
			max-width: 1620px;
			padding: 25px 0 30px;
		}
		p {
			right: 5%;
		}
		.filterPosition {
			margin-right: 5%;
		}
	}
	@media (max-width: 360px) {
		.container {
			display: block;
		}
	}
</style>

<section>
	<div class="container">
		<div class="filterPosition">
			<Select
				text="FILTER BY"
				options="{filterOptions}"
				bind:value="{selectedFilterOption}"
			/>
		</div>
		<Select
			text="SORT BY"
			options="{sortOptions}"
			bind:value="{selectedSortOption}"
		/>
		<p>{productsLength} {productsLength === 1 ? 'product' : 'products'}</p>
	</div>
</section>
