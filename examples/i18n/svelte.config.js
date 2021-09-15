import preprocess from 'svelte-preprocess';
// import adnetlify from '@sveltejs/adapter-netlify';
import adnode from '@sveltejs/adapter-node';
// import adstatic from '@sveltejs/adapter-static';
// import advercel from '@sveltejs/adapter-vercel';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		i18n: {
			defaultLocale: 'en',
			locales: ['en', 'de']
		},
		// adapter: adnetlify()
		adapter: adnode()
		// adapter: adstatic()
		// adapter: advercel()
	}
};

export default config;
