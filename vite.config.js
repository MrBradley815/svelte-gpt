import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig, loadEnv } from 'vite';

// export default defineConfig({
// 	plugins: [sveltekit()]
// });

export default ({ mode }) => {
	process.env = {...process.env, ...loadEnv(mode, process.cwd())};

	// import.meta.env.VITE_NAME available here with: process.env.VITE_NAME
	// import.meta.env.VITE_PORT available here with: process.env.VITE_PORT

	return defineConfig({
			plugins: [sveltekit()],
			'process.env': process.env
	});
}
