<script type="typescript">
    import {page} from '$app/stores';
    import LangSwitch from '$lib/LangSwitch.svelte';
</script>

<h1>About site in {$page.lang}</h1>

<LangSwitch />
