<!-- TODO: i18n -->
<script lang="typescript">
 import { i18nRoute } from '$app/navigation';
 import {browser} from '$app/env';
</script>
<a href="{browser && i18nRoute('/')}">home</a>
<a href="{browser && i18nRoute('/about')}">about</a>
<hr>
<slot />
