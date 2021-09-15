<!-- remove for static -->
<script context="module" lang="typescript">
    export const load = ({lang}) => {
        return {
            props: {
                langLoad: lang
            }
        };
    };
</script>

<script lang="typescript">
    export let langLoad;
    import {i18n, page} from '$app/stores';

    import LangSwitch from '$lib/LangSwitch.svelte';
</script>

<h1>Welcome to SvelteKit</h1>
<h2>current lang: {$page.lang}</h2>
<h2>lang from load: {langLoad}</h2>
<p>{JSON.stringify($i18n, null, 2)}</p>
<LangSwitch />
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
