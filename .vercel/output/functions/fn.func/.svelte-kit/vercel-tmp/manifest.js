export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.cf63dff3.js","imports":["_app/immutable/entry/start.cf63dff3.js","_app/immutable/chunks/index.0c3d5467.js","_app/immutable/chunks/singletons.441eac67.js","_app/immutable/chunks/index.0a121990.js"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.c2e5e1ef.js","imports":["_app/immutable/entry/app.c2e5e1ef.js","_app/immutable/chunks/index.0c3d5467.js"],"stylesheets":[],"fonts":[]}},
		nodes: [
			() => import('../output/server/nodes/0.js'),
			() => import('../output/server/nodes/1.js'),
			() => import('../output/server/nodes/2.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			},
			{
				id: "/api/chatgpt",
				pattern: /^\/api\/chatgpt\/?$/,
				params: [],
				page: null,
				endpoint: () => import('../output/server/entries/endpoints/api/chatgpt/_server.js')
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
