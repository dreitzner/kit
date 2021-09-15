<!-- TODO: i18n -->
<script lang="typescript">
    import { i18nRoute } from '$app/navigation';
    import { page } from '$app/stores';

</script>
<a href="{i18nRoute($page.lang, '/')}">home</a>
<a href="{i18nRoute($page.lang, '/about')}">about</a>
<hr>
<slot />
