<script lang="ts">
	export let data;
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

{#if data}
	<h2>{JSON.stringify(data)}</h2>
{/if}
