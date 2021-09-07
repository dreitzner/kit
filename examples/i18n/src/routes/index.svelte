<script type="typescript">
    import {i18n, page} from '$app/stores';
</script>

<h1>Welcome to SvelteKit</h1>
<h2>current lang: {$page.lang}</h2>
<p>{JSON.stringify($i18n, null, 2)}</p>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
