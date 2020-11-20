<script lang="ts">
	export let options = [];
	export let value: any;
	export let text = "";
</script>

<style>
	label {
		font-family: Prompt;
		font-size: 16px;
		line-height: 24px;
		letter-spacing: 0.03em;
		color: #000000;
	}
	select {
		border: none;
		font-size: 22px;
		line-height: 33px;
		appearance: none;

		background-image: url("/images/select.png");
		background-repeat: no-repeat, repeat;
		background-position: right center;
		padding-right: 20px;
	}
	@media (min-width: 768px) {
		select {
			margin-left: 25px;
		}
	}
</style>

<!-- svelte-ignore a11y-label-has-associated-control -->

<label>{text}
	<select bind:value>
		{#each options as option}
			<option value="{option}">{option.text}</option>
		{/each}
	</select>
</label>
