<script type="typescript">
    import { switchLocalePath } from '$app/navigation';
    import {i18n} from '$app/stores';

    const fixType = (input: unknown): string => typeof input === 'string' ? input : '';
</script>

<button on:click={() => switchLocalePath($i18n?.defaultLocale)}>switch to {$i18n?.defaultLocale}</button>
{#each $i18n?.locales ?? [] as locale}
    <button on:click={() => switchLocalePath(fixType(locale))}>switch to {locale}</button>
{/each}
    